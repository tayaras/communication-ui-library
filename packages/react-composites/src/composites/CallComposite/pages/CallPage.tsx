// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { DiagnosticQuality } from '@azure/communication-calling';
import { useId } from '@fluentui/react-hooks';
import { _isInCall } from '@internal/calling-component-bindings';
import { ErrorBar, OnRenderAvatarCallback, ParticipantMenuItemsCallback } from '@internal/react-components';
import React, { useCallback } from 'react';
import { AvatarPersonaDataCallback } from '../../common/AvatarPersona';
import { useLocale } from '../../localization';
import { CallCompositeOptions } from '../CallComposite';
import { CallArrangement } from '../components/CallArrangement';
import { MediaGallery } from '../components/MediaGallery';
import { NetworkReconnectTile } from '../components/NetworkReconnectTile';
import { useHandlers } from '../hooks/useHandlers';
import { usePropsFor } from '../hooks/usePropsFor';
import { useSelector } from '../hooks/useSelector';
import { callStatusSelector } from '../selectors/callStatusSelector';
import { complianceBannerSelector } from '../selectors/complianceBannerSelector';
import { mediaGallerySelector } from '../selectors/mediaGallerySelector';
import { mutedNotificationSelector } from '../selectors/mutedNotificationSelector';
import { networkReconnectTileSelector } from '../selectors/networkReconnectTileSelector';
import { reduceCallControlsForMobile } from '../utils';
import { LocalVideoStream, VideoEffectsFeature } from '@azure/communication-calling';
import { BackgroundBlurEffect, BackgroundReplacementEffect } from '@azure/communication-calling-effects';
import * as AzureCommunicationCallingSDK from '@azure/communication-calling';
import { IconButton, Stack } from '@fluentui/react';

/**
 * @private
 */
export interface CallPageProps {
  mobileView: boolean;
  /* @conditional-compile-remove(one-to-n-calling) */
  modalLayerHostId: string;
  callInvitationURL?: string;
  onRenderAvatar?: OnRenderAvatarCallback;
  onFetchAvatarPersonaData?: AvatarPersonaDataCallback;
  onFetchParticipantMenuItems?: ParticipantMenuItemsCallback;
  options?: CallCompositeOptions;
  localVideoStreams: LocalVideoStream[];
  adapter: unknown;
}

/**
 * @private
 */
