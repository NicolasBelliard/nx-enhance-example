const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const { join } = require('path');

// Nx composable plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withReact(),
  (config, { options, context }) => {
    // Update the webpack configuration as needed here.

    config.output = {
      path: join(__dirname, '../../dist/apps/nx-enhance'),
    }
    config.devServer = {
      port: 4200,
    }
    return config;
  }
);
