// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React, { useState, ReactNode, FormEvent, useCallback, useEffect, useRef } from 'react';
import {
  Stack,
  TextField,
  mergeStyles,
  IStyle,
  ITextField,
  concatStyleSets,
  IconButton,
  TooltipHost,
  ICalloutContentStyles
} from '@fluentui/react';
import { BaseCustomStyles } from '../types';
import {
  inputBoxStyle,
  inputBoxWrapperStyle,
  inputButtonStyle,
  textFieldStyle,
  textContainerStyle,
  inlineButtonsContainerStyle,
  newLineButtonsContainerStyle,
  inputBoxNewLineSpaceAffordance,
  inputButtonTooltipStyle
} from './styles/InputBoxComponent.style';
import { Caret } from 'textarea-caret-ts';
import { isDarkThemed } from '../theming/themeUtils';
import { useTheme } from '../theming';
/* @conditional-compile-remove(at-mention) */
import { AtMentionLookupOptions, _AtMentionFlyout, AtMentionSuggestion } from './AtMentionFlyout';

const defaultMentionTrigger = '@';
/**
 * @private
 */
export interface InputBoxStylesProps extends BaseCustomStyles {
  /** Styles for the text field. */
  textField?: IStyle;

  /** Styles for the system message; These styles will be ignored when a custom system message component is provided. */
  systemMessage?: IStyle;

  /** Styles for customizing the container of the text field */
  textFieldContainer?: IStyle;
}

type InputBoxComponentProps = {
  children: ReactNode;
  /**
   * Inline child elements passed in. Setting to false will mean they are on a new line.
   */
  inlineChildren: boolean;
  'data-ui-id'?: string;
  id?: string;
  textValue: string; // This could be plain text or HTML.
  onChange: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string | undefined) => void;
  textFieldRef?: React.RefObject<ITextField>;
  inputClassName?: string;
  placeholderText?: string;
  supportNewline?: boolean;
  maxLength: number;
  onKeyDown?: (ev: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onEnterKeyDown?: () => void;
  errorMessage?: string | React.ReactElement;
  disabled?: boolean;
  styles?: InputBoxStylesProps;
  autoFocus?: 'sendBoxTextField';
  /* @conditional-compile-remove(at-mention) */
  atMentionLookupOptions?: AtMentionLookupOptions;
  /* @conditional-compile-remove(at-mention) */
  onMentionAdd?: (newTextValue?: string) => void;
};

/**
 * @private
 */
