// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import React, { useRef, useState } from 'react';
import { Link, MessageBar, MessageBarType } from '@fluentui/react';
import { ComplianceBannerVariant, ComplianceState, computeVariant } from './Utils';

/**
 * Subset of `CallCompositeStrings` needed by the ComplianceBanner component.
 * @internal
 */
export interface _ComplianceBannerStrings {
  close: string;
  complianceBannerNowOnlyRecording: string;
  complianceBannerNowOnlyTranscription: string;
  complianceBannerRecordingAndTranscriptionSaved: string;
  complianceBannerRecordingAndTranscriptionStarted: string;
  complianceBannerRecordingAndTranscriptionStopped: string;
  complianceBannerRecordingSaving: string;
  complianceBannerRecordingStarted: string;
  complianceBannerRecordingStopped: string;
  complianceBannerTranscriptionConsent: string;
  complianceBannerTranscriptionSaving: string;
  complianceBannerTranscriptionStarted: string;
  complianceBannerTranscriptionStopped: string;
  learnMore: string;
  privacyPolicy: string;
}

/**
 * @internal
 */
export type _ComplianceBannerProps = {
  callTranscribeState?: boolean;
  callRecordState?: boolean;
  strings: _ComplianceBannerStrings;
};

// latestBooleanState so we can compare with props.callRecordState and props.callTranscribeState easily
// latestStringState is on, off, stopped state generated by function determineStates using previous and current state values, this is used for computeVariants later
type CachedComplianceBannerProps = {
  latestBooleanState: {
    callTranscribeState?: boolean;
    callRecordState?: boolean;
  };
  latestStringState: {
    callTranscribeState: ComplianceState;
    callRecordState: ComplianceState;
  };
  // Timestamp for the last time cached state was updated.
  // Represented as milliseconds since epoch (i.e., the value returned by Date.now()).
  lastUpdated: number;
};

const BANNER_OVERWRITE_DELAY_MS = 3000;

/**
 * A component that displays banners to notify the user when call recording and
 * transcription is enabled or disabled in a call.
 *
 * This component implements a state machine that tracks the changes to call
 * recording and transcription state and shows the corresponding message.
 *
 * @internal
 */
export const _ComplianceBanner = (props: _ComplianceBannerProps): JSX.Element => {
  const cachedProps = useRef<CachedComplianceBannerProps>({
    latestBooleanState: {
      callTranscribeState: false,
      callRecordState: false
    },
    latestStringState: {
      callTranscribeState: 'off',
      callRecordState: 'off'
    },
    lastUpdated: Date.now()
  });

  // Only update cached props and variant if there is _some_ change in the latest props.
  // This ensures that state machine is only updated if there is an actual change in the props.
  const shouldUpdatedCached =
    props.callRecordState !== cachedProps.current.latestBooleanState.callRecordState ||
    props.callTranscribeState !== cachedProps.current.latestBooleanState.callTranscribeState;

  // The following three operations must be performed in this exact order:

  // [1]: Update cached state to transition the state machine.
  if (shouldUpdatedCached) {
    cachedProps.current = {
      latestBooleanState: props,
      latestStringState: {
        callRecordState: determineStates(cachedProps.current.latestStringState.callRecordState, props.callRecordState),
        callTranscribeState: determineStates(
          cachedProps.current.latestStringState.callTranscribeState,
          props.callTranscribeState
        )
      },
      lastUpdated: Date.now()
    };
  }

  // [2]: Compute the variant, using the transitioned state machine.
  const variant = computeVariant(
    cachedProps.current.latestStringState.callRecordState,
    cachedProps.current.latestStringState.callTranscribeState
  );

  // [3]: Transition the state machine again to deal with some end-states.
  if (
    shouldUpdatedCached &&
    cachedProps.current.latestStringState.callRecordState === 'stopped' &&
    cachedProps.current.latestStringState.callTranscribeState === 'stopped'
  ) {
    // When both states are stopped, after displaying message "RECORDING_AND_TRANSCRIPTION_STOPPED", change both states to off (going back to the default state).
    cachedProps.current.latestStringState.callRecordState = 'off';
    cachedProps.current.latestStringState.callTranscribeState = 'off';
  }

  return (
    <DelayedUpdateBanner
      variant={{
        variant,
        lastUpdated: cachedProps.current.lastUpdated
      }}
      strings={props.strings}
      onDismiss={() => {
        if (cachedProps.current.latestStringState.callRecordState === 'stopped') {
          cachedProps.current.latestStringState.callRecordState = 'off';
        }
        if (cachedProps.current.latestStringState.callTranscribeState === 'stopped') {
          cachedProps.current.latestStringState.callTranscribeState = 'off';
        }
      }}
    />
  );
};

function determineStates(previous: ComplianceState, current: boolean | undefined): ComplianceState {
  // if current state is on, then return on
  if (current) {
    return 'on';
  }
  // if current state is off
  else {
    // if previous state is on and current state is off, return stopped (on -> off)
    if (previous === 'on') {
      return 'stopped';
    }
    // otherwise remain previous state unchanged
    else {
      return previous;
    }
  }
}

interface TimestampedVariant {
  variant: ComplianceBannerVariant;
  // Milliseconds since epoch (i.e., return value of Date.now()).
  lastUpdated: number;
}

