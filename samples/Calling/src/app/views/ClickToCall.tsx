// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AzureCommunicationTokenCredential,
  CommunicationUserIdentifier,
  MicrosoftTeamsUserIdentifier
} from '@azure/communication-common';
import {
  CallAdapterLocator,
  CallComposite,
  toFlatCommunicationIdentifier,
  useAzureCommunicationCallAdapter
} from '@azure/communication-react';
import {
  ContextualMenu,
  FocusTrapCallout,
  Modal,
  PrimaryButton,
  Spinner,
  Stack,
  Text,
  TextField
} from '@fluentui/react';
import { createAutoRefreshingCredential } from '../utils/credential';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { WEB_APP_TITLE, createGroupId } from '../utils/AppUtils';
import { CallAdapter } from '@azure/communication-react';
import { outboundTextField } from '../styles/HomeScreen.styles';
import { createPortal } from 'react-dom';

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

  const [click2CallExp, setClick2CallExp] = useState<'callout' | 'modal' | 'dragModal' | 'reactPortal'>();

  const [alternateCallerId, setAlternateCallerId] = useState<string | undefined>(undefined);
  const [participantIds, setParticipantIds] = useState<string[]>();

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

  return (
    <Stack horizontal tokens={{ childrenGap: '1.5rem' }}>
      <Stack tokens={{ childrenGap: '1.5rem' }}>
        <Text>Click 2 Call</Text>
        <PrimaryButton
          onClick={() => {
            setClick2CallExp('modal');
          }}
        >
          Modal Click to Call
        </PrimaryButton>
        <PrimaryButton
          onClick={() => {
            setClick2CallExp('dragModal');
          }}
        >
          Draggable Modal Click to Call
        </PrimaryButton>
        <PrimaryButton
          id="callout-button"
          onClick={() => {
            setClick2CallExp('callout');
          }}
        >
          Callout Click to Call
        </PrimaryButton>
        <PrimaryButton
          onClick={() => {
            setClick2CallExp('reactPortal');
          }}
        >
          React portal Click to Call
        </PrimaryButton>
        <PrimaryButton
          onClick={() => {
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
          }}
        >
          Same origin Click to Call
        </PrimaryButton>
        {click2CallExp === 'modal' && (
          <ModalNoDragComposite
            adapterArgs={adapterParams}
            onDismiss={() => setClick2CallExp(undefined)}
            participants={participantIds}
          />
        )}
        {click2CallExp === 'dragModal' && (
          <ModalDragComposite
            adapterArgs={adapterParams}
            onDismiss={() => setClick2CallExp(undefined)}
            participants={participantIds}
          />
        )}
        {click2CallExp === 'callout' && (
          <CalloutComposite
            adapterArgs={adapterParams}
            onDismiss={() => setClick2CallExp(undefined)}
            participants={participantIds}
          />
        )}
        {click2CallExp === 'reactPortal' && (
          <ReactPortalComposite adapterArgs={adapterParams} participants={participantIds} />
        )}
      </Stack>
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
 * component to host the call composite in a callout
 * @param props
 * @returns
 */
const CalloutComposite = (props: {
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
  const { adapterArgs, onDismiss } = props;

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

/**
 * component to host the call composite in a modal that is draggable.
 * @param props
 * @returns
 */
const ModalDragComposite = (props: {
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
  const { adapterArgs, onDismiss } = props;

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
    <Modal
      isOpen={true}
      isModeless={true}
      dragOptions={{ keepInBounds: true, moveMenuItemText: 'Move', closeMenuItemText: 'Close', menu: ContextualMenu }}
      onDismiss={onDismiss}
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
const ModalNoDragComposite = (props: {
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
  const { adapterArgs, onDismiss } = props;
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
