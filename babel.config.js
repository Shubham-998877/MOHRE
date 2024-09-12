module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        alias: {
          '@mohrecustomer/assets': './src/assets',
          '@mohrecustomer/components': './src/components',
          '@mohrecustomer/features': './src/features',
          '@mohrecustomer/hooks': './src/hooks',
          '@mohrecustomer/utils': './src/utils',
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.ttf'],
      },
    ],
  ],
};

