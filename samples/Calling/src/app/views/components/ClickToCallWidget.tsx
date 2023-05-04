// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  IButtonStyles,
  IStackStyles,
  IconButton,
  PrimaryButton,
  Stack,
  TextField,
  Theme,
  useTheme
} from '@fluentui/react';
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

  const theme = useTheme();

  if (widgetState === 'setup' && onCreateNewWindowExperience && onSetDisplayName) {
    return (
      <Stack styles={clickToCallContainerStyles(theme)} tokens={{ childrenGap: '1rem' }}>
        <IconButton
          style={{
            position: 'absolute',
            top: '0.2rem',
            right: '0.2rem'
          }}
          iconProps={{ iconName: 'Dismiss' }}
          onClick={() => setWidgetState('new')}
        />
        <Stack
          tokens={{ childrenGap: '1rem' }}
          style={{
            margin: 'auto',
            borderRadius: theme.effects.roundedCorner6,
            height: '5rem',
            width: '10rem'
          }}
        >
          {onRenderLogo && onRenderLogo()}
        </Stack>
        <TextField
          label={'Display Name'}
          required={true}
          placeholder={'Enter your name'}
          onChange={(_, newValue) => {
            setDisplayName(newValue);
          }}
        />
        <PrimaryButton
          styles={startCallButtonStyles(theme)}
          onClick={() => {
            if (displayName) {
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
      styles={clickToCallContainerStyles(theme)}
      tokens={{ childrenGap: '1rem' }}
      onClick={() => {
        setWidgetState('setup');
      }}
    >
      <Stack style={{ height: '5.3rem', width: '5rem', transform: 'scale(1.4)' }}>
        {onRenderLogo && onRenderLogo()}
      </Stack>
    </Stack>
  );
};

const clickToCallContainerStyles = (theme: Theme): IStackStyles => {
  return {
    root: {
      minwidth: '16rem',
      maxHeight: '20rem',
      padding: '0.5rem',
      boxShadow: theme.effects.elevation16,
      borderRadius: theme.effects.roundedCorner6,
      bottom: 0,
      right: '1rem',
      position: 'absolute',
      overflow: 'hidden',
      cursor: 'pointer'
    }
  };
};

const startCallButtonStyles = (theme: Theme): IButtonStyles => {
  return {
    root: {
      background: theme.palette.themePrimary,
      borderRadius: theme.effects.roundedCorner6,
      borderColor: theme.palette.themePrimary
    },
    textContainer: {
      color: theme.palette.white
    }
  };
};