/**
 * Shows a {@link BannerMessage} in a {@link MessageBar} tracking `variant` internally.
 *
 * This component delays and combines frequent updates to `variant` such that:
 * - Updates that happen within {@link BANNER_OVERWRITE_DELAY_MS} are delayed.
 * - Once {@link BANNER_OVERWRITE_DELAY_MS} has passed since the last update, the _latest_ pending update is shown.
 *
 * This ensures that there is enough time for the user to see a banner message before it is overwritten.
 * In case of multiple delayed messages, the user always sees the final message as it reflects the final state
 * of recording and transcription.
 *
 * @private
 */
function DelayedUpdateBanner(props: {
  variant: TimestampedVariant;
  onDismiss: () => void;
  strings: _ComplianceBannerStrings;
}): JSX.Element {
  const { variant, lastUpdated: variantLastUpdated } = props.variant;

  // Tracks the variant that is currently visible in the UI.
  const [visible, setVisible] = useState<TimestampedVariant>({
    variant,
    lastUpdated: Date.now()
  });
  const pendingUpdateHandle = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (variant !== visible.variant && variantLastUpdated > visible.lastUpdated) {
    // Always clear pending updates.
    // We'll either update now, or schedule an update for later.
    if (pendingUpdateHandle.current) {
      clearTimeout(pendingUpdateHandle.current);
    }

    const now = Date.now();
    const timeToNextUpdate = BANNER_OVERWRITE_DELAY_MS - (now - visible.lastUpdated);
    if (variant === 'NO_STATE' || timeToNextUpdate <= 0) {
      setVisible({
        variant,
        lastUpdated: now
      });
    } else {
      pendingUpdateHandle.current = setTimeout(() => {
        // Set the actual update time, not the computed time when the update should happen.
        // The actual update might be later than we planned.
        setVisible({
          variant,
          lastUpdated: Date.now()
        });
      }, timeToNextUpdate);
    }
  }

  if (visible.variant === 'NO_STATE') {
    return <></>;
  }

  return (
    <MessageBar
      messageBarType={MessageBarType.warning}
      onDismiss={() => {
        // when closing the banner, change variant to nostate and change stopped state to off state.
        // Reason: on banner close, going back to the default state.
        setVisible({
          variant: 'NO_STATE',
          lastUpdated: Date.now()
        });
        props.onDismiss();
      }}
      dismissButtonAriaLabel={props.strings.close}
    >
      <BannerMessage variant={visible.variant} strings={props.strings} />
    </MessageBar>
  );
}

function BannerMessage(props: { variant: ComplianceBannerVariant; strings: _ComplianceBannerStrings }): JSX.Element {
  const { variant, strings } = props;
  switch (variant) {
    case 'TRANSCRIPTION_STOPPED_STILL_RECORDING':
      return (
        <>
          <b>{strings.complianceBannerTranscriptionStopped}</b>
          {` ${strings.complianceBannerNowOnlyRecording}`}
          <PrivacyPolicy linkText={strings.privacyPolicy} />
        </>
      );
    case 'RECORDING_STOPPED_STILL_TRANSCRIBING':
      return (
        <>
          <b>{strings.complianceBannerRecordingStopped}</b>
          {` ${strings.complianceBannerNowOnlyTranscription}`}
          <PrivacyPolicy linkText={strings.privacyPolicy} />
        </>
      );
    case 'RECORDING_AND_TRANSCRIPTION_STOPPED':
      return (
        <>
          <b>{strings.complianceBannerRecordingAndTranscriptionSaved}</b>
          {` ${strings.complianceBannerRecordingAndTranscriptionStopped}`}
          <LearnMore linkText={strings.learnMore} />
        </>
      );
    case 'RECORDING_AND_TRANSCRIPTION_STARTED':
      return (
        <>
          <b>{strings.complianceBannerRecordingAndTranscriptionStarted}</b>
          {` ${strings.complianceBannerTranscriptionConsent}`}
          <PrivacyPolicy linkText={strings.privacyPolicy} />
        </>
      );
    case 'TRANSCRIPTION_STARTED':
      return (
        <>
          <b>{strings.complianceBannerTranscriptionStarted}</b>
          {` ${strings.complianceBannerTranscriptionConsent}`}
          <PrivacyPolicy linkText={strings.privacyPolicy} />
        </>
      );
    case 'RECORDING_STOPPED':
      return (
        <>
          <b>{strings.complianceBannerRecordingSaving}</b>
          {` ${strings.complianceBannerRecordingStopped}`}
          <LearnMore linkText={strings.learnMore} />
        </>
      );
    case 'RECORDING_STARTED':
      return (
        <>
          <b>{strings.complianceBannerRecordingStarted}</b>
          {` ${strings.complianceBannerTranscriptionConsent}`}
          <PrivacyPolicy linkText={strings.privacyPolicy} />
        </>
      );
    case 'TRANSCRIPTION_STOPPED':
      return (
        <>
          <b>{strings.complianceBannerTranscriptionSaving}</b>
          {` ${strings.complianceBannerTranscriptionStopped}`}
          <LearnMore linkText={strings.learnMore} />
        </>
      );
  }
  return <></>;
}

function PrivacyPolicy(props: { linkText: string }): JSX.Element {
  return (
    <Link href="https://privacy.microsoft.com/privacystatement#mainnoticetoendusersmodule" target="_blank" underline>
      {props.linkText}
    </Link>
  );
}

function LearnMore(props: { linkText: string }): JSX.Element {
  return (
    <Link
      href="https://support.microsoft.com/office/record-a-meeting-in-teams-34dfbe7f-b07d-4a27-b4c6-de62f1348c24"
      target="_blank"
      underline
    >
      {props.linkText}
    </Link>
  );
}
