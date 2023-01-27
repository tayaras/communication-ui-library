// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Stack } from '@fluentui/react';
import { _formatString } from '@internal/acs-ui-common';
import React, { useEffect, useMemo, useState } from 'react';
import { OnRenderAvatarCallback, VideoStreamOptions, CreateVideoStreamViewResult } from '../types';
import { LocalVideoCameraCycleButton, LocalVideoCameraCycleButtonProps } from './LocalVideoCameraButton';
import { StreamMedia } from './StreamMedia';
import {
  useLocalVideoStreamLifecycleMaintainer,
  LocalVideoStreamLifecycleMaintainerProps
} from './VideoGallery/useVideoStreamLifecycleMaintainer';
import { VideoTile, VideoTileStylesProps } from './VideoTile';

/**
 * A memoized version of VideoTile for rendering local participant.
 *
 * @internal
 */
export const _LocalVideoTile = React.memo(
  (props: {
    userId?: string;
    onCreateLocalStreamView?: (options?: VideoStreamOptions) => Promise<void | CreateVideoStreamViewResult>;
    onDisposeLocalStreamView?: () => void;
    isAvailable?: boolean;
    isMuted?: boolean;
    renderElement?: HTMLElement;
    displayName?: string;
    initialsName?: string;
    localVideoViewOptions?: VideoStreamOptions;
    onRenderAvatar?: OnRenderAvatarCallback;
    showLabel: boolean;
    showMuteIndicator?: boolean;
    showCameraSwitcherInLocalPreview?: boolean;
    localVideoCameraCycleButtonProps?: LocalVideoCameraCycleButtonProps;
    localVideoCameraSwitcherLabel?: string;
    localVideoSelectedDescription?: string;
    styles?: VideoTileStylesProps;
    personaMinSize?: number;
  }) => {
    const {
      isAvailable,
      isMuted,
      onCreateLocalStreamView,
      onDisposeLocalStreamView,
      localVideoViewOptions,
      renderElement,
      userId,
      showLabel,
      displayName,
      initialsName,
      onRenderAvatar,
      showMuteIndicator,
      styles,
      showCameraSwitcherInLocalPreview,
      localVideoCameraCycleButtonProps,
      localVideoCameraSwitcherLabel,
      localVideoSelectedDescription
    } = props;

    const localVideoStreamProps: LocalVideoStreamLifecycleMaintainerProps = useMemo(
      () => ({
        isMirrored: localVideoViewOptions?.isMirrored,
        isStreamAvailable: isAvailable,
        onCreateLocalStreamView,
        onDisposeLocalStreamView,
        renderElementExists: !!renderElement,
        scalingMode: localVideoViewOptions?.scalingMode
      }),
      [
        isAvailable,
        localVideoViewOptions?.isMirrored,
        localVideoViewOptions?.scalingMode,
        onCreateLocalStreamView,
        onDisposeLocalStreamView,
        renderElement
      ]
    );

    // Handle creating, destroying and updating the video stream as necessary
    useLocalVideoStreamLifecycleMaintainer(localVideoStreamProps);

    const renderVideoStreamElement = useMemo(() => {
      // Checking if renderElement is well defined or not as calling SDK has a number of video streams limitation which
      // implies that, after their threshold, all streams have no child (blank video)
      if (!renderElement || !renderElement.childElementCount) {
        // Returning `undefined` results in the placeholder with avatar being shown
        return undefined;
      }

      return (
        <>
          <FloatingLocalCameraCycleButton
            showCameraSwitcherInLocalPreview={showCameraSwitcherInLocalPreview ?? false}
            localVideoCameraCycleButtonProps={localVideoCameraCycleButtonProps}
            localVideoCameraSwitcherLabel={localVideoCameraSwitcherLabel}
            localVideoSelectedDescription={localVideoSelectedDescription}
          />
          <StreamMedia videoStreamElement={renderElement} isMirrored={true} />
        </>
      );
    }, [
      localVideoCameraCycleButtonProps,
      localVideoCameraSwitcherLabel,
      localVideoSelectedDescription,
      renderElement,
      showCameraSwitcherInLocalPreview
    ]);

    return (
      <VideoTile
        key={userId ?? 'local-video-tile'}
        userId={userId}
        renderElement={renderVideoStreamElement}
        showLabel={showLabel}
        displayName={displayName}
        initialsName={initialsName}
        styles={styles}
        onRenderPlaceholder={onRenderAvatar}
        isMuted={isMuted}
        showMuteIndicator={showMuteIndicator}
        personaMinSize={props.personaMinSize}
      />
    );
  }
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ScalingMode = any;

/**
 * The view for a video stream.
 */
interface VideoStreamRendererView {
  /**
   * The current scale mode for this view.
   */
  readonly scalingMode: ScalingMode;
  /**
   * Weather this view is mirrored.
   */
  readonly isMirrored: boolean;
  /**
   * The target html element in which the video stream is rendering on.
   * Use this property and attach it to any UI html element. Example:
   *     document.getElement('someDiv').appendChild(rendererView.target);
   */
  readonly target: HTMLElement;
  /**
   * Update the scale mode for this view.
   * @param scalingMode - The new scale mode.
   */
  updateScalingMode(scalingMode: ScalingMode): Promise<void>;
}

type CreateViewResult = {
  view: VideoStreamRendererView;
};

/** @internal */
export const _LocalSampleVideoTile = React.memo(
  (props: {
    userId?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onCreateLocalStreamView?: (options?: VideoStreamOptions) => Promise<void | any>;
    onDisposeLocalStreamView?: () => void;
    isMuted?: boolean;
    displayName?: string;
    initialsName?: string;
    localVideoViewOptions?: VideoStreamOptions;
    showLabel: boolean;
    showMuteIndicator?: boolean;
    styles?: VideoTileStylesProps;
    personaMinSize?: number;
    isOn: boolean;
  }) => {
    const {
      isMuted,
      onCreateLocalStreamView,
      onDisposeLocalStreamView,
      localVideoViewOptions,
      userId,
      showLabel,
      displayName,
      initialsName,
      showMuteIndicator,
      styles,
      isOn
    } = props;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [renderViewResult, setRenderViewResult] = useState<void | CreateViewResult>();

    const isAvailable = !!renderViewResult;
    const isMirrored = renderViewResult?.view?.isMirrored;
    const renderElement = renderViewResult?.view?.target;

    console.log(renderViewResult);

    useEffect(() => {
      if (isOn) {
        console.log('is on! creating stream view', onCreateLocalStreamView);
        onCreateLocalStreamView?.(localVideoViewOptions).then((result) => {
          console.log('hey whats our result? ', result);
          setRenderViewResult(result);
        });
      }
    }, [localVideoViewOptions, onCreateLocalStreamView, isOn]);

    const localVideoStreamProps: LocalVideoStreamLifecycleMaintainerProps = useMemo(
      () => ({
        isMirrored: localVideoViewOptions?.isMirrored,
        isStreamAvailable: isAvailable,
        onCreateLocalStreamView,
        onDisposeLocalStreamView,
        renderElementExists: !!renderElement,
        scalingMode: localVideoViewOptions?.scalingMode
      }),
      [
        localVideoViewOptions?.isMirrored,
        localVideoViewOptions?.scalingMode,
        onCreateLocalStreamView,
        onDisposeLocalStreamView,
        renderElement,
        isAvailable
      ]
    );

    const renderVideoStreamElement = useMemo(() => {
      // Checking if renderElement is well defined or not as calling SDK has a number of video streams limitation which
      // implies that, after their threshold, all streams have no child (blank video)
      if (!renderElement || !renderElement.childElementCount) {
        // Returning `undefined` results in the placeholder with avatar being shown
        return undefined;
      }

      return (
        <>
          <StreamMedia videoStreamElement={renderElement} isMirrored={true} />
        </>
      );
    }, [renderElement]);

    return (
      <VideoTile
        key={userId ?? 'local-video-tile'}
        userId={userId}
        renderElement={renderVideoStreamElement}
        showLabel={showLabel}
        displayName={displayName}
        initialsName={initialsName}
        styles={styles}
        isMuted={isMuted}
        showMuteIndicator={showMuteIndicator}
        personaMinSize={props.personaMinSize}
      />
    );
  }
);

const FloatingLocalCameraCycleButton = (props: {
  showCameraSwitcherInLocalPreview: boolean;
  localVideoCameraCycleButtonProps?: LocalVideoCameraCycleButtonProps;
  localVideoCameraSwitcherLabel?: string;
  localVideoSelectedDescription?: string;
}): JSX.Element => {
  const {
    showCameraSwitcherInLocalPreview,
    localVideoCameraCycleButtonProps,
    localVideoCameraSwitcherLabel,
    localVideoSelectedDescription
  } = props;
  const ariaDescription =
    localVideoCameraCycleButtonProps?.selectedCamera &&
    localVideoSelectedDescription &&
    _formatString(localVideoSelectedDescription, {
      cameraName: localVideoCameraCycleButtonProps.selectedCamera.name
    });
  return (
    <Stack horizontalAlign="end">
      {showCameraSwitcherInLocalPreview &&
        localVideoCameraCycleButtonProps?.cameras !== undefined &&
        localVideoCameraCycleButtonProps?.selectedCamera !== undefined &&
        localVideoCameraCycleButtonProps?.onSelectCamera !== undefined && (
          <LocalVideoCameraCycleButton
            cameras={localVideoCameraCycleButtonProps.cameras}
            selectedCamera={localVideoCameraCycleButtonProps.selectedCamera}
            onSelectCamera={localVideoCameraCycleButtonProps.onSelectCamera}
            label={localVideoCameraSwitcherLabel}
            ariaDescription={ariaDescription}
          />
        )}
    </Stack>
  );
};
