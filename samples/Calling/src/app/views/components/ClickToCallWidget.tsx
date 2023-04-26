// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AzureCommunicationCallAdapterArgs,
  CallAdapter,
  CallComposite,
  TeamsCallAdapterArgs,
  useAzureCommunicationCallAdapter
} from '@azure/communication-react';
import { IStackStyles, PrimaryButton, Spinner, Stack, Theme, useTheme } from '@fluentui/react';
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
}

/**
 * Widget for Click to Call
 * @param props
 */
export const ClickToCallWidget = (props: clickToCallWidgetProps): JSX.Element => {
  const { adapterArgs, onCreateNewWindowExperience, videoOptions, onRenderLogo } = props;

  const afterCreate = (adapter: CallAdapter): Promise<CallAdapter> => {
    adapter.on('callEnded', () => {
      setInCall(false);
    });
    return new Promise((resolve, reject) => resolve(adapter));
  };

  const theme = useTheme();
  console.log(adapterArgs);
  const args = useMemo(() => adapterArgs.args, [adapterArgs.args]);
  const adapter = useAzureCommunicationCallAdapter(
    { ...args, displayName: 'test' },
    adapterArgs?.afterCreate ?? afterCreate
  );
  console.log(adapter);
  const [inCall, setInCall] = useState(false);

  if (onCreateNewWindowExperience) {
    return (
      <Stack styles={clickToCallContainerStyles(theme)} tokens={{ childrenGap: '1rem' }}>
        {onRenderLogo && onRenderLogo()}
        {
          <PrimaryButton
            onClick={() => {
              onCreateNewWindowExperience(adapterArgs.args);
            }}
          >
            Start Call
          </PrimaryButton>
        }
      </Stack>
    );
  }

  if (!adapter) {
    return (
      <Stack styles={clickToCallContainerStyles(theme)} tokens={{ childrenGap: '1rem' }}>
        {!inCall && onRenderLogo && onRenderLogo()}
        <Stack.Item>{!adapter && <Spinner label="Getting you set up..." />}</Stack.Item>
      </Stack>
    );
  }

  return (
    <Stack styles={clickToCallContainerStyles(theme)} tokens={{ childrenGap: '1rem' }}>
      {!inCall && onRenderLogo && onRenderLogo()}
      {inCall && adapter && (
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
        />
      )}
      {!inCall && adapter && (
        <PrimaryButton
          onClick={() => {
            setInCall(true);
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
      overflow: 'hidden'
    }
  };
};
