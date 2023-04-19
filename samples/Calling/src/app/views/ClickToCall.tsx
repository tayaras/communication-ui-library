// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AzureCommunicationTokenCredential,
  CommunicationUserIdentifier,
  MicrosoftTeamsUserIdentifier
} from '@azure/communication-common';
import {
  AzureCommunicationCallAdapterArgs,
  CallAdapterLocator,
  CallComposite,
  createAzureCommunicationCallAdapter,
  toFlatCommunicationIdentifier,
  useAzureCommunicationCallAdapter
} from '@azure/communication-react';
import {
  ChoiceGroup,
  ContextualMenu,
  FocusTrapCallout,
  IChoiceGroupOption,
  IconButton,
  Modal,
  PrimaryButton,
  Spinner,
  Stack,
  Text,
  TextField
} from '@fluentui/react';
import { createAutoRefreshingCredential } from '../utils/credential';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { WEB_APP_TITLE, createGroupId } from '../utils/AppUtils';
import { CallAdapter } from '@azure/communication-react';
import { callOptionsGroupStyles, outboundTextField } from '../styles/HomeScreen.styles';
import { createPortal } from 'react-dom';
import { ClickToCallButton } from './components/ClickToCallButton';
import heroSVG from '../../assets/hero.svg';
import { ClickToCallWidget } from './components/ClickToCallWidget';

export interface ClickToCallPageProps {
  token: string;
  userId:
    | CommunicationUserIdentifier
    | /* @conditional-compile-remove(teams-identity-support) */ MicrosoftTeamsUserIdentifier;
  callLocator: CallAdapterLocator;
  displayName: string;
}

export const ClickToCallPage = (props: ClickToCallPageProps): JSX.Element => {
  const { token, userId, displayName, callLocator = createGroupId() } = props;

  const credential = useMemo(() => {
    return createAutoRefreshingCredential(toFlatCommunicationIdentifier(userId), token);
  }, [token, userId]);

  const clickToCallOptions: IChoiceGroupOption[] = [
    { key: 'modal', text: 'start call in widget' },
    { key: 'window', text: 'start call in new window' }
  ];
  const [chosenCallOption, setChosenCallOption] = useState<IChoiceGroupOption>(clickToCallOptions[0]);
  const [alternateCallerId, setAlternateCallerId] = useState<string | undefined>(undefined);
  const [participantIds, setParticipantIds] = useState<string[]>();
  const startCallWindow: boolean = chosenCallOption.key === 'window';
  const startCallModal: boolean = chosenCallOption.key === 'modal';
  // we also want to make this memoized version of the args for the new window.
  const adapterParams = useMemo(() => {
    return {
      userId: userId as CommunicationUserIdentifier,
      displayName,
      credential,
      token,
      locator: participantIds ? { participantIds } : callLocator,
      alternateCallerId
    };
  }, [userId, displayName, credential, token, callLocator, alternateCallerId, participantIds]);

  const startNewWindow = useCallback(() => {
    const adapterArgsString = Object.keys(adapterParams)
      .map((key) => {
        if (key === 'userId') {
          return `${key}=${JSON.stringify(adapterParams[key].communicationUserId)}`;
        } else if (key === 'locator') {
          return `${key}=${JSON.stringify(adapterParams[key])}`;
        } else if (key === 'alternateCallerId' || key === 'credential') {
          return '';
        } else {
          return `${key}=${adapterParams[key]}`;
        }
      })
      .join('&');
    return window.open(window.origin + `/?${adapterArgsString}`, WEB_APP_TITLE, 'width=500, height=450');
  }, [adapterParams]);

  return (
    <Stack horizontal tokens={{ childrenGap: '1.5rem' }} style={{ overflow: 'hidden' }}>
      <ChoiceGroup
        styles={callOptionsGroupStyles}
        defaultSelectedKey={'modal'}
        options={clickToCallOptions}
        onChange={(_, option) => option && setChosenCallOption(option)}
      />
      <ClickToCallWidget
        adapterArgs={{ args: adapterParams }}
        onCreateNewWindowExperience={startCallWindow ? startNewWindow : undefined}
        videoOptions={{ localVideo: false, remoteVideo: true }}
        onRenderLogo={() => {
          return <img src={heroSVG.toString()} alt="logo" />;
        }}
      />
      {/* <ClickToCallButton
        adapterArgs={adapterParams}
        onRenderCallSurface={startCallModal ? ModalDragComposite : undefined}
        onDismissCallSurface={() => false}
        onCreateNewWindowExperience={startCallWindow ? startNewWindow : undefined}
        onRenderLogo={() => {
          return <img src={heroSVG.toString()} alt="logo" />;
        }}
      /> */}
      <Stack tokens={{ childrenGap: '1.5rem' }}>
        <TextField
          className={outboundTextField}
          label={'Participants'}
          placeholder={"Comma seperated ACS user ID's"}
          onChange={(_, newValue) => (newValue ? setParticipantIds([newValue]) : setParticipantIds(undefined))}
        />
        <TextField
          className={outboundTextField}
          label={'AlternateCallerId'}
          placeholder={'ACS Phone number please'}
          onChange={(_, newValue) => (newValue ? setAlternateCallerId(newValue) : setAlternateCallerId(undefined))}
        />
      </Stack>
    </Stack>
  );
};

/**
 * component to host the call composite in a modal that is draggable.
 * @param props
 * @returns
 */
