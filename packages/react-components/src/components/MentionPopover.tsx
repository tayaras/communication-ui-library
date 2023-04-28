// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Persona, PersonaSize, Stack, mergeStyles, useTheme } from '@fluentui/react';
import {
  mentionPopoverContainerStyle,
  headerStyleThemed,
  suggestionListStyle,
  suggestionItemStackStyle,
  suggestionItemWrapperStyle
} from './styles/MentionPopover.style';
/* @conditional-compile-remove(mention) */
import { useIdentifiers } from '../identifiers';
import { useLocale } from '../localization';

/**
 * Props for {@link _MentionPopover}.
 *
 * @internal
 */
export interface _MentionPopoverProps {
  /**
   * Array of mention suggestions used to populate the suggestion list
   */
  suggestions: Mention[];
  /**
   * Index of the currently focused suggestion, if any
   */
  activeSuggestionIndex?: number;
  /**
   * Optional string used as mention popover's title.
   * @defaultValue `Suggestions`
   */
  title?: string;
  /**
   * Element to anchor the popover to.
   */
  target: React.RefObject<Element>;
  /**
   * When rendering the popover, where to position it relative to the target.
   */
  targetPositionOffset?: { top: number; left: number };
  /**
   * Where to display the suggestions relative to the target.
   * @defaultValue `above`
   */
  location?: 'above' | 'below';
  /**
   * Callback called when a mention suggestion is selected.
   */
  onSuggestionSelected: (suggestion: Mention) => void;
  /**
   * Callback to invoke when the popover is dismissed
   */
  onDismiss?: () => void;
  /**
   * Optional callback to render an item of the mention suggestions list.
   */
  onRenderSuggestionItem?: (
    suggestion: Mention,
    onSuggestionSelected: (suggestion: Mention) => void,
    isActive: boolean
  ) => JSX.Element;
}

/**
 * Options to lookup suggestions in the mention scenario.
 *
 * @beta
 */
export interface MentionLookupOptions {
  /**
   * Optional string to set trigger keyword for mention a specific participant.
   *
   * @defaultValue `@`
   */
  trigger?: string;
  /**
   * Optional callback to fetch a list of mention suggestions base on the query.
   */
  onQueryUpdated: (query: string) => Promise<Mention[]>;
  /**
   * Optional callback to render an item of the mention suggestions list.
   */
  onRenderSuggestionItem?: (suggestion: Mention, onSuggestionSelected: (suggestion: Mention) => void) => JSX.Element;
}

/**
 * Options to display suggestions in the mention scenario.
 *
 * @beta
 */
export interface MentionDisplayOptions {
  /**
   * Optional callback to override render of a mention in a message thread.
   */
  onRenderMention?: (mention: Mention) => JSX.Element;
}

/**
 * Options to lookup suggestions and display mentions in the mention scenario.
 *
 * @beta
 */
export type MentionOptions = {
  lookupOptions?: MentionLookupOptions;
  displayOptions?: MentionDisplayOptions;
};

/**
 * Mention's state, as reflected in the UI.
 *
 * @beta
 */
export interface Mention {
  /** ID of a mention */
  id: string;
  /** Display text of a mention */
  displayText: string;
  /** Optional React element to render an item icon of a mention suggestion */
  icon?: JSX.Element;
}

/**
 * Component to render a pop-up of mention suggestions.
 *
 * @internal
 */
