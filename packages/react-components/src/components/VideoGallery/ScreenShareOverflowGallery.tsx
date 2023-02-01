// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Stack } from '@fluentui/react';
import React, { useMemo } from 'react';
import { GridLayout } from '../GridLayout';
import { HorizontalGalleryStyles } from '../HorizontalGallery';
import {
  horizontalGalleryContainerStyle,
  ScreenshareGalleryContainerStyle
} from './styles/VideoGalleryResponsiveHorizontalGallery.styles';

/**
 * A ResponsiveHorizontalGallery styled for the {@link VideoGallery}
 *
 * @private
 */
export const ScreenShareOverflowGallery = (props: {
  shouldFloatLocalVideo?: boolean;
  isNarrow?: boolean;
  horizontalGalleryElements?: JSX.Element[];
  styles?: HorizontalGalleryStyles;
}): JSX.Element => {
  const { shouldFloatLocalVideo = false, isNarrow = false, horizontalGalleryElements, styles } = props;

  return (
    <Stack styles={{ root: horizontalGalleryContainerStyle(false, false) }}>
      <GridLayout>{horizontalGalleryElements}</GridLayout>
    </Stack>
  );
};
/**
 * unlike the other galleries we cannot apply CSS to the children
 *
 * is there a way we can enforce a max width on the grid view and not break the tiles within?
 */
