// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from 'react';
import { _formatString } from '@internal/acs-ui-common';
import { Parser } from 'html-to-react';
import Linkify from 'react-linkify';
import { ChatMessage } from '../../types/ChatMessage';
import { LiveMessage } from 'react-aria-live';
import { Icon, Link, Stack, Theme } from '@fluentui/react';
import { MessageThreadStrings } from '../MessageThread';
import { Text } from '@fluentui/react-northstar';
import {
  chatMessageDateLossPreventionProhibitedIconStyle,
  chatMessageDateLossPreventionTextStyle,
  chatMessageDateLossPreventionLinkStyle
} from '../styles/ChatMessageComponent.styles';

type ChatMessageContentProps = {
  message: ChatMessage;
  theme: Theme;
  strings: MessageThreadStrings;
};

/** @private */
export const ChatMessageContent = (props: ChatMessageContentProps): JSX.Element => {
  /* @conditional-compile-remove(dlp) */
  if (props.message.policyViolation) {
    return DataLossPreventionMessageContent(props);
  }
  switch (props.message.contentType) {
    case 'text':
      return MessageContentAsText(props);
    case 'html':
      return MessageContentAsRichTextHTML(props);
    case 'richtext/html':
      return MessageContentAsRichTextHTML(props);
    default:
      console.warn('unknown message content type');
      return <></>;
  }
};

const MessageContentAsRichTextHTML = (props: ChatMessageContentProps): JSX.Element => {
  const htmlToReactParser = new Parser();
  const liveAuthor = _formatString(props.strings.liveAuthorIntro, { author: `${props.message.senderDisplayName}` });
  return (
    <div data-ui-status={props.message.status} role="text" aria-label={messageContentAriaText(props)}>
      <LiveMessage
        message={`${props.message.mine ? '' : liveAuthor} ${extractContent(props.message.content || '')}`}
        aria-live="polite"
      />
      {htmlToReactParser.parse(props.message.content)}
    </div>
  );
};

const MessageContentAsText = (props: ChatMessageContentProps): JSX.Element => {
  const liveAuthor = _formatString(props.strings.liveAuthorIntro, { author: `${props.message.senderDisplayName}` });
  return (
    <div data-ui-status={props.message.status} role="text" aria-label={messageContentAriaText(props)}>
      <LiveMessage message={`${props.message.mine ? '' : liveAuthor} ${props.message.content}`} aria-live="polite" />
      <Linkify
        componentDecorator={(decoratedHref: string, decoratedText: string, key: number) => {
          return (
            <Link target="_blank" href={decoratedHref} key={key}>
              {decoratedText}
            </Link>
          );
        }}
      >
        {props.message.content}
      </Linkify>
    </div>
  );
};

/* @conditional-compile-remove(dlp) */
const DataLossPreventionMessageContent = (props: ChatMessageContentProps): JSX.Element => {
  const livePolicyViolationText = `${props.message.mine ? '' : props.message.senderDisplayName} ${
    props.strings.policyViolationText
  } ${props.strings.policyViolationLinkText}`;
  return (
    <div data-ui-status={props.message.status} role="text" aria-label={livePolicyViolationText}>
      <LiveMessage message={livePolicyViolationText} aria-live="polite" />
      <Stack horizontal>
        <Icon
          iconName={'DataLossPreventionProhibited'}
          className={chatMessageDateLossPreventionProhibitedIconStyle(props.theme)}
        />
        <Text className={chatMessageDateLossPreventionTextStyle(props.theme)}>
          {props.strings.policyViolationText}
          <Link
            className={chatMessageDateLossPreventionLinkStyle(props.theme)}
            target={'_blank'}
            href={'https://go.microsoft.com/fwlink/?LinkId=2132837'}
          >
            {props.strings.policyViolationLinkText}
          </Link>
        </Text>
      </Stack>
    </div>
  );
};

// https://stackoverflow.com/questions/28899298/extract-the-text-out-of-html-string-using-javascript
const extractContent = (s: string): string => {
  const span = document.createElement('span');
  span.innerHTML = s;
  return span.textContent || span.innerText;
};

const messageContentAriaText = (props: ChatMessageContentProps): string | undefined => {
  return props.message.content
    ? props.message.mine
      ? _formatString(props.strings.messageContentMineAriaText, {
          message: props.message.content
        })
      : _formatString(props.strings.messageContentAriaText, {
          author: `${props.message.senderDisplayName}`,
          message: props.message.content
        })
    : undefined;
};
