// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

var path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'tsc-out/index.js'),
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module'
    }
  },
  externals: {
    react: 'react',
    'react-dom': 'reactDOM',
    'react-router': 'ReactRouter'
  },
  experiments: {
    outputModule: true
  }
};
