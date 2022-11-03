// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from 'react';
/* @conditional-compile-remove(call-readiness) */
import { useState } from 'react';
import { useAdaptedSelector } from '../hooks/useAdaptedSelector';
import { useHandlers } from '../hooks/useHandlers';
import { LocalDeviceSettings } from '../components/LocalDeviceSettings';
import { StartCallButton } from '../components/StartCallButton';
import { devicePermissionSelector } from '../selectors/devicePermissionSelector';
import { useSelector } from '../hooks/useSelector';
import { DevicesButton, ErrorBar } from '@internal/react-components';
/* @conditional-compile-remove(call-readiness) */
import { DomainPermissions, _DrawerSurface, _DrawerSurfaceStyles } from '@internal/react-components';
/* @conditional-compile-remove(rooms) */
import { _usePermissions, _Permissions } from '@internal/react-components';
import { getCallingSelector } from '@internal/calling-component-bindings';
import { Stack } from '@fluentui/react';
/* @conditional-compile-remove(call-readiness) */
import { Modal } from '@fluentui/react';
import { LocalPreview } from '../components/LocalPreview';
import {
  callDetailsStyleDesktop,
  callDetailsStyleMobile,
  configurationStackTokensDesktop,
  configurationStackTokensMobile,
  configurationContainerStyleDesktop,
  configurationContainerStyleMobile,
  selectionContainerStyle,
  startCallButtonContainerStyleDesktop,
  startCallButtonContainerStyleMobile,
  startCallButtonStyleMobile,
  titleContainerStyleDesktop,
  titleContainerStyleMobile,
  callDetailsContainerStylesDesktop
} from '../styles/CallConfiguration.styles';
import { useLocale } from '../../localization';
import { bannerNotificationStyles } from '../styles/CallPage.styles';
import { usePropsFor } from '../hooks/usePropsFor';
import { useAdapter } from '../adapter/CallAdapterProvider';
/* @conditional-compile-remove(call-readiness) */
import { DevicePermissionRestrictions } from '../CallComposite';
import { ConfigurationpageErrorBar } from '../components/ConfigurationpageErrorBar';
/* @conditional-compile-remove(call-readiness) */
import { drawerContainerStyles } from '../styles/CallComposite.styles';

/* @conditional-compile-remove(call-readiness) */
const DRAWER_HIGH_Z_BAND = 99; // setting z index to  99 so that it sit above all components

/**
 * @private
 */
export interface ConfigurationPageProps {
  mobileView: boolean;
  startCallHandler(): void;
  /* @conditional-compile-remove(call-readiness) */
  devicePermissions?: DevicePermissionRestrictions;
  /* @conditional-compile-remove(call-readiness) */
  onPermissionsTroubleshootingClick?: (permissionsState: {
    camera: PermissionState;
    microphone: PermissionState;
  }) => void;
  /* @conditional-compile-remove(call-readiness) */
  onNetworkingTroubleShootingClick?: () => void;
  /* @conditional-compile-remove(call-readiness) */
  callReadinessOptedIn?: boolean;
}

/**
 * @private
 */
