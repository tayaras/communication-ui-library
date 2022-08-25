// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React, { ReactNode } from 'react';
import { IStyle, IStackTokens, mergeStyles, Stack, Text } from '@fluentui/react';

/**
 * Generic page with a title and more details text for serving up a notice to the user.
 */
export const JustForAnjul4 = (props: { title: string; moreDetails?: ReactNode; icon?: ReactNode }): JSX.Element => (
  <Stack verticalFill verticalAlign="center" horizontalAlign="center">
    <Stack className={mergeStyles(containerStyle)} tokens={containerItemGap}>
      {props.icon && <Text className={mergeStyles(titleStyles)}>{props.icon}</Text>}
      <Text className={mergeStyles(titleStyles)}>{props.title}</Text>
      <Text className={mergeStyles(moreDetailsStyles)}>{props.moreDetails}</Text>
      <img width={'300px'} src="https://media.giphy.com/media/W78dW8gzrgos8/giphy.gif" alt="" />
      <Text className={mergeStyles(titleStyles)}>You were kicked</Text>
    </Stack>
  </Stack>
);

const containerStyle: IStyle = {
  maxWidth: '22.5rem',
  margin: '1rem'
};

const containerItemGap: IStackTokens = {
  childrenGap: '0.5rem'
};

const titleStyles: IStyle = {
  fontSize: '1.25rem',
  fontWeight: 600
};

const moreDetailsStyles: IStyle = {
  fontSize: '1rem'
};
