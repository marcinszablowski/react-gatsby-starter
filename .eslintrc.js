module.exports = {
  // Make sure eslint picks up the config at the root of the directory
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', // Allows using import/export statements
    ecmaFeatures: {
      jsx: true, // Enable JSX since we're using React
    },
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  env: {
    // Enables browser globals like window and document
    browser: true,
    // Enables require() and define() as global variables as per the amd spec.
    amd: true,
    // Enables Node.js global variables and Node.js scoping.
    node: true,
    es6: true,
  },
  extends: [
    'typescript',
    'typescript/react',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:typescript-sort-keys/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['simple-import-sort', '@typescript-eslint', 'typescript-sort-keys'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
      // Use our .prettierrc file as source
      {
        usePrettierrc: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'max-lines': ['error', 350],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'react/destructuring-assignment': ['error', 'always'],
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/no-array-index-key': 'off',
    'react/self-closing-comp': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-useless-escape': 'error',
    'react/display-name': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/jsx-no-target-blank': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'no-case-declarations': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'max-lines': ['error', 700],
      },
    },
    {
      files: ['**/*.d.ts'],
      rules: {
        'max-lines': 'off',
      },
    },
    {
      files: ['**/*.js'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
    {
      files: ['**/*.generator.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: ['theme.ts'],
      rules: {
        'typescript-sort-keys/interface': 'off',
      },
    },
  ],
};
