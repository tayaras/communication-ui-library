// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ControlBarButton, ControlBarButtonProps } from './ControlBarButton';
import React from 'react';
import { _HighContrastAwareIcon } from './HighContrastAwareIcon';

/**
 * options bag to start captions
 *
 * @internal
 */
export type _captionsOptions = {
  spokenLanguage: string;
};

/**
 *@internal
 */
export interface _StartCaptionsButtonProps extends ControlBarButtonProps {
  /**
   * Utility property for using this component with communication react handlers
   * Start captions based on captions state
   */
  onStartCaptions: (captionsOptions?: _captionsOptions) => Promise<void>;
  /**
   * Utility property for using this component with communication react handlers
   * Start captions based on captions state
   */
  onStopCaptions: () => Promise<void>;
  /**
   * Spoken language set for starting captions
   */
  currentSpokenLanguage?: string;
  /**
   * Optional strings to override in component
   */
  strings?: _StartCaptionsButtonStrings;
}

/**
 * Strings for the hold button labels
 * @internal
 */
export interface _StartCaptionsButtonStrings {
  /**
   * Label for when action is to start Captions
   */
  onLabel: string;
  /**
   * Label for when action is to stop Captions
   */
  offLabel: string;
  /**
   * Content for when button is checked, captions is on
   */
  tooltipOnContent: string;
  /**
   * Content for when button is unchecked, captions is off
   */
  tooltipOffContent: string;
}

/**
 * a button to start or stop captions
 *
 * Can be used with {@link ControlBar}
 *
 * @param props - properties for the start captions button.
 * @returns
 * @internal
 */
export const _StartCaptionsButton = (props: _StartCaptionsButtonProps): JSX.Element => {
  const { onStartCaptions, onStopCaptions, currentSpokenLanguage, strings } = props;

  const onRenderStartIcon = (): JSX.Element => {
    return <_HighContrastAwareIcon disabled={props.disabled} iconName="CaptionsIcon" />;
  };
  const onRenderOffIcon = (): JSX.Element => {
    return <_HighContrastAwareIcon disabled={props.disabled} iconName="CaptionsOffIcon" />;
  };

  const captionsOptions: _captionsOptions = {
    spokenLanguage: currentSpokenLanguage ?? 'en-us'
  };

  const onToggleStartCaptions = () => {
    if (props.checked) {
      onStopCaptions();
    } else {
      onStartCaptions(captionsOptions);
    }
  };

  return (
    <ControlBarButton
      {...props}
      strings={strings}
      onClick={onToggleStartCaptions ?? props.onClick}
      onRenderOnIcon={onRenderStartIcon}
      onRenderOffIcon={onRenderOffIcon}
    />
  );
};
