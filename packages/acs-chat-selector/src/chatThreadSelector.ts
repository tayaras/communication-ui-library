import { createSelector } from 'reselect';
import { getChatMessages, getSelectorProps } from './baseSelectors';
import { ChatMessageWithStatus } from '@azure/acs-chat-declarative';

export const chatThreadSelector = createSelector(
  [getSelectorProps, getChatMessages], // array of functions that provide parameter
  ({ userId }, chatMessages) => ({
    // A function takes parameter above and generate return value
    userId: userId ?? '',
    chatMessages: Array.from(chatMessages.values()).map((chatMessage: ChatMessageWithStatus) => ({
      createdOn: chatMessage.createdOn,
      content: chatMessage.content,
      status: chatMessage.status,
      senderDisplayName: chatMessage.senderDisplayName,
      senderId: chatMessage.sender?.communicationUserId || userId,
      messageId: chatMessage.id || chatMessage.clientMessageId
    }))
  })
);
