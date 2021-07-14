// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from 'react';
import { ChatScreen } from './ChatScreen';
import { ChatAdapterProvider } from './adapter/ChatAdapterProvider';
import { ChatAdapter } from './adapter/ChatAdapter';
import { Theme, PartialTheme } from '@fluentui/react';
import {
  CommunicationParticipant,
  DefaultMessageRendererType,
  FluentThemeProvider,
  MessageProps,
  IdentifierProvider,
  Identifiers
} from '@internal/react-components';

export type ChatCompositeProps = {
  adapter: ChatAdapter;
  /**
   * Fluent theme for the composite.
   *
   * Defaults to a light theme if undefined.
   */
  fluentTheme?: PartialTheme | Theme;
  onRenderAvatar?: (userId: string, avatarType?: 'chatThread' | 'participantList') => JSX.Element;
  onRenderMessage?: (messageProps: MessageProps, defaultOnRender?: DefaultMessageRendererType) => JSX.Element;
  onRenderTypingIndicator?: (typingUsers: CommunicationParticipant[]) => JSX.Element;
  options?: ChatOptions;
  identifiers?: Identifiers;
};

/**
 * Additional customizations for the chat composite
 */
export type ChatOptions = {
  /** Choose to show the participant pane */
  showParticipantPane?: boolean;
};

export const ChatComposite = (props: ChatCompositeProps): JSX.Element => {
  const { adapter, fluentTheme, options, identifiers, onRenderAvatar, onRenderTypingIndicator, onRenderMessage } =
    props;

  return (
    <FluentThemeProvider fluentTheme={fluentTheme}>
      <IdentifierProvider identifiers={identifiers}>
        <ChatAdapterProvider adapter={adapter}>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <ChatScreen
            showParticipantPane={options?.showParticipantPane}
            onRenderAvatar={onRenderAvatar}
            onRenderTypingIndicator={onRenderTypingIndicator}
            onRenderMessage={onRenderMessage}
          />
        </ChatAdapterProvider>
      </IdentifierProvider>
    </FluentThemeProvider>
  );
};
