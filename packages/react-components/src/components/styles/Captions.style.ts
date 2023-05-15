// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { mergeStyles } from '@fluentui/react';
import { _pxToRem } from '@internal/acs-ui-common';
import { scrollbarStyles } from './Common.style';

/**
 * @private
 */
export const iconClassName = mergeStyles({
  marginRight: _pxToRem(8)
});

/**
 * @private
 */
export const displayNameClassName = mergeStyles({
  fontWeight: 400,
  fontSize: _pxToRem(12),
  lineHeight: _pxToRem(16)
});

/**
 * @private
 */
export const captionClassName = mergeStyles({
  fontWeight: 600,
  fontSize: _pxToRem(20),
  lineHeight: _pxToRem(22),
  width: '100%',
  borderRadius: '3px',
  color: 'white',
  minHeight: '30px',
  padding: '12px',
  marginTop: '5px'
});

/**
 * @private
 */
export const captionsContainerClassName = mergeStyles({
  margin: 0,
  padding: 0
});

/**
 * @private
 */
export const captionContainerClassName = mergeStyles({
  marginTop: _pxToRem(6),
  marginBottom: _pxToRem(6),
  overflowAnchor: 'auto'
});

/**
 * @private
 */
export const captionsBannerClassName = mergeStyles({
  height: _pxToRem(700),
  margin: '10px',
  overflowY: 'auto',
  overflowX: 'hidden',
  ...scrollbarStyles
});

/**
 * @private
 */
export const loadingBannerClassName = mergeStyles({
  height: _pxToRem(700)
});

/**
 * @private
 */
export const captionsContentContainerClassName = mergeStyles({
  width: '100%'
});

/**
 * @private
 */
export const displayNameContainerClassName = mergeStyles({
  overflow: 'hidden',
  textOverflow: 'ellipsis'
});
