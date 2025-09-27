import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{js,jsx}'],
		extends: [
			js.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module'
			}
		},
		rules: {
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
			semi: ['error', 'always', { omitLastInOneLineBlock: false }],
			'comma-dangle': ['error', 'never'],
			quotes: ['error', 'single'],
			'indent': ['error', 'tab'] // или 4, в зависимости от вашего стиля
			// 'no-trailing-spaces': 'error',
			// 'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
			// 'eol-last': 'error',
			// 'no-mixed-spaces-and-tabs': 'error',
			// 'object-curly-spacing': ['error', 'always'],
			// 'array-bracket-spacing': ['error', 'never'],
			// 'comma-spacing': ['error', { before: false, after: true }],
			// 'keyword-spacing': 'error',
			// 'space-before-blocks': 'error',
			// 'space-infix-ops': 'error',
			// 'padded-blocks': ['error', 'never'],
			// 'lines-between-class-members': ['error', 'always'],
			// 'padding-line-between-statements': [
			//   'error',
			//   { blankLine: 'always', prev: '*', next: 'return' },
			//   { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			//   { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
			// ],
			// 'no-extra-parens': 'error',
			// 'function-paren-newline': ['error', 'consistent'],
			// 'function-call-argument-newline': ['error', 'consistent']
		}
	}
]);
