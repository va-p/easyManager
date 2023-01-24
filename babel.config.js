module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: [
            '.ts',
            '.tsx',
            '.js',
            '.json'
          ],
          alias: {
            '@components': './src/components',
            '@themes': './src/global/themes',
            '@configs': './src/configs',
            '@screens': './src/screens',
            '@routes': './src/routes',
            '@assets': './src/assets',
            '@slices': './src/slices',
            '@api': './src/api'
          }
        }
      ],
      'react-native-reanimated/plugin',
    ],
  };
};
