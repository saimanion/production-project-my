module.exports = {
  stories: [
    '../../**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
    disableTelemetry: true, // Опционально, для отключения телеметрии
  },
  features: {
    webpack5: true, // Включает поддержку Webpack 5
  },

};
