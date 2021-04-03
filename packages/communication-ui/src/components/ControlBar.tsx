// © Microsoft Corporation. All rights reserved.
import { mergeStyles, Stack, IButtonProps } from '@fluentui/react';
import {
  CallControlCloseTrayIcon,
  CallControlPresentNewIcon,
  CallEndIcon,
  CallIcon,
  CallVideoIcon,
  CallVideoOffIcon,
  MicIcon,
  MicOffIcon,
  MoreIcon
} from '@fluentui/react-northstar';
import React from 'react';
import { BaseCustomStylesProps } from '../types';
import {
  controlBarStyles,
  controlButtonLabelStyles,
  controlButtonStyles,
  hangUpControlButtonStyles
} from './styles/ControlBar.styles';

export const videoButtonProps: IButtonProps = {
  onRenderIcon: (props?: IButtonProps): JSX.Element => {
    if (props?.checked) {
      return <CallVideoIcon />;
    } else {
      return <CallVideoOffIcon />;
    }
  },
  styles: controlButtonStyles
};

export const labeledVideoButtonProps: IButtonProps = {
  ...videoButtonProps,
  onRenderText: () => (
    <Stack className={mergeStyles(controlButtonLabelStyles)}>
      <Stack>Camera</Stack>
    </Stack>
  )
};

export const audioButtonProps: IButtonProps = {
  onRenderIcon: (props?: IButtonProps): JSX.Element => {
    if (props?.checked) {
      return <MicIcon />;
    } else {
      return <MicOffIcon />;
    }
  },
  styles: controlButtonStyles
};

export const labeledAudioButtonProps: IButtonProps = {
  ...audioButtonProps,
  onRenderText: (props?: IButtonProps): JSX.Element => {
    if (props?.checked) {
      return (
        <Stack className={mergeStyles(controlButtonLabelStyles)}>
          <Stack>Mute</Stack>
        </Stack>
      );
    } else {
      return (
        <Stack className={mergeStyles(controlButtonLabelStyles)}>
          <Stack>Unmute</Stack>
        </Stack>
      );
    }
  }
};

export const screenShareButtonProps: IButtonProps = {
  onRenderIcon: (props?: IButtonProps): JSX.Element => {
    if (props?.checked) {
      return <CallControlCloseTrayIcon />;
    } else {
      return <CallControlPresentNewIcon bordered={false} />;
    }
  },
  styles: controlButtonStyles
};

export const labeledScreenShareButtonProps: IButtonProps = {
  ...screenShareButtonProps,
  onRenderText: (props?: IButtonProps): JSX.Element => {
    if (props?.checked) {
      return (
        <Stack className={mergeStyles(controlButtonLabelStyles)}>
          <Stack>Stop</Stack>
        </Stack>
      );
    } else {
      return (
        <Stack className={mergeStyles(controlButtonLabelStyles)}>
          <Stack>Share</Stack>
        </Stack>
      );
    }
  }
};

export const optionsButtonProps: IButtonProps = {
  onRenderIcon: (): JSX.Element => <MoreIcon />,
  menuIconProps: {
    hidden: true
  },
  styles: controlButtonStyles
};

export const labeledOptionsButtonProps: IButtonProps = {
  ...optionsButtonProps,
  onRenderText: (): JSX.Element => {
    return (
      <Stack className={mergeStyles(controlButtonLabelStyles)}>
        <Stack>Options</Stack>
      </Stack>
    );
  }
};

export const answerButtonProps: IButtonProps = {
  onRenderIcon: (): JSX.Element => <CallIcon />,
  onRenderText: (): JSX.Element => {
    return (
      <Stack className={mergeStyles(controlButtonLabelStyles)}>
        <Stack>Answer</Stack>
      </Stack>
    );
  }
};

export const hangupButtonProps: IButtonProps = {
  onRenderIcon: (): JSX.Element => <CallEndIcon />,
  styles: hangUpControlButtonStyles
};

export const labeledHangupButtonProps: IButtonProps = {
  ...hangupButtonProps,
  onRenderText: (): JSX.Element => {
    return (
      <Stack className={mergeStyles(controlButtonLabelStyles)}>
        <Stack>Hangup</Stack>
      </Stack>
    );
  }
};

export const CONTROL_BAR_LAYOUTS = [
  'horizontal',
  'vertical',
  'dockedTop',
  'dockedBottom',
  'dockedLeft',
  'dockedRight',
  'floatingTop',
  'floatingBottom',
  'floatingLeft',
  'floatingRight'
] as const;

export type ControlBarLayoutType =
  | 'horizontal'
  | 'vertical'
  | 'dockedTop'
  | 'dockedBottom'
  | 'dockedLeft'
  | 'dockedRight'
  | 'floatingTop'
  | 'floatingBottom'
  | 'floatingLeft'
  | 'floatingRight';

/**
 * Props for ControlBar component.
 */
export interface ControlBarProps {
  /** React Child components. */
  children?: React.ReactNode;
  /**
   * Allows users to pass in an object contains custom CSS styles.
   * @Example
   * ```
   * <ControlBar styles={{ root: { background: 'blue' } }} />
   * ```
   */
  styles?: BaseCustomStylesProps;
  /**
   * Changes the layout of the control bar.
   * Available layouts are `horizontal`, `vertical`, `dockedTop`, `dockedBottom`,
   * `dockedLeft`, `dockedRight`, `floatingTop`, `floatingBottom`, `floatingLeft`,
   * `floatingRight`
   * Defaults to a `horizontal` layout.
   */
  layout?: ControlBarLayoutType;
}

/**
 * `ControlBar` allows you to easily create a component for call controls using
 * [Button](https://developer.microsoft.com/en-us/fluentui#/controls/web/button) component from
 * Fluent UI. Users will need to provide methods to Button components used inside `ControlBar`
 * for altering call behavior.
 */
export const ControlBar = (props: ControlBarProps): JSX.Element => {
  const { styles, layout } = props;
  const controlBarStyle = controlBarStyles[layout ?? 'horizontal'];
  return <Stack className={mergeStyles(controlBarStyle, styles?.root)}>{props.children}</Stack>;
};
