// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CommunicationUserIdentifier } from '@azure/communication-common';
import {
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
  const credential = useMemo(() => {
    return createAutoRefreshingCredential(toFlatCommunicationIdentifier(adapterArgs.userId), adapterArgs.token);
  }, [adapterArgs.token, adapterArgs.userId]);
  const afterCreate = (adapter: CallAdapter): Promise<CallAdapter> => {
    adapter.on('callEnded', () => {
      window.close();
    });
    adapter.joinCall(true);
    return new Promise((resolve, reject) => resolve(adapter));
  };
  const adapter = useAzureCommunicationCallAdapter(
    { ...adapterArgs, displayName: 'test', locator, credential },
    afterCreate
  );
  if (!adapter) {
    document.title = `credentials - ${WEB_APP_TITLE}`;
    return <Spinner label={'Creating adapter'} ariaLive="assertive" labelPosition="top" />;
  }
  return (
    <Stack styles={{ root: { height: '100vh', width: '100vw' } }}>
      <CallComposite
        options={{
          callControls: { moreButton: false, screenShareButton: false, displayType: 'compact' }
        }}
        adapter={adapter}
      />
    </Stack>
  );
};