export const _MentionPopover = (props: _MentionPopoverProps): JSX.Element => {
  interface Position {
    left?: number;
    right?: number;
    top?: number;
    bottom?: number;
    maxWidth?: number;
  }

  const {
    suggestions,
    activeSuggestionIndex,
    title = 'Suggestions' /* TODO: Localization of the default */,
    target,
    targetPositionOffset,
    onRenderSuggestionItem,
    onSuggestionSelected,
    onDismiss,
    location
  } = props;

  const theme = useTheme();
  /* @conditional-compile-remove(mention) */
  const ids = useIdentifiers();
  const localeStrings = useLocale().strings.participantItem;
  const popoverRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [position, setPosition] = useState<Position>({ left: 0 });
  const [hoveredSuggestion, setHoveredSuggestion] = useState<Mention | undefined>(undefined);
  const [changedSelection, setChangedSelection] = useState<boolean | undefined>(undefined); // Selection UI as per teams

  const dismissPopoverWhenClickingOutside = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (popoverRef.current && !popoverRef.current.contains(target)) {
        onDismiss && onDismiss();
      }
    },
    [onDismiss]
  );

  useEffect(() => {
    if (changedSelection === undefined) {
      setChangedSelection(false);
    } else if (changedSelection === false) {
      setChangedSelection(true);
    }
  }, [activeSuggestionIndex, changedSelection]);

  useEffect(() => {
    window && window.addEventListener('click', dismissPopoverWhenClickingOutside);
    return () => {
      window && window.removeEventListener('click', dismissPopoverWhenClickingOutside);
    };
  }, [dismissPopoverWhenClickingOutside]);

  // Determine popover position
  useEffect(() => {
    const rect = target?.current?.getBoundingClientRect();
    const maxWidth = 200;
    const finalPosition: Position = { maxWidth };

    // Figure out whether it will fit horizontally
    const leftOffset = targetPositionOffset?.left ?? 0;
    if (leftOffset + maxWidth > (rect?.width ?? 0)) {
      finalPosition.right = (rect?.width ?? 0) - leftOffset;
    } else {
      finalPosition.left = leftOffset;
    }

    if (location === 'below') {
      finalPosition.top = (rect?.height ?? 0) + (targetPositionOffset?.top ?? 0);
    } else {
      // (location === 'above')
      finalPosition.bottom = (rect?.height ?? 0) - (targetPositionOffset?.top ?? 0);
    }
    setPosition(finalPosition);
  }, [location, target, targetPositionOffset]);

  const handleOnKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      switch (e.key) {
        case 'Escape':
          onDismiss && onDismiss();
          break;
        default:
          break;
      }
    },
    [onDismiss]
  );

  const personaRenderer = (displayName?: string): JSX.Element => {
    const avatarOptions = {
      text: displayName?.trim() || localeStrings.displayNamePlaceholder,
      size: PersonaSize.size24,
      initialsColor: theme.palette.neutralLight,
      initialsTextColor: theme.palette.neutralSecondary,
      showOverflowTooltip: false,
      showUnknownPersonaCoin: !displayName?.trim() || displayName === localeStrings.displayNamePlaceholder
    };

    return <Persona {...avatarOptions} />;
  };

  const defaultOnRenderSuggestionItem = (
    suggestion: Mention,
    onSuggestionSelected: (suggestion: Mention) => void,
    active: boolean
  ): JSX.Element => {
    return (
      <div
        data-is-focusable={true}
        /* @conditional-compile-remove(mention) */
        data-ui-id={ids.mentionSuggestionItem}
        key={suggestion.id}
        onClick={() => onSuggestionSelected(suggestion)}
        onMouseEnter={() => setHoveredSuggestion(suggestion)}
        onMouseLeave={() => setHoveredSuggestion(undefined)}
        onKeyDown={(e) => {
          handleOnKeyDown(e);
        }}
        className={suggestionItemWrapperStyle(theme)}
      >
        <Stack
          horizontal
          className={suggestionItemStackStyle(
            theme,
            hoveredSuggestion?.id === suggestion.id,
            (changedSelection ?? false) && active
          )}
        >
          {personaRenderer(suggestion.displayText)}
        </Stack>
      </div>
    );
  };

  return (
    <div ref={popoverRef}>
      <Stack
        className={mergeStyles(
          {
            maxHeight: 212,
            maxWidth: position.maxWidth
          },
          mentionPopoverContainerStyle(theme),
          {
            ...position,
            position: 'absolute'
          }
        )}
      >
        <Stack.Item styles={headerStyleThemed(theme)} aria-label={title}>
          {title}
        </Stack.Item>
        <Stack
          /* @conditional-compile-remove(mention) */
          data-ui-id={ids.mentionSuggestionList}
          className={suggestionListStyle}
        >
          {suggestions.map((suggestion, index) => {
            const active = index === activeSuggestionIndex;
            return onRenderSuggestionItem
              ? onRenderSuggestionItem(suggestion, onSuggestionSelected, active)
              : defaultOnRenderSuggestionItem(suggestion, onSuggestionSelected, active);
          })}
        </Stack>
      </Stack>
    </div>
  );
};
