module.exports = {
  root: true,
  extends: ['@react-native'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: true,
        bracketSameLine: false,
      },
    ],
  },
};