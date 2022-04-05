// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { IStackStyles, IStackTokens, ITheme, Stack } from '@fluentui/react';
import {
  ErrorBar,
  ParticipantMenuItemsCallback,
  useTheme,
  _DrawerMenu,
  _DrawerMenuItemProps,
  _ICoordinates
} from '@internal/react-components';
import React, { useMemo, useState } from 'react';
import { CallAdapter } from '../CallComposite';
import { CallAdapterProvider } from '../CallComposite/adapter/CallAdapterProvider';
import { ChatAdapter, ChatComposite, ChatCompositeProps } from '../ChatComposite';
import { AvatarPersonaDataCallback } from '../common/AvatarPersona';
import {
  paneBodyContainer,
  scrollableContainer,
  scrollableContainerContents
} from '../common/styles/ParticipantContainer.styles';
import { SidePaneHeader } from './SidePaneHeader';
import { useCallWithChatCompositeStrings } from './hooks/useCallWithChatCompositeStrings';
import { ModalLocalAndRemotePIP, ModalLocalAndRemotePIPStyles } from './ModalLocalAndRemotePIP';
import { PeoplePaneContent } from './PeoplePaneContent';
import { drawerContainerStyles } from './styles/CallWithChatCompositeStyles';
import { TabHeader } from './TabHeader';
/* @conditional-compile-remove(file-sharing) */
import { FileSharingOptions } from '../ChatComposite';
import { _pxToRem } from '@internal/acs-ui-common';
import { usePropsFor } from '../CallComposite/hooks/usePropsFor';
import { ComplianceBanner } from '../CallComposite/components/ComplianceBanner';
import { useSelector } from '../CallComposite/hooks/useSelector';
import { complianceBannerSelector } from '../CallComposite/selectors/complianceBannerSelector';

/**
 * Pane that is used to store chat and people for CallWithChat composite
 * @private
 */
