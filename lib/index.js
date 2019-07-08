/*eslint-env node */
'use strict';

module.exports = {
    env: {
        es6: true
    },
    plugins: ['new-with-error', 'unicorn'],
    extends: ['eslint:recommended', 'eslint-config-hapi', 'plugin:unicorn/recommended'],
    parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2018
    },
    rules: {
        'array-bracket-spacing': 'error',
        'array-callback-return': 'error',
        'arrow-parens': 'error',
        'arrow-spacing': 'error',
        'brace-style': [
            'error',
            'stroustrup'
        ],
        'camelcase': [
            'error',
            {
                'properties': 'never'
            }
        ],
        'callback-return': [
            'error',
            [
                'callback',
                'next',
                'done'
            ]
        ],
        'comma-dangle': 'error',
        'capitalized-comments': [
            'error',
            'always',
            {
                ignoreInlineComments: true,
                ignoreConsecutiveComments: true
            }
        ],
        'class-methods-use-this': 'error',
        'curly': [
            'error',
            'all'
        ],
        'dot-notation': 'error',
        'eol-last': 'error',
        'eqeqeq': 'error',
        'for-direction': 'error',
        'func-name-matching': [
            'error',
            {
                'includeCommonJSModuleExports': true,
                considerPropertyDescriptor: true
            }
        ],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'MemberExpression': 1
            }
        ],
        'keyword-spacing': [
            'error',
            {
                'before': true,
                'after': true
            }
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'max-nested-callbacks': ['error', 7],
        'new-parens': 'error',
        'new-with-error/new-with-error': 'error',
        'nonblock-statement-body-position': 'error',
        'no-array-constructor': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'error',
        'no-confusing-arrow': 'error',
        'no-console': 'error',
        'no-const-assign': 'error',
        'no-constant-condition': 'error',
        'no-else-return': 'off',
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extra-label': 'error',
        'no-ex-assign': 'error',
        'no-extend-native': 'error',
        'no-loop-func': 'error',
        'no-misleading-character-class': 'error',
        'no-mixed-operators': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'off',
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
        'no-negated-condition': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-redeclare': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-spaced-func': 'error',
        'no-sparse-arrays': 'error',
        'no-shadow': [
            'error',
            {
                'allow': [
                    'err',
                    'done',
                    'callback'
                ]
            }
        ],
        'no-template-curly-in-string': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-underscore-dangle': 'error',
        'no-unused-expressions': 'error',
        'no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'after-used'
            }
        ],
        'no-use-before-define': ['error', { functions: false, classes: false, variables: false }],
        'no-useless-catch': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'object-curly-spacing': [
            'error',
            'always'
        ],
        'object-curly-newline': 'off',
        'one-var-declaration-per-line': [
            'error',
            'always'
        ],
        'prefer-arrow-callback': 'error',
        'prefer-destructuring': 'off',
        'prefer-numeric-literals': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-template': 'error',
        'require-atomic-updates': 'error',
        'require-await': 'error',
        'require-unicode-regexp': 'off',
        'semi': [
            'error',
            'always'
        ],
        'semi-style': 'error',
        'semi-spacing': 'error',
        'strict': [
            'error',
            'global'
        ],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'always',
                'named': 'never'
            }
        ],
        'switch-colon-spacing': 'error',
        'template-tag-spacing': ['error', 'never'],
        'sort-vars': 'error',
        'space-infix-ops': 'error',
        'space-unary-ops': [
            'error',
            {
                'words': true,
                'nonwords': false
            }
        ],
        'quotes': [
            'error',
            'single'
        ],
        'unicorn/catch-error-name': ['error', { name: 'err' }],
        'unicorn/filename-case': 'off',
        'unicorn/no-fn-reference-in-iterator': 'off',
        'unicorn/no-unsafe-regex': 'error',
        'unicorn/no-unused-properties': 'error',
        'valid-typeof': ['error', { 'requireStringLiterals': true }],
        'yoda': [
            'error',
            'never'
        ]
    }
};
