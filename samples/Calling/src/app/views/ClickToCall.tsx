// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CommunicationUserIdentifier, MicrosoftTeamsUserIdentifier } from '@azure/communication-common';
import { CallAdapterLocator, toFlatCommunicationIdentifier } from '@azure/communication-react';
import { Stack, TextField, Text } from '@fluentui/react';
import { createAutoRefreshingCredential } from '../utils/credential';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { WEB_APP_TITLE } from '../utils/AppUtils';
import { outboundTextField } from '../styles/HomeScreen.styles';
import { ClickToCallWidget } from './components/ClickToCallWidget';
import heroSVG from '../../assets/hero.svg';

export interface ClickToCallPageProps {
  token: string;
  userId:
    | CommunicationUserIdentifier
    | /* @conditional-compile-remove(teams-identity-support) */ MicrosoftTeamsUserIdentifier;
  callLocator: CallAdapterLocator;
  displayName: string;
}

export const ClickToCallPage = (props: ClickToCallPageProps): JSX.Element => {
  const { token, userId, callLocator } = props;

  const credential = useMemo(() => {
    return createAutoRefreshingCredential(toFlatCommunicationIdentifier(userId), token);
  }, [token, userId]);

  const [participantIds, setParticipantIds] = useState<string[]>();
  const [userDisplayName, setUserDisplayName] = useState<string>();
  const [useVideo, setUseVideo] = useState<boolean>(false);
  const newWindowRef = React.useRef<Window | null>(null);

  // we also want to make this memoized version of the args for the new window.
  const adapterParams = useMemo(() => {
    const args = {
      userId: userId as CommunicationUserIdentifier,
      displayName: userDisplayName ?? '',
      credential,
      token,
      locator: participantIds ? { participantIds } : callLocator,
      alternateCallerId: '+15125186727'
    };
    return args;
  }, [userId, userDisplayName, credential, token, callLocator, participantIds]);

  useEffect(() => {
    window.addEventListener('message', (event) => {
      if (event.origin !== window.origin) {
        return;
      }
      if (event.data === 'args please') {
        const data = {
          userId: adapterParams.userId,
          displayName: adapterParams.displayName,
          token: adapterParams.token,
          locator: adapterParams.locator,
          alternateCallerId: adapterParams.alternateCallerId,
          useVideo: useVideo
        };
        console.log(data);
        newWindowRef.current?.postMessage(data, window.origin);
      }
    });
  }, [adapterParams, adapterParams.locator, adapterParams.displayName, useVideo]);

  const startNewWindow = useCallback(() => {
    const startNewSessionString = 'newSession=true';
    newWindowRef.current = window.open(
      window.origin + `/?${startNewSessionString}`,
      WEB_APP_TITLE,
      'width=400, height=550, left=500, top=500'
    );
  }, [adapterParams]);

  return (
    <Stack
      style={{ height: '100%', width: '100%', padding: '3rem', background: '' }}
      tokens={{ childrenGap: '1.5rem' }}
    >
      <Stack style={{ margin: 'auto' }}>
        <Stack style={{ padding: '3rem' }} horizontal tokens={{ childrenGap: '2rem' }}>
          <Text style={{ marginTop: 'auto' }} variant="xLarge">
            Welcome to a Click to Call sample
          </Text>
          <img style={{ width: '7rem', height: 'auto' }} src={heroSVG.toString()} alt="ACS Cat" />
        </Stack>

        <Text>To start a call to a teams user or Call queue for customer support, you will need the following:</Text>
        <ul>
          <li>A teams test tennant session in a inPrivate browser</li>
          <li>That teams tennant user ID or CallQueue ID that will transfer to that user</li>
          <li>Format for teams user: 8:orgid:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx</li>
          <li>Format for CallQueue: 28:orgid:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx</li>
          <li>Format for phone number: +1xxxxxxxxxx (for NA numbers, replace country code as needed)</li>
        </ul>
        <Text>
          Once you have logged in to teams with the test user. You can copy the Id into the participants field below and
          click <b>start call</b>.
        </Text>
        <Text>
          If you have any questions on how to use the app, or are looking for a teams test user reach out to Donald
          McEachern on teams, <b>alias</b>: dmceachern
        </Text>
        <Stack tokens={{ childrenGap: '1.5rem' }}>
          <TextField
            className={outboundTextField}
            label={'Participants'}
            placeholder={'Teams user ID or CallQueue ID'}
            onChange={(_, newValue) => {
              console.log(newValue);
              newValue ? setParticipantIds([newValue]) : setParticipantIds(undefined);
            }}
          />
        </Stack>
      </Stack>
      <Stack horizontal tokens={{ childrenGap: '1.5rem' }} style={{ overflow: 'hidden', margin: 'auto' }}>
        <ClickToCallWidget
          onCreateNewWindowExperience={startNewWindow}
          onRenderLogo={() => {
            return (
              <img style={{ height: '4rem', width: '4rem', margin: 'auto' }} src={heroSVG.toString()} alt="logo" />
            );
          }}
          onSetDisplayName={setUserDisplayName}
          onSetUseVideo={setUseVideo}
        />
      </Stack>
    </Stack>
  );
};