export const CallWithChatPane = (props: {
  chatCompositeProps: Partial<ChatCompositeProps>;
  callAdapter: CallAdapter;
  chatAdapter: ChatAdapter;
  onClose: () => void;
  onFetchAvatarPersonaData?: AvatarPersonaDataCallback;
  onFetchParticipantMenuItems?: ParticipantMenuItemsCallback;
  onChatButtonClicked?: () => void;
  onPeopleButtonClicked?: () => void;
  modalLayerHostId: string;
  activePane: CallWithChatPaneOption;
  mobileView?: boolean;
  inviteLink?: string;
  errorBar?: boolean;
  /* @conditional-compile-remove(file-sharing) */
  fileSharing?: FileSharingOptions;
  rtl?: boolean;
}): JSX.Element => {
  const [drawerMenuItems, setDrawerMenuItems] = useState<_DrawerMenuItemProps[]>([]);

  const hidden = props.activePane === 'none';
  const paneStyles = hidden ? hiddenStyles : props.mobileView ? availableSpaceStyles : sidePaneStyles;

  const callWithChatStrings = useCallWithChatCompositeStrings();
  const theme = useTheme();

  const header =
    props.activePane === 'none' ? null : props.mobileView ? (
      <TabHeader {...props} activeTab={props.activePane} />
    ) : (
      <SidePaneHeader
        {...props}
        headingText={
          props.activePane === 'chat'
            ? callWithChatStrings.chatPaneTitle
            : props.activePane === 'people'
            ? callWithChatStrings.peoplePaneTitle
            : ''
        }
      />
    );

  const chatContent = (
    <ChatComposite
      {...props.chatCompositeProps}
      adapter={props.chatAdapter}
      fluentTheme={theme}
      options={{
        topic: false,
        /* @conditional-compile-remove(chat-composite-participant-pane) */
        participantPane: false,
        /* @conditional-compile-remove(file-sharing) */
        fileSharing: props.fileSharing
      }}
      onFetchAvatarPersonaData={props.onFetchAvatarPersonaData}
    />
  );

  const peopleContent = (
    <CallAdapterProvider adapter={props.callAdapter}>
      <PeoplePaneContent {...props} setDrawerMenuItems={setDrawerMenuItems} strings={callWithChatStrings} />
    </CallAdapterProvider>
  );

  const modalLayerHost = document.getElementById(props.modalLayerHostId);
  const pipStyles = useMemo(() => getPipStyles(theme), [theme]);

  const dataUiId =
    props.activePane === 'chat'
      ? 'call-with-chat-composite-chat-pane'
      : props.activePane === 'people'
      ? 'call-with-chat-composite-people-pane'
      : '';

  return (
    <Stack verticalFill grow styles={paneStyles} data-ui-id={dataUiId} tokens={props.mobileView ? {} : sidePaneTokens}>
      {header}
      {props.mobileView && (
        <CallAdapterProvider adapter={props.callAdapter}>
          <ComplianceBannerHooked />
        </CallAdapterProvider>
      )}
      {props.mobileView && props.errorBar && (
        <CallAdapterProvider adapter={props.callAdapter}>
          <ErrorBarHooked />
        </CallAdapterProvider>
      )}
      <Stack.Item verticalFill grow styles={paneBodyContainer}>
        <Stack horizontal styles={scrollableContainer}>
          <Stack.Item verticalFill styles={scrollableContainerContents}>
            <Stack styles={props.activePane === 'chat' ? availableSpaceStyles : hiddenStyles}>{chatContent}</Stack>
            <Stack styles={props.activePane === 'people' ? availableSpaceStyles : hiddenStyles}>{peopleContent}</Stack>
          </Stack.Item>
        </Stack>
      </Stack.Item>
      {props.mobileView && modalLayerHost && (
        <ModalLocalAndRemotePIP
          callAdapter={props.callAdapter}
          modalLayerHostId={props.modalLayerHostId}
          hidden={hidden}
          styles={pipStyles}
          minDragPosition={{
            x: props.rtl
              ? -1 * modalPipRightPositionPx
              : modalPipRightPositionPx - modalLayerHost.getBoundingClientRect().width + modalPipWidthPx,
            y: -1 * modalPipTopPositionPx
          }}
          maxDragPosition={{
            x: props.rtl
              ? modalLayerHost.getBoundingClientRect().width - modalPipRightPositionPx - modalPipWidthPx
              : modalPipRightPositionPx,
            y: modalLayerHost.getBoundingClientRect().height - modalPipTopPositionPx - modalPipHeightPx
          }}
        />
      )}
      {drawerMenuItems.length > 0 && (
        <Stack styles={drawerContainerStyles}>
          <_DrawerMenu onLightDismiss={() => setDrawerMenuItems([])} items={drawerMenuItems} />
        </Stack>
      )}
    </Stack>
  );
};

const ComplianceBannerHooked = () => {
  const complianceBannerProps = useSelector(complianceBannerSelector);
  return <ComplianceBanner {...complianceBannerProps} />;
};

const ErrorBarHooked = () => {
  const errorBarProps = usePropsFor(ErrorBar);
  return <ErrorBar {...errorBarProps} />;
};

/**
 * Active tab option type for {@link CallWithChatPane} component
 * @private
 */
export type CallWithChatPaneOption = 'none' | 'chat' | 'people';

const hiddenStyles: IStackStyles = {
  root: {
    display: 'none'
  }
};

const sidePaneStyles: IStackStyles = {
  root: {
    height: '100%',
    padding: '0.5rem 0.25rem',
    maxWidth: '21.5rem'
  }
};

const availableSpaceStyles: IStackStyles = { root: { width: '100%', height: '100%' } };

const sidePaneTokens: IStackTokens = {
  childrenGap: '0.5rem'
};

const modalPipRightPositionPx = 16;
const modalPipTopPositionPx = 52;
const modalPipWidthPx = 88;
const modalPipHeightPx = 128;

const getPipStyles = (theme: ITheme): ModalLocalAndRemotePIPStyles => ({
  modal: {
    main: {
      borderRadius: theme.effects.roundedCorner4,
      boxShadow: theme.effects.elevation8,
      // Above the message thread / people pane.
      zIndex: 2,
      ...(theme.rtl ? { left: _pxToRem(modalPipRightPositionPx) } : { right: _pxToRem(modalPipRightPositionPx) }),
      top: _pxToRem(modalPipTopPositionPx)
    }
  }
});