export const InputBoxComponent = (props: InputBoxComponentProps): JSX.Element => {
  const {
    styles,
    id,
    'data-ui-id': dataUiId,
    textValue,
    onChange,
    textFieldRef,
    placeholderText,
    onKeyDown,
    onEnterKeyDown,
    supportNewline,
    inputClassName,
    errorMessage,
    disabled,
    children,
    atMentionLookupOptions,
    onMentionAdd
  } = props;
  const inputBoxRef = useRef<HTMLDivElement>(null);

  // Current suggestion list, provided by the callback
  const [mentionSuggestions, setMentionSuggestions] = useState<AtMentionSuggestion[]>([]);

  // Index of the current trigger character in the text field
  const [currentTagIndex, setCurrentTagIndex] = useState<number>(-1);
  const [inputTextValue, setInputTextValue] = useState<string>('');
  const [tagsValue, setTagsValue] = useState<UpdatedParsedTag[]>([]);

  // Caret position in the text field
  const [caretPosition, setCaretPosition] = useState<Caret.Position | undefined>(undefined);

  // Parse the text and get the plain text version to display in the input box
  useEffect(() => {
    const trigger = atMentionLookupOptions?.trigger || defaultMentionTrigger;
    console.log('textValue', textValue);
    const [tags, plainText] = parseHTMLText(textValue, trigger);
    console.log('tags', tags);
    console.log('plainText', plainText);
    // Get a plain text version to display in the input box, resetting state
    // const tags = parseToTags(textValue);
    // const plainText = plainTextFromParsedTags(textValue, tags, trigger);
    // Provide the plain text string to the inputTextValue
    setInputTextValue(plainText);
    setTagsValue(tags);
  }, [textValue, atMentionLookupOptions?.trigger]);

  const mergedRootStyle = mergeStyles(inputBoxWrapperStyle, styles?.root);
  const mergedTextFiledStyle = mergeStyles(
    inputBoxStyle,
    inputClassName,
    props.inlineChildren ? {} : inputBoxNewLineSpaceAffordance
  );

  const mergedTextContainerStyle = mergeStyles(textContainerStyle, styles?.textFieldContainer);
  const mergedTextFieldStyle = concatStyleSets(textFieldStyle, {
    fieldGroup: styles?.textField,
    errorMessage: styles?.systemMessage
  });

  const onTextFieldKeyDown = useCallback(
    (ev: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      // Uses KeyCode 229 and which code 229 to determine if the press of the enter key is from a composition session or not (Safari only)
      if (ev.nativeEvent.isComposing || ev.nativeEvent.keyCode === 229 || ev.nativeEvent.which === 229) {
        return;
      }
      if (ev.key === 'Enter' && (ev.shiftKey === false || !supportNewline)) {
        ev.preventDefault();
        onEnterKeyDown && onEnterKeyDown();
      }
      onKeyDown && onKeyDown(ev);
    },
    [onEnterKeyDown, onKeyDown, supportNewline]
  );

  const updateMentionSuggestions = useCallback(
    (suggestions: AtMentionSuggestion[]) => {
      setMentionSuggestions(suggestions);
      //TODO: add focus to the correct position
      textFieldRef?.current?.focus();
    },
    [textFieldRef]
  );

  const onSuggestionSelected = useCallback(
    (suggestion: AtMentionSuggestion) => {
      let selectionEnd = textFieldRef?.current?.selectionEnd || -1;
      if (selectionEnd < 0) {
        selectionEnd = 0;
      } else if (selectionEnd > inputTextValue.length) {
        selectionEnd = inputTextValue.length;
      }

      const oldPlainText = inputTextValue;
      const mention = htmlStringForMentionSuggestion(suggestion);
      // update plain text with the mention html text
      const newPlainText =
        inputTextValue.substring(0, currentTagIndex) + mention + inputTextValue.substring(selectionEnd);
      const triggerText = atMentionLookupOptions?.trigger ?? defaultMentionTrigger;
      // update html text with updated plain text
      const updatedHTML = updateHTML(
        textValue,
        oldPlainText,
        newPlainText,
        tagsValue,
        currentTagIndex,
        selectionEnd,
        mention,
        triggerText
      );

      const [tags, plainText] = parseHTMLText(updatedHTML, triggerText);
      // This change moves focus to the end of the input field when plainText != the text that in the input field
      setInputTextValue(plainText);
      setTagsValue(tags);
      onMentionAdd && onMentionAdd(updatedHTML);
      updateMentionSuggestions([]);
      setCurrentTagIndex(-1);
    },
    [
      textFieldRef,
      inputTextValue,
      currentTagIndex,
      atMentionLookupOptions?.trigger,
      textValue,
      tagsValue,
      onMentionAdd,
      updateMentionSuggestions
    ]
  );

  const handleOnChange = async (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    updatedValue?: string | undefined
  ): Promise<void> => {
    let newValue = updatedValue;
    if (newValue === undefined) {
      newValue = '';
    }
    const triggerText = atMentionLookupOptions?.trigger ?? defaultMentionTrigger;

    const newTextLength = newValue.length;
    let selectionEnd = textFieldRef?.current?.selectionEnd || -1;
    if (selectionEnd < 0) {
      selectionEnd = 0;
    } else if (selectionEnd > newTextLength) {
      selectionEnd = newTextLength - 1;
    }
    // If we are enabled for lookups,
    if (atMentionLookupOptions !== undefined) {
      // Look at the range of the change for a trigger character
      const triggerPriorIndex = newValue?.lastIndexOf(triggerText, selectionEnd - 1);
      // Update the caret position, if not doing a lookup
      setCaretPosition(Caret.getRelativePosition(event.currentTarget));

      if (triggerPriorIndex !== undefined) {
        // trigger is found
        const isSpaceBeforeTrigger = newValue?.substring(triggerPriorIndex - 1, triggerPriorIndex) === ' ';
        const wordAtSelection = newValue?.substring(triggerPriorIndex, selectionEnd);
        let tagIndex = currentTagIndex;
        if (!isSpaceBeforeTrigger && triggerPriorIndex !== 0) {
          //no space before the trigger <- continuation of the previous word
          tagIndex = -1;
          setCurrentTagIndex(tagIndex);
        } else if (wordAtSelection === triggerText) {
          // start of the mention
          tagIndex = selectionEnd - triggerText.length;
          if (tagIndex < 0) {
            tagIndex = 0;
          }
          setCurrentTagIndex(tagIndex);
        }

        console.log('currentTagIndex', currentTagIndex);
        console.log('tagIndex', tagIndex);
        if (tagIndex === -1) {
          updateMentionSuggestions([]);
        } else {
          // In the middle of a @mention lookup
          if (tagIndex > -1) {
            const query = wordAtSelection.substring(triggerText.length, wordAtSelection.length);
            if (query !== undefined) {
              const suggestions = (await atMentionLookupOptions?.onQueryUpdated(query)) ?? [];
              updateMentionSuggestions(suggestions);
            }
          }
        }
      }
    }
    let result = '';
    if (tagsValue.length === 0) {
      // no tags in the string, textValue is a sting and
      result = newValue;
    } else {
      // there are tags in the value, textValue is html string
      const { changeStart, newChangeEnd, oldChangeEnd } = findStringsDiffIndexes(inputTextValue, newValue);

      // add mention
      result = updateHTML(
        textValue,
        inputTextValue,
        newValue,
        tagsValue,
        changeStart,
        oldChangeEnd,
        newValue.substring(changeStart, newChangeEnd),
        triggerText
      );
      console.log('updatedHTML', result);
    }

    onChange && onChange(event, result);
  };

  return (
    <Stack className={mergedRootStyle}>
      <div className={mergedTextContainerStyle}>
        {mentionSuggestions.length > 0 && (
          <_AtMentionFlyout
            suggestions={mentionSuggestions}
            target={inputBoxRef}
            targetPositionOffset={caretPosition}
            onSuggestionSelected={onSuggestionSelected}
            onDismiss={() => {
              updateMentionSuggestions([]);
            }}
          />
        )}
        <TextField
          autoFocus={props.autoFocus === 'sendBoxTextField'}
          data-ui-id={dataUiId}
          multiline
          autoAdjustHeight
          multiple={false}
          resizable={false}
          componentRef={textFieldRef}
          id={id}
          inputClassName={mergedTextFiledStyle}
          placeholder={placeholderText}
          value={inputTextValue}
          onChange={(e, newValue) => {
            setInputTextValue(newValue ?? '');
            handleOnChange(e, newValue);
          }}
          autoComplete="off"
          onKeyDown={onTextFieldKeyDown}
          styles={mergedTextFieldStyle}
          disabled={disabled}
          errorMessage={errorMessage}
          elementRef={inputBoxRef}
        />
        <Stack
          horizontal
          className={mergeStyles(props.inlineChildren ? inlineButtonsContainerStyle : newLineButtonsContainerStyle)}
        >
          {children}
        </Stack>
      </div>
    </Stack>
  );
};