export const ConfigurationPage = (props: ConfigurationPageProps): JSX.Element => {
  const {
    startCallHandler,
    mobileView,
    /* @conditional-compile-remove(call-readiness) */ devicePermissions,
    /* @conditional-compile-remove(call-readiness) */ onPermissionsTroubleshootingClick,
    /* @conditional-compile-remove(call-readiness) */ onNetworkingTroubleShootingClick,
    /* @conditional-compile-remove(call-readiness) */ callReadinessOptedIn = false
  } = props;

  const options = useAdaptedSelector(getCallingSelector(DevicesButton));
  const localDeviceSettingsHandlers = useHandlers(LocalDeviceSettings);
  const { video: cameraPermissionGranted, audio: microphonePermissionGranted } = useSelector(devicePermissionSelector);
  let errorBarProps = usePropsFor(ErrorBar);
  const adapter = useAdapter();
  const deviceState = adapter.getState().devices;

  let disableStartCallButton = !microphonePermissionGranted || deviceState.microphones?.length === 0;
  /* @conditional-compile-remove(rooms) */
  const rolePermissions = _usePermissions();

  /* @conditional-compile-remove(rooms) */
  // TODO: move this logic to the error bar selector once role is plumbed from the headless SDK
  if (!rolePermissions.cameraButton) {
    errorBarProps = {
      ...errorBarProps,
      activeErrorMessages: errorBarProps.activeErrorMessages.filter((e) => e.type !== 'callCameraAccessDenied')
    };
  }
  /* @conditional-compile-remove(rooms) */
  if (!rolePermissions.microphoneButton) {
    // If user's role permissions do not allow access to the microphone button then DO NOT disable the start call button
    // because microphone device permission is not needed for the user's role
    disableStartCallButton = false;
  }

  /* @conditional-compile-remove(call-readiness) */
  // Overrides role permissions if CallCompositeOptions devicePermissions are set
  if (devicePermissions) {
    if (
      ['doNotPrompt', 'optional'].includes(devicePermissions.camera) &&
      ['doNotPrompt', 'optional'].includes(devicePermissions.microphone)
    ) {
      disableStartCallButton = false;
    } else if (devicePermissions.camera === 'required') {
      disableStartCallButton = !cameraPermissionGranted || deviceState.cameras?.length === 0;
    }
  }

  const locale = useLocale();
  const title = (
    <Stack.Item className={mobileView ? titleContainerStyleMobile : titleContainerStyleDesktop}>
      {locale.strings.call.configurationPageTitle}
    </Stack.Item>
  );

  const callDescription = locale.strings.call.configurationPageCallDetails && (
    <Stack.Item className={mobileView ? callDetailsStyleMobile : callDetailsStyleDesktop}>
      {locale.strings.call.configurationPageCallDetails}
    </Stack.Item>
  );

  let mobileWithPreview = mobileView;
  /* @conditional-compile-remove(rooms) */
  mobileWithPreview = mobileWithPreview && rolePermissions.cameraButton;

  /* @conditional-compile-remove(call-readiness) */
  const permissionsState: {
    camera: PermissionState;
    microphone: PermissionState;
  } = {
    camera: cameraPermissionGranted ? 'granted' : 'denied',
    microphone: microphonePermissionGranted ? 'granted' : 'denied'
  };
  /* @conditional-compile-remove(call-readiness) */
  const networkErrors = errorBarProps.activeErrorMessages.filter((message) => message.type === 'callNetworkQualityLow');

  /* @conditional-compile-remove(call-readiness) */
  const [isDrawerShowing, setIsDrawerShowing] = useState(true);
  /* @conditional-compile-remove(call-readiness) */
  const onLightDismissTriggered = (): void => {
    // do nothing here
    // only way to dismiss this drawer is clicking on allow access which will leads to device permission prompt
  };

  /* @conditional-compile-remove(call-readiness) */
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <Stack className={mobileView ? configurationContainerStyleMobile : configurationContainerStyleDesktop}>
      <Stack styles={bannerNotificationStyles}>
        <ConfigurationpageErrorBar
          /* @conditional-compile-remove(call-readiness) */
          // show trouble shooting error bar when encountering network error/ permission error
          showTroubleShootingErrorBar={
            !cameraPermissionGranted || !microphonePermissionGranted || networkErrors.length > 0
          }
          /* @conditional-compile-remove(call-readiness) */
          permissionsState={permissionsState}
          /* @conditional-compile-remove(call-readiness) */
          onNetworkingTroubleShootingClick={onNetworkingTroubleShootingClick}
          /* @conditional-compile-remove(call-readiness) */
          onPermissionsTroubleshootingClick={onPermissionsTroubleshootingClick}
          errorBarProps={errorBarProps}
          /* @conditional-compile-remove(call-readiness) */
          callReadinessOptedIn={callReadinessOptedIn}
        />
      </Stack>

      {
        /* @conditional-compile-remove(call-readiness) */
        //show this when clicking on enable camera button or enable mic button on desktop for the first time
        //does not show if user has already grant mic or camera access
        !mobileView && !cameraPermissionGranted && !microphonePermissionGranted && callReadinessOptedIn && (
          <Modal
            isOpen={isModalShowing}
            isBlocking={false}
            onDismiss={() => {
              setIsModalShowing(false);
            }}
            overlay={{ styles: { root: { background: 'rgba(0,0,0,0.9)' } } }}
          >
            <DomainPermissions
              appName={'app'}
              onTroubleshootingClick={
                onPermissionsTroubleshootingClick
                  ? () => {
                      onPermissionsTroubleshootingClick(permissionsState);
                    }
                  : undefined
              }
            />
          </Modal>
        )
      }

      {
        /* @conditional-compile-remove(call-readiness) */
        mobileView && isDrawerShowing && callReadinessOptedIn && (
          <_DrawerSurface onLightDismiss={onLightDismissTriggered} styles={drawerContainerStyles(DRAWER_HIGH_Z_BAND)}>
            <DomainPermissions
              appName={'app'}
              onTroubleshootingClick={
                onPermissionsTroubleshootingClick
                  ? () => {
                      onPermissionsTroubleshootingClick(permissionsState);
                    }
                  : undefined
              }
              onAllowAccessClick={async () => {
                await adapter.askDevicePermission({ video: true, audio: true });
                adapter.queryCameras();
                adapter.queryMicrophones();
                adapter.querySpeakers();
                setIsDrawerShowing(false);
              }}
            />
          </_DrawerSurface>
        )
      }
      <Stack
        grow
        horizontal={!mobileWithPreview}
        horizontalAlign={mobileWithPreview ? 'stretch' : 'center'}
        verticalAlign="center"
        tokens={mobileWithPreview ? configurationStackTokensMobile : configurationStackTokensDesktop}
      >
        {mobileWithPreview && (
          <Stack.Item>
            {title}
            {callDescription}
          </Stack.Item>
        )}
        {localPreviewTrampoline(
          mobileWithPreview,
          /* @conditional-compile-remove(rooms) */ !rolePermissions.cameraButton
        )}
        <Stack className={mobileView ? undefined : selectionContainerStyle}>
          {!mobileWithPreview && (
            <>
              <Stack.Item styles={callDetailsContainerStylesDesktop}>
                {title}
                {callDescription}
              </Stack.Item>
              <LocalDeviceSettings
                {...options}
                {...localDeviceSettingsHandlers}
                cameraPermissionGranted={cameraPermissionGranted}
                microphonePermissionGranted={microphonePermissionGranted}
                /* @conditional-compile-remove(call-readiness) */
                callReadinessOptedIn={callReadinessOptedIn}
                /* @conditional-compile-remove(call-readiness) */
                onClickEnableDevicePermission={() => {
                  setIsModalShowing(true);
                }}
              />
            </>
          )}
          <Stack
            styles={mobileWithPreview ? startCallButtonContainerStyleMobile : startCallButtonContainerStyleDesktop}
          >
            <StartCallButton
              className={mobileWithPreview ? startCallButtonStyleMobile : undefined}
              onClick={startCallHandler}
              disabled={disableStartCallButton}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const localPreviewTrampoline = (mobileView: boolean, doNotShow?: boolean): JSX.Element | undefined => {
  /* @conditional-compile-remove(rooms) */
  if (doNotShow) {
    return undefined;
  }
  return <LocalPreview mobileView={mobileView} showDevicesButton={mobileView} />;
};
