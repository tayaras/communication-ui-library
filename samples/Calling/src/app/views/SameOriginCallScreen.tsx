// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CommunicationUserIdentifier } from '@azure/communication-common';
import {
  AvatarPersonaData,
  CallAdapter,
  CallAdapterLocator,
  CallComposite,
  toFlatCommunicationIdentifier,
  useAzureCommunicationCallAdapter
} from '@azure/communication-react';
import { Spinner, Stack } from '@fluentui/react';
import { WEB_APP_TITLE } from '../utils/AppUtils';
import React, { useMemo } from 'react';
import { createAutoRefreshingCredential } from '../utils/credential';
import { kcupTheme } from '../App';

export const SameOriginCallScreen = (props: {
  adapterArgs: {
    userId: CommunicationUserIdentifier;
    displayName: string;
    token: string;
    locator: CallAdapterLocator;
    alternateCallerId?: string;
  };
}): JSX.Element => {
  const { adapterArgs } = props;
  const locator = adapterArgs.locator;
  console.log(adapterArgs);
  const credential = useMemo(() => {
    return createAutoRefreshingCredential(toFlatCommunicationIdentifier(adapterArgs.userId), adapterArgs.token);
  }, [adapterArgs.token, adapterArgs.userId]);
  const afterCreate = (adapter: CallAdapter): Promise<CallAdapter> => {
    adapter.on('callEnded', () => {
      adapter.dispose();
      window.close();
    });
    adapter.joinCall(true);
    return new Promise((resolve, reject) => resolve(adapter));
  };
  const adapter = useAzureCommunicationCallAdapter({ ...adapterArgs, locator, credential }, afterCreate);

  const onfetchAvatarPersonaData = async (userId: string): Promise<AvatarPersonaData> => {
    return {
      initialsColor: '#f3d1bd'
    };
  };
  if (!adapter) {
    document.title = `credentials - ${WEB_APP_TITLE}`;
    return <Spinner label={'Creating adapter'} ariaLive="assertive" labelPosition="top" />;
  }
  return (
    <Stack styles={{ root: { height: '100vh', width: '100vw' } }}>
      <CallComposite
        options={{
          callControls: { moreButton: false, peopleButton: false, screenShareButton: false, displayType: 'compact' }
        }}
        adapter={adapter}
        fluentTheme={kcupTheme}
        onFetchAvatarPersonaData={onfetchAvatarPersonaData}
      />
    </Stack>
  );
};