/**
 * Props for displaying a send button besides the text input area.
 *
 * @private
 */
export type InputBoxButtonProps = {
  onRenderIcon: (isHover: boolean) => JSX.Element;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
  id?: string;
  ariaLabel?: string;
  tooltipContent?: string;
};

/**
 * @private
 */
export const InputBoxButton = (props: InputBoxButtonProps): JSX.Element => {
  const { onRenderIcon, onClick, ariaLabel, className, id, tooltipContent } = props;
  const [isHover, setIsHover] = useState(false);
  const mergedButtonStyle = mergeStyles(inputButtonStyle, className);

  const theme = useTheme();
  const calloutStyle: Partial<ICalloutContentStyles> = { root: { padding: 0 }, calloutMain: { padding: '0.5rem' } };

  // Place callout with no gap between it and the button.
  const calloutProps = {
    gapSpace: 0,
    styles: calloutStyle,
    backgroundColor: isDarkThemed(theme) ? theme.palette.neutralLighter : ''
  };
  return (
    <TooltipHost hostClassName={inputButtonTooltipStyle} content={tooltipContent} calloutProps={{ ...calloutProps }}>
      <IconButton
        className={mergedButtonStyle}
        ariaLabel={ariaLabel}
        onClick={onClick}
        id={id}
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onRenderIcon={() => onRenderIcon(isHover)}
      />
    </TooltipHost>
  );
};

