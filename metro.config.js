const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

config.resolver.blockList = [/(.*.spec.tsx?)$/];

module.exports = withNativeWind(config, {
  input: './src/assets/styles/global.css',
});
