// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { IStyle, Persona, Spinner, Stack, Text, mergeStyles } from '@fluentui/react';
import {
  CustomAvatarOptions,
  ErrorBar,
  OnRenderAvatarCallback,
  StreamMedia,
  VideoGallery
} from '@internal/react-components';
import React, { useMemo } from 'react';
import { useLocale } from '../../localization';
import { CallCompositeOptions } from '../CallComposite';
import { useAdapter } from '../adapter/CallAdapterProvider';
import { CallArrangement } from '../components/CallArrangement';
import { usePropsFor } from '../hooks/usePropsFor';
import { reduceCallControlsForMobile } from '../utils';

/**
 * @private
 */
export interface LobbyPageProps {
  mobileView: boolean;
  /* @conditional-compile-remove(one-to-n-calling) */
  modalLayerHostId: string;
  options?: CallCompositeOptions;
}

export const TransferPage = (props: LobbyPageProps): JSX.Element => {
  const errorBarProps = usePropsFor(ErrorBar);
  const strings = useLocale().strings.call;
  const videoGalleryProps = usePropsFor(VideoGallery);
  const call = useAdapter().getState().call;
  const transferTargetCall = useAdapter().getState().transferTargetCall;

  // Reduce the controls shown when mobile view is enabled.
  let callControlOptions = props.mobileView
    ? reduceCallControlsForMobile(props.options?.callControls)
    : props.options?.callControls;

  const transferor = videoGalleryProps.remoteParticipants[0];
  const renderElement = transferor?.videoStream?.renderElement;
  const isAvailable = transferor?.videoStream?.isAvailable;
  const isReceiving = transferor?.videoStream?.isReceiving;
  const participantState = transferor?.state;

  let state: 'transferring' | 'connecting' = 'transferring';
  if (transferTargetCall !== undefined) {
    if (call?.id !== transferTargetCall.id) {
      if (['Ringing', 'Connected'].includes(transferTargetCall.state)) {
        state = 'connecting';
      } else {
        state = 'transferring';
      }
    } else {
      state = 'connecting';
    }
  }

  const showLoadingIndicator = isAvailable && isReceiving === false && participantState !== 'Disconnected';

  const renderVideoStreamElement = useMemo(() => {
    // Checking if renderElement is well defined or not as calling SDK has a number of video streams limitation which
    // implies that, after their threshold, all streams have no child (blank video)
    if (!renderElement || !renderElement.childElementCount) {
      // Returning `undefined` results in the placeholder with avatar being shown
      return undefined;
    }

    return <StreamMedia videoStreamElement={renderElement} loadingState={showLoadingIndicator ? 'loading' : 'none'} />;
  }, [renderElement, showLoadingIndicator]);

  const transferParticipant = state === 'transferring' ? transferor : transferTargetCall?.remoteParticipants[0];

  return (
    <CallArrangement
      complianceBannerProps={{ strings }}
      // Ignore errors from before current call. This avoids old errors from showing up when a user re-joins a call.
      errorBarProps={props.options?.errorBar !== false && { ...errorBarProps, ignorePremountErrors: true }}
      callControlProps={{
        options: callControlOptions,
        increaseFlyoutItemSize: props.mobileView
      }}
      mobileView={props.mobileView}
      /* @conditional-compile-remove(one-to-n-calling) */
      modalLayerHostId={props.modalLayerHostId}
      onRenderGalleryContent={() => (
        <TransferTile
          displayName={transferParticipant?.displayName}
          initialsName={transferParticipant?.displayName}
          renderElement={renderVideoStreamElement}
          statusString={state === 'connecting' ? 'Connecting...' : 'Transferring...'}
        />
      )}
      dataUiId={'lobby-page'}
    />
  );
};