/**
 * Object representing a parsed tag
 *
 * @private
 */
type ParsedTag = {
  tagType: string;
  htmlOpenTagStartIndex: number;
  openTagBody: string;
  htmlCloseTagStartIndex?: number; // Might not have a close tag
  closeTagLength?: number; // Might not have a close tag
  content?: string; // Might not have content
  subTags?: ParsedTag[]; // Tags can contain other tags
};

/**
 * Object representing a parsed tag
 *
 * @private
 */
type UpdatedParsedTag = {
  tagType: string;
  htmlOpenTagStartIndex: number;
  openTagBody: string;
  openTagLength: number; // helps to simplify calculation for different cases
  htmlCloseTagStartIndex?: number; // Might not have a close tag
  closeTagLength?: number; // Might not have a close tag
  content?: string; // Might not have content
  subTags?: UpdatedParsedTag[]; // Tags can contain other tags
  plainTextStartIndex: number; //position where the open tag should begin
  plainTextEndIndex?: number; // position where the open tag should begin. Might not have a close tag
};

/**
 * Go through the text and parse out the tags and plain text
 * This should be only <msft-at-mention> tags for now...
 * We do need to process all other HTML tags to text though.
 *
 * @private
 */
const parseHTMLText = (text: string, trigger: string): [UpdatedParsedTag[], string] => {
  const tags: UpdatedParsedTag[] = [];
  let htmlParseIndex = 0;
  let plainText = '';

  while (htmlParseIndex < text.length) {
    const openTagIndex = text.indexOf('<', htmlParseIndex); // Find next open tag, if it is a tag...
    if (openTagIndex === -1) {
      // No more open tags found, add the rest of the text as plain text
      plainText += text.substring(htmlParseIndex);
      break;
    }

    // Add all the text from the last tag close to this one open
    plainText += text.substring(htmlParseIndex, openTagIndex);
    const plainTextStartIndex = plainText.length; // - 1 is not used because text.substring doesn't include openTagIndex

    // Parse the open tag
    const openTagCloseIndex = text.indexOf('>', openTagIndex);
    const openTag = text.substring(openTagIndex + 1, openTagCloseIndex);
    const tagType = openTag.split(' ')[0];
    if (tagType === 'msft-at-mention') {
      plainText += trigger;
    }

    if (openTag[openTag.length - 1] === '/') {
      // Self closing tag, no corresponding close tag
      const selfClosingBody = openTag.substring(0, openTag.length - 1);
      const tagLength = openTagCloseIndex - openTagIndex;
      tags.push({
        tagType: tagType.substring(0, tagType.length - 1).toLowerCase(),
        openTagBody: selfClosingBody,
        htmlOpenTagStartIndex: openTagIndex,
        plainTextStartIndex: plainTextStartIndex,
        openTagLength: tagLength
      });
      htmlParseIndex = openTagIndex + tagLength - 1;
    } else {
      // Find the corresponding close tag
      const closeTagToFind = '</' + tagType + '>';
      console.log('looking for close tag:', closeTagToFind);

      // TODO: move while loop here, include the current tag
      const nextOpenTagIndex = text.indexOf('<', openTagCloseIndex);
      let nextCloseTagIndex = text.indexOf(closeTagToFind, openTagCloseIndex);

      if (nextCloseTagIndex === -1) {
        console.error('Could not find close tag for ' + openTag);
        // TODO: handle invalid HTML better
        break;
      } else {
        if (nextOpenTagIndex < nextCloseTagIndex) {
          // Grab the inner open tag content
          let innerOpenTagCloseIndex = text.indexOf('>', nextOpenTagIndex);
          let innerOpenTag = text.substring(nextOpenTagIndex + 1, innerOpenTagCloseIndex);
          let innerTagType = innerOpenTag.split(' ')[0];
          let tagStack = [innerTagType];
          console.log('found nested tag', innerTagType);

          // We have nested tags, so process the inner tags first
          let innerTagOpenIndex = innerOpenTagCloseIndex; // Start at the end of the open tag
          while (tagStack.length > 0) {
            console.log('LOOP: tagStack:', tagStack);
            const closeTagToFind = '</' + tagStack[tagStack.length - 1] + '>';
            console.log('looking for close tag:', closeTagToFind);

            const nextInnerCloseTagIndex = text.indexOf(closeTagToFind, innerTagOpenIndex + 1);
            const nextInnerOpenTagIndex = text.indexOf('<', innerTagOpenIndex + 1);
            console.log('nextInnerCloseTagIndex:', nextInnerCloseTagIndex);
            console.log('nextInnerOpenTagIndex:', nextInnerOpenTagIndex);

            // Grab the next open tag content
            innerOpenTagCloseIndex = text.indexOf('>', nextInnerOpenTagIndex);
            innerOpenTag = text.substring(nextInnerOpenTagIndex + 1, innerOpenTagCloseIndex);
            innerTagType = innerOpenTag.split(' ')[0];

            if (nextInnerOpenTagIndex < nextInnerCloseTagIndex) {
              console.log('found another layer of nested tags:', innerOpenTag);
              // Another level of nesting
              tagStack.push(innerTagType);
              innerTagOpenIndex = nextInnerOpenTagIndex + innerOpenTag.length;
            } else {
              console.log('found close tag for', tagStack[tagStack.length - 1]);
              // Corresponding close tag for top of the stack found
              tagStack.pop();
              innerTagOpenIndex = nextInnerCloseTagIndex + 1;
            }
            nextCloseTagIndex = nextInnerCloseTagIndex;
          }
          console.log('OUT OF LOOP');

          // Find the corresponding close tag
          nextCloseTagIndex = text.indexOf(closeTagToFind, nextCloseTagIndex + tagType.length);
        }
        // try to find sub tags and plain text value from them
        const closeTagLength = closeTagToFind.length;
        const content = text.substring(openTagIndex + openTag.length + 2, nextCloseTagIndex);
        console.log('Tag contents:', content);

        const [subTags, contentPlainText] = parseHTMLText(content, trigger);
        plainText += contentPlainText;
        tags.push({
          tagType: tagType.toLowerCase(),
          openTagBody: openTag,
          openTagLength: openTag.length + 2, // +2 for '<' and '>'
          htmlOpenTagStartIndex: openTagIndex,
          htmlCloseTagStartIndex: nextCloseTagIndex,
          closeTagLength,
          content,
          subTags,
          plainTextStartIndex,
          plainTextEndIndex: plainText.length // - 1 is not used because we should use the next index after the content value
        });
        htmlParseIndex = nextCloseTagIndex + closeTagLength;
      }
    }
  }

  return [tags, plainText];
};

