module.exports = {
  stories: ['../src/**/*.stories.jsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-links',
  ],
  webpackFinal: (config) => {
    config.resolve.alias['@auth0/auth0-react'] = require.resolve('../src/__mocks__/auth0.js');
    return config;
  },
};
