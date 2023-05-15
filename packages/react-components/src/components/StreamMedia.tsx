// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { mergeStyles, Spinner } from '@fluentui/react';
import React, { useEffect, useRef, useState } from 'react';
import {
  invertedVideoInPipStyle,
  mediaContainer,
  container,
  loadingSpinnerContainer,
  loadSpinnerStyles
} from './styles/StreamMedia.styles';
import { useTheme } from '../theming';
import { BaseCustomStyles } from '../types';
import ColorThief from 'colorthief';

/**
 * Whether the stream is loading or not.
 * @public
 */
export type LoadingState = 'loading' | 'none';

/**
 * Props for {@link StreamMedia}.
 *
 * @public
 */
export interface StreamMediaProps {
  /** Video stream element to render. */
  videoStreamElement: HTMLElement | null;
  /** Decides whether to mirror the video or not. */
  isMirrored?: boolean;
  /** Whether the stream is loading data */
  loadingState?: LoadingState;
  /**
   * Allows users to pass in an object contains custom CSS styles.
   * @Example
   * ```
   * <StreamMedia styles={{ root: { background: 'blue' } }} />
   * ```
   */
  styles?: BaseCustomStyles;
  setColor?: (color: string) => void;
}

/**
 * Utility component to convert an HTMLElement with a video stream into a JSX element.
 *
 * Use to convert an HTMLElement returned by headless calling API into a component that can be rendered as a {@link VideoTile}.
 *
 * @public
 */
export const StreamMedia = (props: StreamMediaProps): JSX.Element => {
  const containerEl = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const { isMirrored, videoStreamElement, styles, loadingState = 'none' } = props;
  const [pipEnabled, setPipEnabled] = useState(false);

  const [videoColor, setVideoColor] = useState('#000000');

  useEffect(() => {
    const container = containerEl.current;
    if (!container) {
      return;
    }

    // If videoStreamElement changes, we clear the container to make sure we don't have duplicate, and replace it with
    // the new videoStreamElement. If videoStreamElement is undefined nothing is appended and container should be empty
    // and we don't render anyting.
    container.innerHTML = '';
    setPipEnabled(false);
    if (videoStreamElement) {
      videoStreamElement.addEventListener('enterpictureinpicture', () => {
        setPipEnabled(true);
      });
      videoStreamElement.addEventListener('leavepictureinpicture', () => {
        setPipEnabled(false);
      });
      container.appendChild(videoStreamElement);
    }

    return () => {
      container.innerHTML = '';
      setPipEnabled(false);
    };
  }, [videoStreamElement]);

  useEffect(() => {
    setTimeout(() => {
      const video = videoStreamElement?.getElementsByTagName('video')[0];
      var canvas: any = document.createElement('canvas');

      var photo: any = document.createElement('img');

      if (canvas && video) {
        canvas.width = video.clientWidth;
        canvas.height = video.clientHeight;

        canvas.getContext('2d').drawImage(video, 0, 0, video.clientWidth, video.clientHeight);
        const data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
        const colorThief = new ColorThief();

        photo.addEventListener('load', function () {
          const color = colorThief.getColor(photo);
          setVideoColor(rgbToHex(color[0], color[1], color[2]));
        });
      }
    }, 3000);
  }, [videoStreamElement]);

  useEffect(() => {
    if (props.setColor) {
      props.setColor(videoColor);
    }
  }, [videoColor]);

  return (
    <>
      {/* <div style={{width: '100px', height: '100px', position: 'absolute',backgroundColor: videoColor, zIndex: 999}}></div> */}
      <div className={container()}>
        <div
          data-ui-id="stream-media-container"
          className={mergeStyles(
            isMirrored && pipEnabled ? invertedVideoInPipStyle(theme) : mediaContainer(theme),
            styles?.root
          )}
          ref={containerEl}
        />
        {loadingState === 'loading' && (
          <div className={loadingSpinnerContainer()}>
            <Spinner data-ui-id="stream-media-loading-spinner" styles={loadSpinnerStyles} />
          </div>
        )}
      </div>
    </>
  );
};

const rgbToHex = (r, g, b) =>
  '#' +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    })
    .join('');