/**
 * Go through the text and update it with the changed text
 *
 * @private
 */
const updateHTML = (
  htmlText: string,
  oldPlainText: string,
  newPlainText: string,
  tags: UpdatedParsedTag[],
  startIndex: number,
  oldPlainTextEndIndex: number,
  change: string,
  mentionTrigger: string
): string => {
  console.log('tags', tags);
  console.log('htmlText updateHTML', htmlText);
  let result = htmlText;
  if (tags.length === 0) {
    // no tags added yet
    return newPlainText;
  }
  // TODO: when change removes the tag (consume) fully
  // TODO: when change removes the tag partially
  // TODO: to check when on the edge of the tags in plain text
  // TODO: when mention has another mention inside
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    if (startIndex < tag.plainTextStartIndex && oldPlainTextEndIndex < tag.plainTextStartIndex) {
      //before the open tag
      //find a diff between the open tag and change position
      const startChangeDiff = tag.plainTextStartIndex - startIndex;
      const endChangeDiff = tag.plainTextStartIndex - oldPlainTextEndIndex;
      result =
        htmlText.substring(0, tag.htmlOpenTagStartIndex - startChangeDiff) +
        change +
        htmlText.substring(tag.htmlOpenTagStartIndex - endChangeDiff);
      break;
    } else if (
      tag.plainTextEndIndex !== undefined &&
      tag.closeTagLength !== undefined &&
      tag.htmlCloseTagStartIndex !== undefined &&
      tag.content !== undefined &&
      startIndex >= tag.plainTextStartIndex &&
      oldPlainTextEndIndex <= tag.plainTextEndIndex
    ) {
      // between open and close tags
      const startChangeDiff = startIndex - tag.plainTextStartIndex;
      const endChangeDiff = oldPlainTextEndIndex - tag.plainTextStartIndex;
      if (tag.subTags === undefined || tag.subTags.length === 0) {
        // no subtags
        if (tag.tagType === 'msft-at-mention') {
          // startChangeDiff and endChangeDiff includes trigger length that shouldn't be included in htmlText.substring
          result =
            htmlText.substring(
              0,
              tag.htmlOpenTagStartIndex + tag.openTagLength + startChangeDiff - mentionTrigger.length
            ) +
            change +
            htmlText.substring(tag.htmlOpenTagStartIndex + tag.openTagLength + endChangeDiff - mentionTrigger.length);
        } else {
          result =
            htmlText.substring(0, tag.htmlOpenTagStartIndex + tag.openTagLength + startChangeDiff) +
            change +
            htmlText.substring(tag.htmlOpenTagStartIndex + tag.openTagLength + endChangeDiff);
        }
        break;
      } else {
        // with subtags

        // before the tag content
        const stringBefore = htmlText.substring(0, tag.htmlOpenTagStartIndex + tag.openTagLength);
        // after the tag content
        const stringAfter = htmlText.substring(tag.htmlCloseTagStartIndex);
        const content = updateHTML(
          tag.content,
          oldPlainText.substring(tag.plainTextStartIndex, tag.plainTextEndIndex),
          newPlainText.substring(
            tag.plainTextStartIndex,
            tag.plainTextEndIndex + (newPlainText.length - oldPlainText.length)
          ),
          tag.subTags,
          startIndex - tag.plainTextStartIndex,
          oldPlainTextEndIndex - tag.plainTextStartIndex,
          change,
          mentionTrigger
        );
        result = stringBefore + content + stringAfter;
        break;
      }
    } else if (
      (tag.plainTextEndIndex === undefined && startIndex > tag.plainTextStartIndex) ||
      (tag.plainTextEndIndex !== undefined &&
        tag.closeTagLength !== undefined &&
        tag.htmlCloseTagStartIndex !== undefined &&
        startIndex > tag.plainTextEndIndex)
    ) {
      // after close tag or after the open tag if no close tag available
      if (i === tags.length - 1) {
        // the last or the only tag
        let htmlTagEndIndex = 0;
        let plainTextTagEndIndex = 0;
        if (
          tag.plainTextEndIndex !== undefined &&
          tag.closeTagLength !== undefined &&
          tag.htmlCloseTagStartIndex !== undefined
        ) {
          // the close tag exists
          htmlTagEndIndex = tag.htmlCloseTagStartIndex + tag.closeTagLength;
          plainTextTagEndIndex = tag.plainTextEndIndex;
        } else {
          // no close tag
          htmlTagEndIndex = tag.htmlOpenTagStartIndex + tag.openTagLength;
          plainTextTagEndIndex = tag.plainTextStartIndex;
        }
        const startChangeDiff = startIndex - plainTextTagEndIndex;
        const endChangeDiff = oldPlainTextEndIndex - plainTextTagEndIndex;
        result =
          htmlText.substring(0, htmlTagEndIndex + startChangeDiff) +
          change +
          htmlText.substring(htmlTagEndIndex + endChangeDiff);
        break;
      } else {
        //there is a next tag, the change should be handled in the check for open tag for the next tag
        continue;
      }
    }
  }

  return result;
};
/**
 * Go through the text and parse out the tags
 * This should be only <msft-at-mention> tags for now...
 * We do need to process all other HTML tags to text though.
 *
 * @private
 */
