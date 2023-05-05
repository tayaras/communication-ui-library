// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { IconButton, PrimaryButton, Stack, TextField, useTheme, Checkbox, Icon } from '@fluentui/react';
import {
  clicktoCallSetupContainerStyles,
  checkboxStyles,
  startCallButtonStyles,
  clickToCallContainerStyles,
  callIconStyles,
  logoContainerStyles,
  collapseButtonStyles
} from '../../styles/ClickToCallWidget.styles';
import React from 'react';
import { useState } from 'react';

export interface clickToCallComponentProps {
  /**
   * if provided, will be used to create a new window for call experience. if not provided
   * will use the current window.
   */
  onCreateNewWindowExperience: (origin?: string, windowSize?: { height: number; width: number }) => void;
  /**
   *
   */
  videoOptions?: { localVideo: boolean; remoteVideo: boolean };
  /**
   * Custom render function for displaying logo.
   * @returns
   */
  onRenderLogo?: () => JSX.Element;
  /**
   * Handler to set displayName for the user in the call.
   * @param displayName
   * @returns
   */
  onSetDisplayName?: (displayName: string | undefined) => void;
}

/**
 * Widget for Click to Call
 * @param props
 */
export const ClickToCallWidget = (props: clickToCallComponentProps): JSX.Element => {
  const { onCreateNewWindowExperience, onRenderLogo, onSetDisplayName } = props;

  const [widgetState, setWidgetState] = useState<'new' | 'setup'>();
  const [displayName, setDisplayName] = useState<string>();
  const [consentToData, setConsentToData] = useState<boolean>(false);

  const theme = useTheme();

  if (widgetState === 'setup' && onCreateNewWindowExperience && onSetDisplayName) {
    return (
      <Stack styles={clicktoCallSetupContainerStyles(theme)} tokens={{ childrenGap: '1rem' }}>
        <IconButton
          styles={collapseButtonStyles}
          iconProps={{ iconName: 'Dismiss' }}
          onClick={() => setWidgetState('new')}
        />
        <Stack tokens={{ childrenGap: '1rem' }} styles={logoContainerStyles}>
          <Stack style={{ transform: 'scale(1.8)' }}>{onRenderLogo && onRenderLogo()}</Stack>
        </Stack>
        <TextField
          label={'Name'}
          required={true}
          placeholder={'Enter your name'}
          onChange={(_, newValue) => {
            setDisplayName(newValue);
          }}
        />
        <Checkbox
          required={true}
          styles={checkboxStyles(theme)}
          label={
            'by checking this box you are consenting that we will collect data from the call for customer support reasons'
          }
          onChange={(_, checked?: boolean | undefined) => {
            setConsentToData(!!checked);
          }}
        ></Checkbox>
        <PrimaryButton
          styles={startCallButtonStyles(theme)}
          onClick={() => {
            if (displayName && consentToData) {
              setWidgetState('new');
              onSetDisplayName(displayName);
              onCreateNewWindowExperience();
            }
          }}
        >
          StartCall
        </PrimaryButton>
      </Stack>
    );
  }

  return (
    <Stack
      horizontalAlign="center"
      verticalAlign="center"
      styles={clickToCallContainerStyles(theme)}
      onClick={() => {
        setWidgetState('setup');
      }}
    >
      <Stack
        horizontalAlign="center"
        verticalAlign="center"
        style={{ height: '4rem', width: '4rem', borderRadius: '50%', background: theme.palette.themePrimary }}
      >
        <Icon iconName="callAdd" styles={callIconStyles(theme)} />
      </Stack>
    </Stack>
  );
};
