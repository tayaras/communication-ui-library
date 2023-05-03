// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TransferCallFeature, TransferRequestedEventArgs } from '@azure/communication-calling';
import { CallContext } from './CallContext';

/**
 * @private
 */
export class TransferCallSubscriber {
  private _context: CallContext;
  private _transferCall: TransferCallFeature;

  constructor(context: CallContext, transferCall: TransferCallFeature) {
    this._context = context;
    this._transferCall = transferCall;

    this.subscribe();
  }

  private subscribe = (): void => {
    this._transferCall.on('transferRequested', this.transferRequested);
  };

  public unsubscribe = (): void => {
    this._transferCall.off('transferRequested', this.transferRequested);
  };

  private transferRequested = (args: TransferRequestedEventArgs): void => {
    console.log('DEBUG BEFORE TRANSFER ACCEPT');
    const call = args.accept();
    this._context.setTransferTargetCallId(call.id);
    if (call) {
      console.log('DEBUG TRANSFER CALL OBTAINED: ', call.id);
    }
  };
}