const parseToTags = (text: string): ParsedTag[] => {
  const tags: ParsedTag[] = [];
  let parseIndex = 0;

  while (parseIndex < text.length) {
    const openTagIndex = text.indexOf('<', parseIndex);
    if (openTagIndex === -1) {
      break;
    }
    const openTagCloseIndex = text.indexOf('>', openTagIndex);
    const openTag = text.substring(openTagIndex + 1, openTagCloseIndex);
    const tagType = openTag.split(' ')[0];

    if (openTag[openTag.length - 1] === '/') {
      // Self closing tag, no corresponding close tag
      const selfClosingBody = openTag.substring(0, openTag.length - 1);
      const tagLength = openTagCloseIndex - openTagIndex;
      tags.push({
        tagType: tagType.substring(0, tagType.length - 1).toLowerCase(),
        openTagBody: selfClosingBody,
        htmlOpenTagStartIndex: openTagIndex
      });
      parseIndex = openTagIndex + tagLength - 1;
    } else {
      // Go find the close tag
      const tagToFind = '</' + openTag.split(' ')[0] + '>';
      const closeTagIndex = text.indexOf(tagToFind, openTagCloseIndex);
      if (closeTagIndex === -1) {
        console.error('Could not find close tag for ' + openTag);
        break;
      } else {
        const closeTagLength = tagToFind.length;
        const content = text.substring(openTagIndex + openTag.length + 2, closeTagIndex);
        const subTags = parseToTags(content);

        tags.push({
          tagType: openTag.split(' ')[0].toLowerCase(),
          openTagBody: openTag,
          htmlOpenTagStartIndex: openTagIndex,
          htmlCloseTagStartIndex: closeTagIndex,
          closeTagLength,
          content,
          subTags
        });
        parseIndex = closeTagIndex + closeTagLength;
      }
    }
  }
  return tags;
};

