import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys';
import sortKeysFixPlugin from 'eslint-plugin-sort-keys-fix';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import js from '@eslint/js';
import pathCheckerUlbiExample from 'eslint-plugin-path-checher-ulbi-example';
import i18NextPlugin from 'eslint-plugin-i18next';

/** @type {import('eslint').Linter.Config[]}*/
const eslintConfig = [
  js.configs.recommended,
  i18NextPlugin.configs['flat/recommended'],
  {
    ignores: [
      'config/**/*',
      'dist/**/*',
      'scripts/**/*',
      'eslint.config.mjs',
      'node_modules/**/*',
      '.next/**/*',
      'build/**/*',
      'build-esbuild/**/*',
      'dist/**/*',
      '.loki/**/*',
      'node_modules/**/*',
      '.git/**/*',
      '.idea/**/*',
      '.vscode/**/*',
      '.github/**/*',
      'storybook-static/**/*',
      'reports/**/*',
      'coverage/**/*',
      'json-server/**/*',
    ],
  },
  {
    files: ['src/**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        IS_DEV: 'readonly',
        PUBLIC_PATH: 'readonly',
        BASE_NAME: 'readonly',
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        allowReserved: true,
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: eslintPluginPrettier,
      'sort-destructure-keys': sortDestructureKeysPlugin,
      'sort-keys-fix': sortKeysFixPlugin,
      'unused-imports': unusedImportsPlugin,
      '@typescript-eslint': typescriptEslintPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
      'path-checher-ulbi-example': pathCheckerUlbiExample,
    },
    settings: {
      react: { version: 'detect' },
      'import/resolver': { node: { paths: ['src'] } },
    },
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          importNames: ['useSelector', 'useDispatch'],
          message:
            'Use typed hooks `useAppDispatch` and `useAppSelector` instead.',
          name: 'react-redux',
        },
        {
          importNames: [
            'redirect',
            'usePathname',
            'useRouter',
            'permanentRedirect',
          ],
          message:
            'Use typed functions and hooks from the file "@/shared/lib/router/navigation".',
          name: 'next/navigation',
        },
        {
          importNames: ['useAppRouter'],
          message:
            'Use typed functions and hooks from the file "@/src/shared/lib/hooks/useAppNavigation/useAppNavigation".',
          name: '@/shared/lib/router/navigation',
        },
        {
          importNames: ['Link'],
          message:
            'Use typed component <Links /> from the file "src/shared/ui/Links/Links".',
          name: 'next/link',
        },
        {
          importNames: ['Image'],
          message:
            'Use typed component <AppImage /> from the file "src/shared/ui/AppImage/AppImage".',
          name: 'next/image',
        },
      ],
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      camelcase: ['warn', { properties: 'always' }],
      'comma-dangle': ['warn', 'only-multiline'],
      'consistent-return': 'off',
      curly: ['warn', 'multi'],
      // чтоб ругался на необработанные слова + отключаем плагин для атрибутов
      'i18next/no-literal-string': [
        'error',
        { ignoreAttribute: ['data-testid', 'to'], markupOnly: true },
      ],
      // отключаем, чтоб не ругался на необработанные слова
      // 'i18next/no-literal-string': 0,
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': 'off',
      'import/order': [
        'warn',
        {
          alphabetize: { order: 'asc' },
          groups: [
            'builtin',
            'external',
            'index',
            'type',
            'sibling',
            'parent',
            'internal',
            'object',
          ],
          pathGroups: [
            { group: 'internal', pattern: '@/**', position: 'after' },
          ],
        },
      ],
      'import/prefer-default-export': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
      'no-console': 'off',
      'no-debugger': 'warn',
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-restricted-imports': 'off',
      'no-shadow': 'off',
      'no-undef': 'off',
      'no-underscore-dangle': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'nonblock-statement-body-position': 'off',
      'object-curly-newline': 'off',
      'operator-linebreak': 'off',
      'path-checher-ulbi-example/layer-imports': [
        'warn',
        {
          alias: '@',
          ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
          typeProject: 'next',
        },
      ],
      'path-checher-ulbi-example/path-checker': [
        'warn',
        { alias: '@', typeProject: 'next' },
      ],
      'path-checher-ulbi-example/public-api-imports': [
        'warn',
        {
          alias: '@',
          testFilesPatterns: [
            '**/*.test.*',
            '**/*.stories.*',
            '**/StoreDecorator.tsx',
          ],
          typeProject: 'next',
        },
      ],
      'prettier/prettier': [
        'error',
        { endOfLine: 'auto' },
        { usePrettierrc: true },
      ],
      quotes: [2, 'single', { avoidEscape: true }],
      radix: 'off',
      'react/display-name': 'off',
      'react/function-component-definition': 'off',
      'react/jsx-child-element-spacing': 'off',
      'react/jsx-curly-brace-presence': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-filename-extension': [
        2,
        { extensions: ['.js', '.jsx', '.tsx', '.ts'] },
      ],
      'react/jsx-newline': [1, { allowMultilines: false, prevent: true }],
      'react/jsx-no-leaked-render': [
        1,
        { validStrategies: ['coerce', 'ternary'] },
      ],
      'react/jsx-no-literals': [
        1,
        { ignoreProps: true, noAttributeStrings: true, noStrings: false },
      ],
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-sort-props': [
        1,
        {
          callbacksLast: true,
          ignoreCase: true,
          multiline: 'last',
          noSortAlphabetically: true,
          reservedFirst: true,
          shorthandFirst: true,
          shorthandLast: true,
        },
      ],
      'react/no-array-index-key': 'off',
      'react/no-typos': 'warn',
      // позволяет создавать компоненты перед рендером родительского (где стейты)
      'react/no-unstable-nested-components': 'warn',
      'react/no-unused-prop-types': 'warn',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/require-default-props': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'sort-destructure-keys/sort-destructure-keys': [
        2,
        { caseSensitive: false },
      ],
      // сортировка ключей объекта по алфавиту.
      'sort-keys-fix/sort-keys-fix': [
        'warn',
        'asc',
        { caseSensitive: true, natural: true },
      ],
      'unused-imports/no-unused-imports': 'warn',
    },
  },
];

export default eslintConfig;
