// const path = require('path');
const { compose, baseConfig, withRTL } = require('@moxy/jest-config');

module.exports = compose([
    baseConfig,
    withRTL,
    (config) => {
        config.collectCoverage = false;
        //   const { coveragePathIgnorePatterns = [] } = config;

        //   config.coveragePathIgnorePatterns = [
        //       ...coveragePathIgnorePatterns,
        //       path.resolve(__dirname, 'src/polyfill.js'),
        //       path.resolve(__dirname, 'src/polyfill.browser.js'),
        //       path.resolve(__dirname, 'src/plugin/NextIntlWebpackPlugin.js'),
        //   ];

        return config;
    },
]);