export const CallPage = (props: CallPageProps): JSX.Element => {
  const {
    callInvitationURL,
    onRenderAvatar,
    onFetchAvatarPersonaData,
    onFetchParticipantMenuItems,
    options,
    mobileView
  } = props;

  // To use useProps to get these states, we need to create another file wrapping Call,
  // It seems unnecessary in this case, so we get the updated states using this approach.
  const { callStatus } = useSelector(callStatusSelector);
  const mediaGalleryProps = useSelector(mediaGallerySelector);
  const mediaGalleryHandlers = useHandlers(MediaGallery);
  const complianceBannerProps = useSelector(complianceBannerSelector);
  const errorBarProps = usePropsFor(ErrorBar);
  const mutedNotificationProps = useSelector(mutedNotificationSelector);
  const networkReconnectTileProps = useSelector(networkReconnectTileSelector);

  const strings = useLocale().strings.call;

  // Reduce the controls shown when mobile view is enabled.
  const callControlOptions = mobileView ? reduceCallControlsForMobile(options?.callControls) : options?.callControls;

  const drawerMenuHostId = useId('drawerMenuHost');

  const startBackgroundBlur = useCallback(async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const localVideoStreams = (props.adapter as any)?._call?.localVideoStreams as LocalVideoStream[];
    if (localVideoStreams.length) {
      const localVideoStream: LocalVideoStream = localVideoStreams[0];
      const videoEffectsFeatureApi: VideoEffectsFeature = localVideoStream.feature(
        AzureCommunicationCallingSDK.Features.VideoEffects
      );
      const backgroundBlurEffect = new BackgroundBlurEffect();
      const backgroundBlurSupported = await backgroundBlurEffect.isSupported();
      if (backgroundBlurSupported) {
        // Use the video effects feature api we created to start effects
        await videoEffectsFeatureApi.startEffects(backgroundBlurEffect);
      }
    }
  }, [props.adapter]);

  const startBackgroundEffect = useCallback(
    async (url?) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const localVideoStreams = (props.adapter as any)?._call?.localVideoStreams as LocalVideoStream[];
      if (localVideoStreams.length) {
        const localVideoStream: LocalVideoStream = localVideoStreams[0];
        const videoEffectsFeatureApi: VideoEffectsFeature = localVideoStream.feature(
          AzureCommunicationCallingSDK.Features.VideoEffects
        );
        let backgroundReplacementEffect;
        // Create the effect instance
        if (url) {
          backgroundReplacementEffect = new BackgroundReplacementEffect({
            backgroundImageUrl: url
          });
        } else {
          backgroundReplacementEffect = new BackgroundReplacementEffect({
            backgroundImageUrl:
              'https://3.bp.blogspot.com/-hhfAmey1zLY/VdPTWACinnI/AAAAAAAARXM/-p11ep6puvM/s1600/windows-xp-bliss-wallpapers-hd-wallpapers.jpg'
          });
        }
        // Recommended: Check support
        const backgroundReplacementSupported = await backgroundReplacementEffect.isSupported();
        if (backgroundReplacementSupported) {
          // Use the video effects feature api as before to start/stop effects
          await videoEffectsFeatureApi.startEffects(backgroundReplacementEffect);
        }
      }
    },
    [props.adapter]
  );
  const inputRef = React.useRef<HTMLInputElement>(null);
  const getBase64: (file: File) => void = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };
  const onChange = (files) => {
    console.log(files[0]);
    getBase64(files[0]).then((base64) => {
      localStorage['fileBase64'] = base64;
      console.debug('file stored', base64);
      console.log(base64);
      startBackgroundEffect(base64);
    });
  };
  return (
    <CallArrangement
      id={drawerMenuHostId}
      complianceBannerProps={{ ...complianceBannerProps, strings }}
      // Ignore errors from before current call. This avoids old errors from showing up when a user re-joins a call.
      errorBarProps={options?.errorBar !== false && { ...errorBarProps, ignorePremountErrors: true }}
      mutedNotificationProps={mutedNotificationProps}
      callControlProps={{
        callInvitationURL: callInvitationURL,
        onFetchParticipantMenuItems: onFetchParticipantMenuItems,
        options: callControlOptions,
        increaseFlyoutItemSize: mobileView
      }}
      /* @conditional-compile-remove(one-to-n-calling) */
      onFetchAvatarPersonaData={onFetchAvatarPersonaData}
      mobileView={mobileView}
      /* @conditional-compile-remove(one-to-n-calling) */
      modalLayerHostId={props.modalLayerHostId}
      onRenderGalleryContent={() =>
        _isInCall(callStatus) ? (
          isNetworkHealthy(networkReconnectTileProps.networkReconnectValue) ? (
            <>
              <button onClick={startBackgroundBlur}>Blur Me</button>
              <button onClick={startBackgroundEffect}>upload video background </button>
              {
                // eslint-disable-next-line react/no-unknown-property
                <>
                  <Stack
                    verticalAlign="center"
                    horizontalAlign="center"
                    onClick={() => {
                      inputRef.current?.click();
                    }}
                  >
                    <IconButton iconProps={{ iconName: 'VideoTileMoreOptions' }} />
                  </Stack>
                  <input
                    ref={inputRef}
                    hidden
                    type="file"
                    onClick={(e) => {
                      // To ensure that `onChange` is fired even if the same file is picked again.
                      e.currentTarget.value = '';
                    }}
                    onChange={(e) => {
                      onChange && onChange(e.currentTarget.files);
                    }}
                  />
                </>
              }
              <MediaGallery
                isMobile={mobileView}
                {...mediaGalleryProps}
                {...mediaGalleryHandlers}
                onRenderAvatar={onRenderAvatar}
                onFetchAvatarPersonaData={onFetchAvatarPersonaData}
                /* @conditional-compile-remove(pinned-participants) */
                remoteVideoTileMenuOptions={options?.remoteVideoTileMenu}
                drawerMenuHostId={drawerMenuHostId}
              />
            </>
          ) : (
            <NetworkReconnectTile {...networkReconnectTileProps} />
          )
        ) : (
          <></>
        )
      }
      dataUiId={'call-page'}
    />
  );
};

/**
 * @private
 */
export const isNetworkHealthy = (value: DiagnosticQuality | boolean | undefined): boolean => {
  // We know that the value is actually of type DiagnosticQuality for this diagnostic.
  // We ignore any boolen values, considering the network to still be healthy.
  // Thus, only DiagnosticQuality.Poor or .Bad indicate network problems.
  return value === true || value === false || value === undefined || value === DiagnosticQuality.Good;
};