export interface TransferTileProps {
  /** React Child components. Child Components will show as overlay component in the VideoTile. */
  children?: React.ReactNode;
  /** user id for the VideoTile placeholder. */
  userId?: string;
  /** Component with the video stream. */
  renderElement?: JSX.Element | null;
  /** Custom render Component function for no video is available. Render a Persona Icon if undefined. */
  onRenderPlaceholder?: OnRenderAvatarCallback;
  /**
   * Show label on the VideoTile
   * @defaultValue true
   */
  showLabel?: boolean;
  /**
   * Whether to display a mute icon beside the user's display name.
   * @defaultValue true
   */
  showMuteIndicator?: boolean;
  /**
   * Whether the video is muted or not.
   */
  isMuted?: boolean;
  /* @conditional-compile-remove(pinned-participants) */
  /**
   * If true, the video tile will show the pin icon.
   */
  isPinned?: boolean;
  /**
   * Display Name of the Participant to be shown in the label.
   * @remarks `displayName` is used to generate avatar initials if `initialsName` is not provided.
   */
  displayName?: string;
  /**
   * Name of the participant used to generate initials. For example, a name `John Doe` will display `JD` as initials.
   * @remarks `displayName` is used if this property is not specified.
   */
  initialsName?: string;
  /**
   * Minimum size of the persona avatar in px.
   * The persona avatar is the default placeholder shown when no video stream is available.
   * For more information see https://developer.microsoft.com/en-us/fluentui#/controls/web/persona
   * @defaultValue 32px
   */
  personaMinSize?: number;
  /**
   * Maximum size of the personal avatar in px.
   * The persona avatar is the default placeholder shown when no video stream is available.
   * For more information see https://developer.microsoft.com/en-us/fluentui#/controls/web/persona
   * @defaultValue 100px
   */
  personaMaxSize?: number;
  /** Optional property to set the aria label of the video tile if there is no available stream. */
  noVideoAvailableAriaLabel?: string;
  statusString?: string;
}

const DefaultPlaceholder = (props: CustomAvatarOptions): JSX.Element => {
  const { text, noVideoAvailableAriaLabel, coinSize, hidePersonaDetails } = props;

  return (
    <Stack className={mergeStyles({ height: '100%', width: '100%' })}>
      <Stack styles={defaultPersonaStyles}>
        <Persona
          coinSize={coinSize}
          hidePersonaDetails={hidePersonaDetails}
          text={text ?? ''}
          initialsTextColor="white"
          aria-label={noVideoAvailableAriaLabel ?? ''}
          showOverflowTooltip={false}
        />
      </Stack>
    </Stack>
  );
};

const defaultPersonaStyles = { root: { margin: 'auto', maxHeight: '100%' } };

const TransferTile = (props: TransferTileProps): JSX.Element => {
  const {
    displayName,
    initialsName,
    onRenderPlaceholder,
    renderElement,
    userId,
    noVideoAvailableAriaLabel,
    statusString
  } = props;

  const isVideoRendered = !!renderElement;

  const placeholderOptions = {
    userId,
    text: initialsName ?? displayName,
    noVideoAvailableAriaLabel,
    coinSize: 64,
    styles: defaultPersonaStyles,
    hidePersonaDetails: true
  };

  return (
    <Stack>
      {isVideoRendered ? (
        <Stack className={mergeStyles(videoContainerStyles)}>{renderElement}</Stack>
      ) : (
        <Stack
          className={mergeStyles(videoContainerStyles, {
            opacity: 0.4
          })}
        >
          <Stack
            styles={{
              root: {
                height: '50%',
                width: '100%',
                position: 'absolute',
                top: '40%',
                transform: 'translate(0, -50%)',
                display: 'flex',
                justifyContent: 'center'
              }
            }}
          >
            {onRenderPlaceholder ? (
              onRenderPlaceholder(userId ?? '', placeholderOptions, DefaultPlaceholder)
            ) : (
              <DefaultPlaceholder {...placeholderOptions} />
            )}
            <Text styles={{ root: { textAlign: 'center', fontSize: '32', fontWeight: 200 } }}>
              {displayName ?? 'Unknown'}
            </Text>
            <Stack horizontal horizontalAlign="center" tokens={{ childrenGap: '0.5rem' }}>
              <Spinner />
              <Text styles={{ root: { fontSize: '20' } }}>{statusString}</Text>
            </Stack>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

/**
 * @private
 */
export const videoContainerStyles: IStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  minWidth: '100%',
  minHeight: '100%',
  objectPosition: 'center',
  objectFit: 'cover',
  zIndex: 0
};