const ModalDragComposite = async (
  adapterArgs: AzureCommunicationCallAdapterArgs,
  onDismiss?: () => void
): Promise<JSX.Element> => {
  const adapter = await createAzureCommunicationCallAdapter({ ...adapterArgs, displayName: 'test' });
  adapter.joinCall(true);
  adapter.on('callEnded', () => {
    if (onDismiss) {
      console.log('call ended');
      onDismiss();
    }
  });

  return (
    <Modal
      isOpen={true}
      dragOptions={{ keepInBounds: true, moveMenuItemText: 'Move', closeMenuItemText: 'Close', menu: ContextualMenu }}
    >
      <Stack styles={{ root: { height: '22rem', width: '30rem' } }}>
        <CallComposite
          adapter={adapter}
          options={{
            callControls: { moreButton: false, screenShareButton: false, displayType: 'compact' }
          }}
        />
      </Stack>
    </Modal>
  );
};

/**
 * component to host the call composite in a modal that is not draggable.
 * @param props
 * @returns
 */
const ModalNoDragComposite = (args: {
  adapterArgs: {
    userId: CommunicationUserIdentifier;
    displayName: string;
    credential: AzureCommunicationTokenCredential;
    token: string;
    locator: CallAdapterLocator;
    alternateCallerId?: string;
  };
  onDismiss: () => void;
  participants?: string[];
}): JSX.Element => {
  const { adapterArgs, onDismiss } = args;
  console.log('adapterArgs', adapterArgs);
  const afterCreate = (adapter: CallAdapter): Promise<CallAdapter> => {
    adapter.on('callEnded', () => {
      onDismiss();
    });
    adapter.joinCall(true);
    return new Promise((resolve, reject) => resolve(adapter));
  };
  const adapter = useAzureCommunicationCallAdapter(
    {
      ...adapterArgs,
      displayName: 'test'
    },
    afterCreate
  );
  if (!adapter) {
    document.title = `credentials - ${WEB_APP_TITLE}`;
    return <Spinner label={'Creating adapter'} ariaLive="assertive" labelPosition="top" />;
  }
  return (
    <Stack>
      <Modal isOpen={true} onDismiss={onDismiss} isModeless={true}>
        <Stack styles={{ root: { height: '22rem', width: '30rem' } }}>
          <CallComposite
            adapter={adapter}
            options={{
              callControls: { moreButton: false, screenShareButton: false, displayType: 'compact' }
            }}
          />
        </Stack>
      </Modal>
    </Stack>
  );
};

/**
 * component to host the call composite in a callout
 * @param props
 * @returns
 */
const CalloutComposite = (args: {
  adapterArgs: {
    userId: CommunicationUserIdentifier;
    displayName: string;
    credential: AzureCommunicationTokenCredential;
    token: string;
    locator: CallAdapterLocator;
    alternateCallerId?: string;
  };
  onDismiss: () => void;
  participants?: string[];
}): JSX.Element => {
  const { adapterArgs, onDismiss } = args;

  const afterCreate = (adapter: CallAdapter): Promise<CallAdapter> => {
    adapter.on('callEnded', () => {
      onDismiss();
    });
    adapter.joinCall(true);
    return new Promise((resolve, reject) => resolve(adapter));
  };
  const adapter = useAzureCommunicationCallAdapter({ ...adapterArgs, displayName: 'test' }, afterCreate);
  if (!adapter) {
    document.title = `credentials - ${WEB_APP_TITLE}`;
    return <Spinner label={'Creating adapter'} ariaLive="assertive" labelPosition="top" />;
  }
  return (
    <FocusTrapCallout target={`#callout-button`} onDismiss={onDismiss} preventDismissOnResize>
      <Stack tokens={{ childrenGap: '1.5rem' }} styles={{ root: { height: '22rem', width: '30rem' } }}>
        <CallComposite
          options={{
            callControls: { moreButton: false, screenShareButton: false, displayType: 'compact' }
          }}
          adapter={adapter}
        />
      </Stack>
    </FocusTrapCallout>
  );
};

const ReactPortalComposite = (props: {
  adapterArgs: {
    userId: CommunicationUserIdentifier;
    displayName: string;
    credential: AzureCommunicationTokenCredential;
    token: string;
    locator: CallAdapterLocator;
    alternateCallerId?: string;
  };
  participants?: string[];
}): JSX.Element => {
  const { adapterArgs } = props;

  const [container, setContainer] = useState<HTMLElement | undefined>(undefined);
  const newWindow = useRef<Window | null>(null);

  const afterCreate = (adapter: CallAdapter): Promise<CallAdapter> => {
    adapter.on('callEnded', () => {
      newWindow.current?.close();
    });
    adapter.joinCall(true);
    return new Promise((resolve, reject) => resolve(adapter));
  };

  const adapter = useAzureCommunicationCallAdapter(
    {
      ...adapterArgs,
      displayName: 'test'
    },
    afterCreate
  );

  const renderComposite = (): JSX.Element => {
    if (!adapter) {
      document.title = `credentials - ${WEB_APP_TITLE}`;
      return <Spinner label={'Creating adapter'} ariaLive="assertive" labelPosition="top" />;
    }
    return (
      <Stack>
        <CallComposite
          adapter={adapter}
          options={{
            callControls: { moreButton: false, screenShareButton: false, displayType: 'compact' }
          }}
        />
      </Stack>
    );
  };

  useEffect(() => {
    setContainer(document.createElement('div'));
  }, []);

  useEffect(() => {
    if (container) {
      newWindow.current = window.open('', '', 'width=600,height=400,left=200,top=200');

      newWindow.current?.document.body.appendChild(container);

      const currentWindow = newWindow.current;

      return () => currentWindow?.close();
    }
    return;
  }, [container]);

  return (container && createPortal(renderComposite(), container)) ?? <>Oooops</>;
};
