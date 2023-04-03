// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import React, { useEffect, useState } from 'react';
import { mergeStyles, Stack, Theme } from '@fluentui/react';

/**
 * @private
 * z-index to ensure that chat container has lower z-index than participant pane
 */
export const CHAT_CONTAINER_ZINDEX = 1;

/**
 * @private
 */
export const atMentionFlyoutContainer = (theme: Theme): string =>
  mergeStyles({
    width: '500',
    maxWidth: '500',
    height: '200',
    // position: 'absolute',
    // left: '0',
    boxShadow: theme.effects.elevation16,
    background: theme.semanticColors.bodyBackground,
    // zIndex to set the participant pane above the chat container
    zIndex: CHAT_CONTAINER_ZINDEX + 1
  });

/**
 * Props for {@link AtMentionFlyout}.
 *
 * @public
 */
export interface AtMentionFlyoutProps extends AtMentionLookupOptions {
  /**
   * Optional string used as a query to search for mentioned participants.
   */
  query?: string;
  /**
   * Optional RefObject used as a reference to position AtMentionFlyout.
   */
  target?: React.RefObject<Element>;
  /**
   * Callback to invoke when the error bar is dismissed
   */
  onDismiss?: () => void;
}

/**
 * Options to lookup suggestions in the @mention scenario.
 *
 * @public
 */
export interface AtMentionLookupOptions {
  /**
   * Optional string to set trigger keyword for mention a specific participant.
   *
   * @defaultValue `@`
   */
  trigger?: string;
  /**
   * Optional callback to fetch a list of at mention suggestions base on the query.
   */
  onQueryUpdated?: (query: string) => Promise<AtMentionSuggestion[]>;
  /**
   * Optional callback to render an item of the atMention suggestions list.
   */
  suggestionItemRenderer?: (suggestion: AtMentionSuggestion) => JSX.Element;
  /**
   * Optional callback called when a atMention suggestion is selected.
   */
  onSuggestionSelected?: (suggestion: AtMentionSuggestion) => void;
  /**
   * Optional boolean to determine if currently in mobile view.
   *
   * @defaultValue `false`
   */
  isMobile?: boolean;
}

/** @public */
export interface AtMentionSuggestion {
  /** User ID of a mentioned participant or 'everyone' for an @everyone suggestion */
  userId: string;
  /** Type of an at mention suggestion */
  suggestionType: string;
  /** Display name of a mentioned participant */
  displayName?: string;
}

/** @public */
export interface AtMentionDisplayOptions {
  atMentionSuggestionRenderer?: (suggestion: AtMentionSuggestion) => JSX.Element;
}

// /** @public */
// export interface AtMentionDisplayOptions {
//   onAtMentionSuggestionClicked?: (suggestion: AtMentionSuggestion, mentionedSuggestionTarget: Target) => void;
//   onAtMentionSuggestionHovered?: (suggestion: AtMentionSuggestion, mentionedSuggestionTarget: Target) => void;
// }

/**
 * Component to render @mention suggestions.
 *
 * @public
 */
export const AtMentionFlyout = (props: AtMentionFlyoutProps): JSX.Element => {
  const { query, onQueryUpdated, suggestionItemRenderer, onSuggestionSelected } = props;
  const [_, setParticipants] = useState<AtMentionSuggestion[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      // You can await here
      if (query) {
        const list = onQueryUpdated ? await onQueryUpdated(query) : await defaultFetchParticipants(query);
        // const list = (onQueryUpdated && (await onQueryUpdated(query))) || [];

        // TODO: Sort list
        setParticipants(list);
      }
    }
    fetchData();
  }, [onQueryUpdated, query]);

  const fakeData: AtMentionSuggestion[] = [
    {
      userId: '1',
      suggestionType: 'person',
      displayName: '1'
    },
    {
      userId: '2',
      suggestionType: 'person',
      displayName: '2'
    }
  ];

  const defaultFetchParticipants = (query: string): AtMentionSuggestion[] => {
    console.log(query);
    const fakeData: AtMentionSuggestion[] = [
      {
        userId: '1',
        suggestionType: 'person',
        displayName: '1'
      },
      {
        userId: '2',
        suggestionType: 'person',
        displayName: '2'
      }
    ];
    return fakeData;
  };

  return (
    <Stack>
      {fakeData.map((suggestion: AtMentionSuggestion) => (
        // eslint-disable-next-line react/jsx-key
        <div key={suggestion.userId} onClick={() => onSuggestionSelected && onSuggestionSelected(suggestion)}>
          {suggestionItemRenderer && suggestionItemRenderer(suggestion)}
        </div>
      ))}
    </Stack>
  );
};