/**
 * Given the text and the parsed tags, return the plain text to render in the input box
 *
 * @private
 */
const plainTextFromParsedTags = (textBlock: string, tags: ParsedTag[], trigger: string): string => {
  let text = '';
  let tagIndex = 0;
  let previousTagEndIndex = 0;

  while (tagIndex < tags.length) {
    const tag = tags[tagIndex];
    // Add all the text from the last tag close to this one open
    text += textBlock.substring(previousTagEndIndex, tag.htmlOpenTagStartIndex);
    if (tag.tagType === 'msft-at-mention') {
      text += trigger;
    }

    // If there are sub tags, go through them and add their text
    if (!!tag.subTags && tag.subTags.length > 0) {
      text += plainTextFromParsedTags(tag.content ?? '', tag.subTags, trigger);
    } else if (tag.content) {
      // Otherwise just add the content
      text += tag.content;
    }
    // Move the indices
    if (!!tag.htmlCloseTagStartIndex && tag.closeTagLength) {
      previousTagEndIndex = tag.htmlCloseTagStartIndex + tag.closeTagLength;
    } else {
      // Self-closing tag
      previousTagEndIndex = tag.htmlOpenTagStartIndex + tag.openTagBody.length + 3; // 3 for the < > and /
    }
    tagIndex++;
  }
  // Add the text after the last tag
  if (tagIndex < textBlock.length) {
    text += textBlock.substring(previousTagEndIndex);
  }
  return text;
};

/**
 * Go through the text and find the mention index
 *
 * @private
 */
const htmlMentionIndex = (
  htmlTextBlock: string,
  tags: ParsedTag[],
  trigger: string,
  plainStringIndex: number,
  query: string, // includes trigger
  plainTextBlock?: string
): number => {
  console.log('htmlTextBlock', htmlTextBlock);
  console.log('plainStringIndex', plainStringIndex);
  if (tags.length === 0) {
    // no tags were added yet
    return plainStringIndex;
  } else if (plainTextBlock !== undefined && plainStringIndex + query.length === plainTextBlock.length) {
    // tags will be added at the end of the current text
    return htmlTextBlock.length - 1;
  } else {
    // tag will be added in the middle of the text

    let text = '';
    let tagIndex = 0;
    let previousTagEndIndex = 0;
    let htmlIndex = 0;

    while (tagIndex < tags.length && htmlIndex < htmlTextBlock.length) {
      const tag = tags[tagIndex];
      // Add all the text from the last tag close to this one open
      const textBetweenTags = htmlTextBlock.substring(previousTagEndIndex, tag.htmlOpenTagStartIndex);
      text += textBetweenTags;
      if (plainStringIndex <= textBetweenTags.length) {
        //TODO: check!
        htmlIndex += textBetweenTags.length + plainStringIndex;
        return htmlIndex;
      }
      if (tag.tagType === 'msft-at-mention') {
        text += trigger;
        htmlIndex += trigger.length;
      }

      // If there are sub tags, go through them and add their text
      if (!!tag.subTags && tag.subTags.length > 0) {
        htmlIndex += htmlMentionIndex(
          tag.content ?? '',
          tag.subTags ?? [],
          trigger,
          plainStringIndex - text.length,
          query
        );
        text += plainTextFromParsedTags(tag.content ?? '', tag.subTags, trigger);
      } else if (tag.content !== undefined) {
        // Otherwise just add the content
        text += tag.content;
        if (plainStringIndex < tag.content.length) {
          //TODO: check!
          htmlIndex += plainStringIndex;
          return htmlIndex;
        } else {
          htmlIndex += tag.content.length;
        }
      }
      // Move the indices
      if (!!tag.htmlCloseTagStartIndex && tag.closeTagLength) {
        previousTagEndIndex = tag.htmlCloseTagStartIndex + tag.closeTagLength;
      } else {
        // Self-closing tag
        previousTagEndIndex = tag.htmlOpenTagStartIndex + tag.openTagBody.length + 3; // 3 for the < > and /
      }
      tagIndex++;
    }
    // Add the text after the last tag
    if (previousTagEndIndex < htmlTextBlock.length) {
      if (plainStringIndex > previousTagEndIndex) {
        htmlIndex += htmlTextBlock.length - previousTagEndIndex + plainStringIndex;
      }
      text += htmlTextBlock.substring(previousTagEndIndex);
    }
    console.log('text', text);
    console.log('htmlTextBlock', htmlTextBlock);
    console.log('htmlIndex', htmlIndex);
    return htmlIndex;
  }
};

