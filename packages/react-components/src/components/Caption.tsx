// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { Stack, Text } from '@fluentui/react';
import React from 'react';
import { _FileUploadCardsStrings } from './FileUploadCards';
import { OnRenderAvatarCallback } from '../types';
import {
  captionClassName,
  captionsContentContainerClassName,
  displayNameClassName,
  displayNameContainerClassName
} from './styles/Captions.style';
import { _CaptionsInfo } from './CaptionsBanner';

/**
 * @internal
 * Props for a single line of caption.
 */
export interface _CaptionProps extends _CaptionsInfo {
  /**
   * Optional callback to override render of the avatar.
   *
   * @param userId - user Id
   */
  onRenderAvatar?: OnRenderAvatarCallback;
  color: string;
}

/**
 * @internal
 * A component for displaying a single line of caption
 */
export const _Caption = (props: _CaptionProps): JSX.Element => {
  const { displayName, captionText, color } = props;

  return (
    // <Stack horizontal verticalAlign="start" horizontalAlign="start">
    //   {/* <Stack.Item className={iconClassName}>{userIcon}</Stack.Item> */}

    <Stack verticalAlign="start" className={captionsContentContainerClassName}>
      <Stack.Item className={displayNameContainerClassName}>
        <Text className={displayNameClassName}>{displayName}</Text>
      </Stack.Item>
      <Stack.Item className={captionClassName} dir="auto" style={{ backgroundColor: color, width: 'fit-content' }}>
        {captionText}
      </Stack.Item>
    </Stack>
    // </Stack>
  );
};
