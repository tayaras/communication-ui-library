// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AzureCommunicationCallAdapterArgs, TeamsCallAdapterArgs } from '@azure/communication-react';
import { IStackStyles, PrimaryButton, Spinner, Stack, Theme, useTheme } from '@fluentui/react';
import React, { useEffect, useState } from 'react';

/**
 * Properties for new Click to Call button
 */
export interface ClickToCallButtonProps {
  /**
   * Properties needed to create a AzureCommunicationsCallAdapter or TeamsCallAdapter
   */
  adapterArgs: AzureCommunicationCallAdapterArgs;
  /**
   * Custom render function for displaying a CallComposite experience.
   */
  onRenderCallSurface?: (
    adapterArgs: AzureCommunicationCallAdapterArgs | TeamsCallAdapterArgs,
    onDismiss: () => void
  ) => Promise<JSX.Element>;
  /**
   * Callback for sending adapter args to new window for call experience.
   *
   * @param origin: string for custom path to call experience in application.
   * undefined will have window created of applications base origin
   */
  onCreateNewWindowExperience?: (
    adapterArgs: Partial<AzureCommunicationCallAdapterArgs | TeamsCallAdapterArgs>,
    origin?: string,
    windowSize?: { height: number; width: number }
  ) => void;
  /**
   * Render function to display logo for call queue
   */
  onRenderLogo?: () => JSX.Element;
  /**
   *
   * @returns Callback to dismiss a CallSurface
   */
  onDismissCallSurface?: () => void;
}

export const ClickToCallButton = (props: ClickToCallButtonProps): JSX.Element => {
  const { adapterArgs, onRenderCallSurface, onCreateNewWindowExperience, onRenderLogo, onDismissCallSurface } = props;

  const theme = useTheme();

  const [callSurface, setCallSurface] = useState<JSX.Element>();
  const [creatingClient, setCreatingClient] = useState<boolean>(false);

  useEffect(() => {
    if (creatingClient && callSurface) {
      setCreatingClient(false);
    }
  }, [creatingClient, callSurface]);

  const onClick = async (): Promise<void> => {
    if (onCreateNewWindowExperience) {
      onCreateNewWindowExperience(adapterArgs);
    } else if (onRenderCallSurface && onDismissCallSurface) {
      setCreatingClient(true);
      setCallSurface(await onRenderCallSurface(adapterArgs, onDismissCallSurface));
    }
  };

  return (
    <Stack tokens={{ childrenGap: '0.5rem' }} styles={clickToCallContainerStyles(theme)}>
      {onRenderLogo && onRenderLogo()}
      {creatingClient && <Spinner label="Creating client..." />}
      {callSurface}
      <PrimaryButton onClick={onClick}>Click to Call</PrimaryButton>
    </Stack>
  );
};

const clickToCallContainerStyles = (theme: Theme): IStackStyles => {
  return {
    root: {
      width: '10rem',
      maxHeight: '15rem',
      padding: '0.5rem',
      boxShadow: theme.effects.elevation16,
      borderRadius: theme.effects.roundedCorner6,
      bottom: 0,
      right: '1rem',
      position: 'absolute'
    }
  };
};
