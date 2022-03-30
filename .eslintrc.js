module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  plugins: ['prettier', 'react', 'react-hooks'],
  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  settings: {
    importParsers: {
      espree: ['.js', '.jsx'],
    },
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'no-console': 0,
    'prettier/prettier': 'error',
    'func-names': 'off',
    'no-unused-vars': ['warn', { varsIgnorePattern: 'React' }],
    'import/no-duplicates': 'warn',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'object-shorthand': 'off',
    'no-underscore-dangle': 'off',
  },
  root: true,
}
