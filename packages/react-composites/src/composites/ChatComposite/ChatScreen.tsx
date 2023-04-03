// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { mergeStyles, Stack } from '@fluentui/react';
import {
  CommunicationParticipant,
  ErrorBar,
  MessageProps,
  MessageRenderer,
  MessageThread,
  MessageThreadStyles,
  ParticipantMenuItemsCallback,
  SendBox,
  SendBoxStylesProps,
  TypingIndicator,
  TypingIndicatorStylesProps,
  useTheme
} from '@internal/react-components';
import React, { useCallback, useEffect } from 'react';
import { AvatarPersona, AvatarPersonaDataCallback } from '../common/AvatarPersona';

import { useAdapter } from './adapter/ChatAdapterProvider';
import { ChatCompositeOptions } from './ChatComposite';
import { ChatHeader, getHeaderProps } from './ChatHeader';
import { FileDownloadHandler } from '@internal/react-components';
import { FileUploadButtonWrapper as FileUploadButton, FileUploadHandler } from './file-sharing';
import { useAdaptedSelector } from './hooks/useAdaptedSelector';
import { usePropsFor } from './hooks/usePropsFor';

import {
  chatArea,
  chatContainer,
  chatWrapper,
  messageThreadChatCompositeStyles,
  sendboxContainerStyles,
  typingIndicatorContainerStyles
} from './styles/Chat.styles';
import { participantListContainerPadding } from '../common/styles/ParticipantContainer.styles';
/* @conditional-compile-remove(chat-composite-participant-pane) */
import { ChatScreenPeoplePane } from './ChatScreenPeoplePane';
import { toFlatCommunicationIdentifier } from '@internal/acs-ui-common';
/* @conditional-compile-remove(file-sharing) */
import { fileUploadsSelector } from './selectors/fileUploadsSelector';
/* @conditional-compile-remove(file-sharing) */
import { useSelector } from './hooks/useSelector';
/* @conditional-compile-remove(file-sharing) */
import { FileDownloadErrorBar } from './FileDownloadErrorBar';
/* @conditional-compile-remove(file-sharing) */
import { _FileDownloadCards } from '@internal/react-components';
import { AtMentionLookupOptions, AtMentionSuggestion } from '@internal/react-components/src/components/AtMentionFlyout';
import { AtMentionDisplayOptions } from '@internal/react-components';

/**
 * @private
 */
export type ChatScreenProps = {
  options?: ChatCompositeOptions;
  onFetchAvatarPersonaData?: AvatarPersonaDataCallback;
  onRenderMessage?: (messageProps: MessageProps, defaultOnRender?: MessageRenderer) => JSX.Element;
  onRenderTypingIndicator?: (typingUsers: CommunicationParticipant[]) => JSX.Element;
  onFetchParticipantMenuItems?: ParticipantMenuItemsCallback;
  styles?: ChatScreenStyles;
  hasFocusOnMount?: 'sendBoxTextField';
  fileSharing?: FileSharingOptions;
  formFactor?: 'desktop' | 'mobile';
};

/**
 * @private
 */
export type ChatScreenStyles = {
  messageThread?: MessageThreadStyles;
  sendBox?: SendBoxStylesProps;
  typingIndicator?: TypingIndicatorStylesProps;
};

/**
 * Properties for configuring the File Sharing feature.
 * @beta
 */
export interface FileSharingOptions {
  /**
   * A string containing the comma separated list of accepted file types.
   * Similar to the `accept` attribute of the `<input type="file" />` element.
   * Accepts any type of file if not specified.
   * @beta
   */
  accept?: string;
  /**
   * Allows multiple files to be selected if set to `true`.
   * Similar to the `multiple` attribute of the `<input type="file" />` element.
   * @defaultValue false
   * @beta
   */
  multiple?: boolean;
  /**
   * A function of type {@link FileUploadHandler} for handling file uploads.
   * @beta
   */
  uploadHandler: FileUploadHandler;
  /**
   * A function of type {@link FileDownloadHandler} for handling file downloads.
   * If the function is not specified, the file's `url` will be opened in a new tab to
   * initiate the download.
   */
  downloadHandler?: FileDownloadHandler;
}

/**
 * @private
 */
