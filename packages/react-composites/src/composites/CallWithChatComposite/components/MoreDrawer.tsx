// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React, { useCallback } from 'react';
import {
  OptionsDevice,
  _DrawerMenu as DrawerMenu,
  _DrawerMenuItemProps as DrawerMenuItemProps
} from '@internal/react-components';
import { AudioDeviceInfo } from '@azure/communication-calling';

/** @private */
export interface MoreDrawerStrings {
  peopleButtonLabel: string;
  speakerMenuTitle: string;
}

/** @private */
export interface MoreDrawerDevicesMenuProps {
  /**
   * Available speakers for selection
   */
  speakers?: OptionsDevice[];
  /**
   * Speaker that is shown as currently selected
   */
  selectedSpeaker?: OptionsDevice;
  /**
   * Speaker when a speaker is selected
   *
   * FIXME: This should really take OptionsDevice as argument, if only I can make useHandlers not hate it.
   */
  onSelectSpeaker: (device: AudioDeviceInfo) => Promise<void>;
}

/** @private */
export interface MoreDrawerProps extends MoreDrawerDevicesMenuProps {
  onLightDismiss: () => void;
  onPeopleButtonClicked: () => void;
  strings: MoreDrawerStrings;
}

/** @private */
export const MoreDrawer = (props: MoreDrawerProps): JSX.Element => {
  const drawerMenuItems: DrawerMenuItemProps[] = [];

  const onSelectSpeaker = useCallback(
    (_ev, itemKey) => {
      const selected = props.speakers?.find((speaker) => speaker.id === itemKey);
      if (selected) {
        props.onSelectSpeaker(selected as AudioDeviceInfo);
      }
    },
    [props.speakers, props.onSelectSpeaker]
  );

  if (props.speakers && props.speakers.length > 0) {
    drawerMenuItems.push({
      key: 'speakers',
      text: props.strings.speakerMenuTitle,
      iconProps: { iconName: 'MoreDrawerSpeakers' },
      subMenuProps: props.speakers.map((speaker) => ({
        key: speaker.id,
        itemKey: speaker.id,
        iconProps: {
          iconName: isSpeakerSelected(speaker, props.selectedSpeaker)
            ? 'MoreDrawerSelectedSpeaker'
            : 'MoreDrawerSpeakers'
        },
        text: speaker.name,
        onItemClick: onSelectSpeaker
      }))
    });
  }

  drawerMenuItems.push({
    key: 'people',
    text: props.strings.peopleButtonLabel,
    iconProps: { iconName: 'MoreDrawerPeople' },
    onItemClick: props.onPeopleButtonClicked
  });

  return <DrawerMenu items={drawerMenuItems} onLightDismiss={props.onLightDismiss} />;
};

const isSpeakerSelected = (speaker: OptionsDevice, selectedSpeaker?: OptionsDevice): boolean =>
  !!selectedSpeaker && speaker.id === selectedSpeaker.id;
