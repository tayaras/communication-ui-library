// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CommunicationUserIdentifier, MicrosoftTeamsUserIdentifier } from '@azure/communication-common';
import { CallAdapterLocator, toFlatCommunicationIdentifier } from '@azure/communication-react';
import { ChoiceGroup, IChoiceGroupOption, Stack, TextField, Text } from '@fluentui/react';
import { createAutoRefreshingCredential } from '../utils/credential';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { WEB_APP_TITLE } from '../utils/AppUtils';
import { callOptionsGroupStyles, outboundTextField } from '../styles/HomeScreen.styles';
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
  const { token, userId, displayName, callLocator } = props;

  const credential = useMemo(() => {
    return createAutoRefreshingCredential(toFlatCommunicationIdentifier(userId), token);
  }, [token, userId]);

  const clickToCallOptions: IChoiceGroupOption[] = [
    { key: 'modal', text: 'start call in widget' },
    { key: 'window', text: 'start call in new window' }
  ];
  const [chosenCallOption, setChosenCallOption] = useState<IChoiceGroupOption>(clickToCallOptions[0]);
  const [participantIds, setParticipantIds] = useState<string[]>();
  const newWindowRef = React.useRef<Window | null>(null);
  const startCallWindow: boolean = chosenCallOption.key === 'window';
  // we also want to make this memoized version of the args for the new window.
  const adapterParams = useMemo(() => {
    const args = {
      userId: userId as CommunicationUserIdentifier,
      displayName,
      credential,
      token,
      locator: participantIds ? { participantIds } : callLocator,
      alternateCallerId: '+15125186727'
    };
    return args;
  }, [userId, displayName, credential, token, callLocator, participantIds]);

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
          alternateCallerId: adapterParams.alternateCallerId
        };
        console.log(data);
        newWindowRef.current?.postMessage(data, window.origin);
      }
    });
  }, [adapterParams, adapterParams.locator]);

  const startNewWindow = useCallback(() => {
    const startNewSessionString = 'newSession=true';
    newWindowRef.current = window.open(
      window.origin + `/?${startNewSessionString}`,
      WEB_APP_TITLE,
      'width=500, height=450'
    );
  }, [adapterParams]);

  return (
    <Stack style={{ padding: '3rem' }} tokens={{ childrenGap: '1.5rem' }}>
      <Stack>
        <Text variant="xLarge">Welcome to a Click to Call sample</Text>
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
          click start call.
        </Text>
        <Text>The widget is set up in two configurations using the AzureCommunications Call Composite.</Text>
        <ul>
          <li>
            If you select <b>start call in widget</b> you will have a audio only support call from the widget in the
            corner
          </li>
          <li>
            If you select <b>start call in new window</b> you will have a audio and video support call in a new window.
            This use case will have configuration of devices for the local user.
          </li>
        </ul>
        <Text>
          If you have any questions on how to use the app, or are looking for a teams test user reach out to Donald
          McEachern on teams, <b>alias</b>: dmceachern
        </Text>
      </Stack>
      <Stack horizontal tokens={{ childrenGap: '1.5rem' }} style={{ overflow: 'hidden' }}>
        <ChoiceGroup
          styles={callOptionsGroupStyles}
          label="Choose how to start the call"
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
    </Stack>
  );
};
