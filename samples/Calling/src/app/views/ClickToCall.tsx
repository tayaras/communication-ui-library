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
import { Callout, ContextualMenu, FocusTrapCallout, Modal, PrimaryButton, Spinner, Stack, Text } from '@fluentui/react';
import { createAutoRefreshingCredential } from '../utils/credential';
import React, { useEffect, useMemo, useState } from 'react';
import { WEB_APP_TITLE, createGroupId } from '../utils/AppUtils';
import { CallAdapter } from '@azure/communication-react';

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

  const [click2CallExp, setClick2CallExp] = useState<'callout' | 'modal' | 'dragModal'>();

  // we also want to make this memoized version of the args for the new window.
  const adapterParams = useMemo(() => {
    return {
      userId: userId as CommunicationUserIdentifier,
      displayName,
      credential,
      token,
      locator: callLocator
    };
  }, [userId, displayName, credential, token, callLocator]);

  return (
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
      {click2CallExp === 'modal' && (
        <ModalNoDragComposite adapterArgs={adapterParams} onDismiss={() => setClick2CallExp(undefined)} />
      )}
      {click2CallExp === 'dragModal' && (
        <ModalDragComposite adapterArgs={adapterParams} onDismiss={() => setClick2CallExp(undefined)} />
      )}
      {click2CallExp === 'callout' && (
        <CalloutComposite adapterArgs={adapterParams} onDismiss={() => setClick2CallExp(undefined)} />
      )}
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
  };
  onDismiss: () => void;
}): JSX.Element => {
  const { adapterArgs, onDismiss } = props;
  console.log('adapterArgs', adapterArgs);
  const afterCreate = (adapter: CallAdapter): Promise<CallAdapter> => {
    adapter.on('callEnded', () => {
      onDismiss();
    });
    adapter.joinCall();
    return new Promise((resolve, reject) => resolve(adapter));
  };
  const adapter = useAzureCommunicationCallAdapter({ ...adapterArgs, displayName: 'test' }, afterCreate);
  if (!adapter) {
    document.title = `credentials - ${WEB_APP_TITLE}`;
    return <Spinner label={'Creating adapter'} ariaLive="assertive" labelPosition="top" />;
  }
  return (
    <FocusTrapCallout target={`#callout-button`} onDismiss={onDismiss}>
      <Stack style={{ height: '30rem' }}>
        <Text>Contoso's Call experience</Text>
        <CallComposite
          options={{ callControls: { peopleButton: false, moreButton: false, screenShareButton: false } }}
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
  };
  onDismiss: () => void;
}): JSX.Element => {
  const { adapterArgs, onDismiss } = props;
  console.log('adapterArgs', adapterArgs);
  const adapter = useAzureCommunicationCallAdapter({ ...adapterArgs, displayName: 'test' });
  if (!adapter) {
    document.title = `credentials - ${WEB_APP_TITLE}`;
    return <Spinner label={'Creating adapter'} ariaLive="assertive" labelPosition="top" />;
  }
  return (
    <Modal
      dragOptions={{ keepInBounds: true, moveMenuItemText: 'Move', closeMenuItemText: 'Close', menu: ContextualMenu }}
      onDismiss={onDismiss}
    >
      <Stack>
        <Text>Contoso's call experience</Text>
        <CallComposite adapter={adapter} />
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
  };
  onDismiss: () => void;
}): JSX.Element => {
  const { adapterArgs, onDismiss } = props;
  console.log('adapterArgs', adapterArgs);
  const adapter = useAzureCommunicationCallAdapter({ ...adapterArgs, displayName: 'test' });
  if (!adapter) {
    document.title = `credentials - ${WEB_APP_TITLE}`;
    return <Spinner label={'Creating adapter'} ariaLive="assertive" labelPosition="top" />;
  }
  return (
    <Stack>
      <Modal onDismiss={onDismiss}>
        <Stack tokens={{ childrenGap: '1.5rem' }}>
          <Text>Contoso'sClick to call</Text>
          <CallComposite adapter={adapter} />
        </Stack>
      </Modal>
    </Stack>
  );
};
/**
 * we want versions for
 * - callout
 * - modal
 * - new window
 */
