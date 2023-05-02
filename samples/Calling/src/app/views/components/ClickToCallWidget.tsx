// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AzureCommunicationCallAdapterArgs,
  CallAdapter,
  CallComposite,
  TeamsCallAdapterArgs,
  useAzureCommunicationCallAdapter
} from '@azure/communication-react';
import {
  IButtonStyles,
  IStackStyles,
  IconButton,
  PrimaryButton,
  Spinner,
  Stack,
  TextField,
  Theme,
  useTheme
} from '@fluentui/react';
import { kcupTheme } from '../../App';
import React, { useMemo } from 'react';
import { useState } from 'react';

export interface clickToCallWidgetProps {
  /**
   * Properties needed to create a AzureCommunicationsCallAdapter or TeamsCallAdapter
   */
  adapterArgs: {
    args: AzureCommunicationCallAdapterArgs;
    afterCreate?: (adapter: CallAdapter) => Promise<CallAdapter>;
  };
  /**
   * if provided, will be used to create a new window for call experience. if not provided
   * will use the current window.
   */
  onCreateNewWindowExperience?: (
    adapterArgs: AzureCommunicationCallAdapterArgs | TeamsCallAdapterArgs,
    origin?: string,
    windowSize?: { height: number; width: number }
  ) => void;
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
export const ClickToCallWidget = (props: clickToCallWidgetProps): JSX.Element => {
  const { adapterArgs, onCreateNewWindowExperience, videoOptions, onRenderLogo, onSetDisplayName } = props;

  const afterCreate = (adapter: CallAdapter): Promise<CallAdapter> => {
    adapter.on('callEnded', () => {
      adapter.dispose();
      setWidgetState('ended');
    });
    return new Promise((resolve, reject) => resolve(adapter));
  };

  const [widgetState, setWidgetState] = useState<'new' | 'setup' | 'call' | 'ended'>();
  const [displayName, setDisplayName] = useState<string>();

  const theme = useTheme();
  console.log(adapterArgs.args.locator);
  const args = useMemo(() => adapterArgs.args, [adapterArgs.args]);
  const adapter = useAzureCommunicationCallAdapter({ ...args, displayName }, adapterArgs?.afterCreate ?? afterCreate);

  if (onCreateNewWindowExperience && widgetState !== 'setup') {
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
  }

  if (widgetState === 'setup' && onCreateNewWindowExperience && onSetDisplayName) {
    return (
      <Stack styles={clickToCallContainerStyles(theme)} tokens={{ childrenGap: '1rem' }}>
        <Stack
          tokens={{ childrenGap: '1rem' }}
          style={{
            margin: 'auto',
            borderRadius: theme.effects.roundedCorner6,
            background: kcupTheme.palette.themePrimary,
            height: '5rem',
            width: '10rem'
          }}
        >
          {onRenderLogo && onRenderLogo()}
          <IconButton iconProps={{ iconName: 'close' }} onClick={() => setWidgetState('new')}></IconButton>
        </Stack>
        <TextField
          label={'Display Name'}
          required={true}
          placeholder={'Enter your name'}
          onChange={(_, newValue) => {
            console.log(newValue);
            onSetDisplayName(newValue);
            setDisplayName(newValue);
          }}
        />
        <PrimaryButton
          styles={startCallButtonStyles(kcupTheme)}
          onClick={() => {
            if (displayName) {
              setWidgetState('call');
              onSetDisplayName(displayName);
              onCreateNewWindowExperience(adapterArgs.args);
            }
          }}
        >
          StartCall
        </PrimaryButton>
      </Stack>
    );
  }
  if (!adapter) {
    return (
      <Stack styles={clickToCallContainerStyles(theme)} tokens={{ childrenGap: '1rem' }}>
        {(widgetState === 'new' || widgetState === 'ended') && onRenderLogo && onRenderLogo()}
        <Stack.Item>{!adapter && <Spinner label="Getting you set up..." />}</Stack.Item>
      </Stack>
    );
  }

  return (
    <Stack styles={clickToCallContainerStyles(theme)} tokens={{ childrenGap: '1rem' }}>
      {widgetState === 'call' && onRenderLogo && onRenderLogo()}
      {widgetState === 'call' && adapter && (
        <CallComposite
          adapter={adapter}
          options={{
            callControls: {
              cameraButton: videoOptions?.localVideo,
              screenShareButton: false,
              peopleButton: false,
              displayType: 'compact'
            }
          }}
          fluentTheme={kcupTheme}
        />
      )}
      {(widgetState === 'new' || widgetState === 'ended') && adapter && (
        <PrimaryButton
          onClick={() => {
            setWidgetState('call');
            adapter.joinCall(true);
          }}
        >
          Start Call
        </PrimaryButton>
      )}
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