export const ChatScreen = (props: ChatScreenProps): JSX.Element => {
  const {
    onFetchAvatarPersonaData,
    onRenderMessage,
    onRenderTypingIndicator,
    options,
    styles,
    fileSharing,
    formFactor
  } = props;

  const defaultNumberOfChatMessagesToReload = 5;
  /* @conditional-compile-remove(file-sharing) */
  const [downloadErrorMessage, setDownloadErrorMessage] = React.useState('');

  const adapter = useAdapter();
  const theme = useTheme();

  useEffect(() => {
    // Initial data should be always fetched by the composite(or external caller) instead of the adapter
    const fetchData: () => Promise<void> = async () => {
      // Fetch initial data for adapter
      await adapter.fetchInitialData();
      // Fetch initial set of messages. Without fetching messages here, if the Composite's adapter is changed the message thread does not load new messages.
      await adapter.loadPreviousChatMessages(defaultNumberOfChatMessagesToReload);
    };
    fetchData();
  }, [adapter]);

  const messageThreadProps = usePropsFor(MessageThread);
  const sendBoxProps = usePropsFor(SendBox);
  const typingIndicatorProps = usePropsFor(TypingIndicator);
  const headerProps = useAdaptedSelector(getHeaderProps);
  const errorBarProps = usePropsFor(ErrorBar);

  const onRenderAvatarCallback = useCallback(
    (userId, defaultOptions) => {
      return (
        <AvatarPersona
          userId={userId}
          hidePersonaDetails={true}
          {...defaultOptions}
          dataProvider={onFetchAvatarPersonaData}
        />
      );
    },
    [onFetchAvatarPersonaData]
  );

  const messageThreadStyles = Object.assign(
    {},
    messageThreadChatCompositeStyles(theme.semanticColors.bodyBackground),
    styles?.messageThread
  );
  const typingIndicatorStyles = Object.assign({}, styles?.typingIndicator);
  const sendBoxStyles = Object.assign({}, styles?.sendBox);
  const userId = toFlatCommunicationIdentifier(adapter.getState().userId);

  const fileUploadButtonOnChange = useCallback(
    (files: FileList | null): void => {
      if (!files) {
        return;
      }

      /* @conditional-compile-remove(file-sharing) */
      const fileUploads = adapter.registerActiveFileUploads(Array.from(files));
      /* @conditional-compile-remove(file-sharing) */
      fileSharing?.uploadHandler(userId, fileUploads);
    },
    [adapter, fileSharing, userId]
  );

  /* @conditional-compile-remove(file-sharing) */
  const onRenderFileDownloads = useCallback(
    (userId, message) => (
      <_FileDownloadCards
        userId={userId}
        fileMetadata={message.attachedFilesMetadata || []}
        downloadHandler={fileSharing?.downloadHandler}
        onDownloadErrorMessage={(errorMessage: string) => {
          setDownloadErrorMessage(errorMessage);
        }}
      />
    ),
    [fileSharing?.downloadHandler]
  );

  const AttachFileButton = useCallback(() => {
    if (!fileSharing?.uploadHandler) {
      return null;
    }
    return (
      <FileUploadButton
        accept={fileSharing?.accept}
        multiple={fileSharing?.multiple}
        onChange={fileUploadButtonOnChange}
      />
    );
  }, [fileSharing?.accept, fileSharing?.multiple, fileSharing?.uploadHandler, fileUploadButtonOnChange]);

  const atMentionLookupOptions: AtMentionLookupOptions = {
    trigger: '@',
    isMobile: formFactor === 'mobile',
    onSuggestionSelected: (suggestion: AtMentionSuggestion) => {
      console.log(suggestion);
    },
    onQueryUpdated: async (query: string) => {
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
    },
    suggestionItemRenderer: (suggestion: AtMentionSuggestion) => {
      return <div>{suggestion.displayName}</div>;
    }
  };

  const handleOnClick = (suggestion: AtMentionSuggestion) => {
    console.log('user clicked: ', suggestion.displayName);
  };
  const atMentionDisplayOptions: AtMentionDisplayOptions = {
    atMentionSuggestionRenderer: (suggestion: AtMentionSuggestion) => {
      return (
        <span
          {...suggestion}
          // ref={atMentionSuggestionRef}
          onClick={() => handleOnClick(suggestion)}
        >
          {suggestion.displayName}
        </span>
      );
    }
  };
  return (
    <Stack className={chatContainer} grow>
      {options?.topic !== false && <ChatHeader {...headerProps} />}
      <Stack className={chatArea} tokens={participantListContainerPadding} horizontal grow>
        <Stack className={chatWrapper} grow>
          {options?.errorBar !== false && <ErrorBar {...errorBarProps} />}
          {
            /* @conditional-compile-remove(file-sharing) */
            <FileDownloadErrorBar
              onDismissDownloadErrorMessage={useCallback(() => {
                setDownloadErrorMessage('');
              }, [])}
              fileDownloadErrorMessage={downloadErrorMessage || ''}
            />
          }
          <MessageThread
            {...messageThreadProps}
            onRenderAvatar={onRenderAvatarCallback}
            onRenderMessage={onRenderMessage}
            /* @conditional-compile-remove(file-sharing) */
            onRenderFileDownloads={onRenderFileDownloads}
            numberOfChatMessagesToReload={defaultNumberOfChatMessagesToReload}
            styles={messageThreadStyles}
            atMentionLookupOptions={atMentionLookupOptions}
            atMentionDisplayOptions={atMentionDisplayOptions}
          />
          <Stack className={mergeStyles(sendboxContainerStyles)}>
            <div className={mergeStyles(typingIndicatorContainerStyles)}>
              {onRenderTypingIndicator ? (
                onRenderTypingIndicator(typingIndicatorProps.typingUsers)
              ) : (
                <TypingIndicator {...typingIndicatorProps} styles={typingIndicatorStyles} />
              )}
            </div>
            <Stack horizontal={formFactor === 'mobile'}>
              {formFactor === 'mobile' && (
                <Stack verticalAlign="center">
                  <AttachFileButton />
                </Stack>
              )}
              <Stack grow>
                <SendBox
                  {...sendBoxProps}
                  autoFocus={options?.autoFocus}
                  styles={sendBoxStyles}
                  /* @conditional-compile-remove(file-sharing) */
                  activeFileUploads={useSelector(fileUploadsSelector).files}
                  /* @conditional-compile-remove(file-sharing) */
                  onCancelFileUpload={adapter.cancelFileUpload}
                  atMentionLookupOptions={atMentionLookupOptions}
                />
              </Stack>
              {formFactor !== 'mobile' && <AttachFileButton />}
            </Stack>
          </Stack>
        </Stack>
        {
          /* @conditional-compile-remove(chat-composite-participant-pane) */
          options?.participantPane === true && (
            <ChatScreenPeoplePane
              onFetchAvatarPersonaData={onFetchAvatarPersonaData}
              onFetchParticipantMenuItems={props.onFetchParticipantMenuItems}
              isMobile={formFactor === 'mobile'}
            />
          )
        }
      </Stack>
    </Stack>
  );
};
