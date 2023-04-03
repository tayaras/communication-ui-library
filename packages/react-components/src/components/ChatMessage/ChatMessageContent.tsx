// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React, { useCallback, useRef } from 'react';
import { _formatString } from '@internal/acs-ui-common';
import { Parser, ProcessNodeDefinitions } from 'html-to-react';
import Linkify from 'react-linkify';
import { ChatMessage } from '../../types/ChatMessage';
import { LiveMessage } from 'react-aria-live';
import { Link } from '@fluentui/react';
import { AtMentionDisplayOptions, AtMentionSuggestion } from '../AtMentionFlyout';

type ChatMessageContentProps = {
  message: ChatMessage;
  liveAuthorIntro: string;
  messageContentAriaText?: string;
  atMentionDisplayOptions?: AtMentionDisplayOptions;
};

/** @private */
export const ChatMessageContent = (props: ChatMessageContentProps): JSX.Element => {
  // return MessageContentAsRichTextHTML(props);
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
  const input =
    'Hey <msft-at-mention mentionId="mentionId" userId=”xxxx” displayName="Lucas" mentionType=”person”>Peter Terry</msft-at-mention> Hi';

  // const atMentionSuggestionRef = useRef<HTMLDivElement | null>(null);
  const htmlToReactParser = new Parser();
  const isValidNode = (): boolean => {
    return true;
  };

  // const handleOnClick = useCallback(
  //   (attribs: AtMentionSuggestion, target: Target) => {
  //     const onSuggestionClicked = props.atMentionDisplayOptions?.onSuggestionClicked;
  //     const atMentionSuggestion: AtMentionSuggestion = {
  //       userId: attribs.userId,
  //       atMentionType: attribs.atMentionType,
  //       displayName: attribs.displayName
  //     };
  //     onSuggestionClicked && onSuggestionClicked(atMentionSuggestion, target);
  //     return '';
  //   },
  //   [props.atMentionDisplayOptions?.onSuggestionClicked]
  // );

  const processNodeDefinitions = new ProcessNodeDefinitions(React);
  const processingInstructions = [
    {
      shouldProcessNode: (node) => {
        return node.attribs && node.name === 'msft-at-mention';
      },
      // processNode: (node) => {
      //   return (
      //     <span
      //       {...node.attribs}
      //       ref={atMentionSuggestionRef}
      //       style={{ color: 'red' }}
      //       onClick={() => handleOnClick(node.attribs, atMentionSuggestionRef)}
      //     >
      //       Lucas
      //     </span>
      //   );
      // }
      processNode: (node) => {
        const atMentionSuggestionRenderer = props.atMentionDisplayOptions?.atMentionSuggestionRenderer;
        const { userid, suggestiontype, displayname } = node.attribs;
        const suggestion: AtMentionSuggestion = {
          userId: userid,
          suggestionType: suggestiontype,
          displayName: displayname
        };
        return atMentionSuggestionRenderer ? atMentionSuggestionRenderer(suggestion) : <></>;
      }
    },
    {
      shouldProcessNode: () => {
        return true;
      },
      processNode: processNodeDefinitions.processDefaultNode
    }
  ];
  const reactComponent = htmlToReactParser.parseWithInstructions(input, isValidNode, processingInstructions);

  const liveAuthor = _formatString(props.liveAuthorIntro, { author: `${props.message.senderDisplayName}` });
  return (
    <div data-ui-status={props.message.status} role="text" aria-label={props.messageContentAriaText}>
      <LiveMessage
        message={`${props.message.mine ? '' : liveAuthor} ${extractContent(props.message.content || '')}`}
        aria-live="polite"
      />
      {reactComponent}
    </div>
  );
};

const MessageContentAsText = (props: ChatMessageContentProps): JSX.Element => {
  const liveAuthor = _formatString(props.liveAuthorIntro, { author: `${props.message.senderDisplayName}` });
  return (
    <div data-ui-status={props.message.status} role="text" aria-label={props.messageContentAriaText}>
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

// https://stackoverflow.com/questions/28899298/extract-the-text-out-of-html-string-using-javascript
const extractContent = (s: string): string => {
  const span = document.createElement('span');
  span.innerHTML = s;
  return span.textContent || span.innerText;
};