/**
 * Given the oldText and newText, find the start index, old end index and new end index for the changes
 *
 * @private
 */
const findStringsDiffIndexes = (
  oldText: string,
  newText: string
): { changeStart: number; oldChangeEnd: number; newChangeEnd: number } => {
  const newTextLength = newText.length;
  const oldTextLength = oldText.length;

  let changeStart = 0;
  let newChangeEnd = 0;
  let oldChangeEnd = 0;
  const length = Math.min(newTextLength, oldTextLength);

  for (let i = 0; i < length; i++) {
    if (newText[i] !== oldText[i]) {
      // the symbol with changeStart index is updated
      changeStart = i;
      break;
    } else if (i === length - 1 && newText[i] === oldText[i]) {
      // the symbol is added at the end of inputTextValue
      changeStart = length;
      break;
    }
  }
  if (oldTextLength < newTextLength) {
    //insert or replacement
    if (oldTextLength === changeStart) {
      // when change was at the end of string
      newChangeEnd = newTextLength - 1;
      oldChangeEnd = oldTextLength;
    }
    for (let i = 1; i < newTextLength && oldTextLength - i > changeStart; i++) {
      newChangeEnd = newTextLength - i - 1;
      oldChangeEnd = oldTextLength - i - 1;

      if (newText[newChangeEnd] !== oldText[oldChangeEnd]) {
        // Change is found
        break;
      }
    }
  } else if (oldTextLength > newTextLength) {
    //deletion or replacement
    if (newTextLength === changeStart) {
      // when change was at the end of string
      newChangeEnd = newTextLength;
      oldChangeEnd = oldTextLength - 1;
    }
    for (let i = 1; i < oldTextLength && newTextLength - i > changeStart; i++) {
      newChangeEnd = newTextLength - i - 1;
      oldChangeEnd = oldTextLength - i - 1;

      if (newText[newChangeEnd] !== oldText[oldChangeEnd]) {
        // Change is found
        break;
      }
    }
  } else {
    //replacement
    for (let i = 1; i < oldTextLength && oldTextLength - i > changeStart; i++) {
      newChangeEnd = newTextLength - i - 1;
      oldChangeEnd = oldTextLength - i - 1;

      if (newText[newChangeEnd] !== oldText[oldChangeEnd]) {
        // Change is found
        break;
      }
    }
  }
  return { changeStart, oldChangeEnd, newChangeEnd };
};

const htmlStringForMentionSuggestion = (suggestion: AtMentionSuggestion): string => {
  const userIdHTML = ' userId ="' + suggestion.userId + '"';
  const displayName = suggestion.displayName || '';
  const displayNameHTML = ' displayName ="' + displayName + '"';
  const suggestionTypeHTML = ' suggestionType ="' + suggestion.suggestionType + '"';
  return (
    '<msft-at-mention' + userIdHTML + displayNameHTML + suggestionTypeHTML + '>' + displayName + '</msft-at-mention>'
  );
};
