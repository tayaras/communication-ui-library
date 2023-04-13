// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { SwitchableFluentThemeProvider } from './app/theming/SwitchableFluentThemeProvider';

const elem = document.getElementById('root');
if (elem) {
  const root = ReactDOM.createRoot(elem);
  root.render(
    <SwitchableFluentThemeProvider scopeId="SampleChatApp">
      <div className="wrapper">
        <App />
      </div>
    </SwitchableFluentThemeProvider>
  );
}
