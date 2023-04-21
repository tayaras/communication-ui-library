// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CommunicationUserIdentifier, MicrosoftTeamsUserIdentifier } from '@azure/communication-common';
import { CallAdapterLocator, toFlatCommunicationIdentifier } from '@azure/communication-react';
import { ChoiceGroup, IChoiceGroupOption, Stack, TextField } from '@fluentui/react';
import { createAutoRefreshingCredential } from '../utils/credential';
import React, { useCallback, useMemo, useState } from 'react';
import { WEB_APP_TITLE, createGroupId } from '../utils/AppUtils';
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
