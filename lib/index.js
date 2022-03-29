/*eslint-env node */
'use strict';

module.exports = {
    env: {
        es2022: true
    },
    plugins: ['new-with-error', 'unicorn'],
    extends: ['eslint:recommended', 'plugin:@hapi/recommended', 'plugin:unicorn/recommended', 'plugin:jsdoc/recommended'],
    parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2022
    },
    reportUnusedDisableDirectives: true,
    settings: {
        jsdoc: {
            mode: 'typescript',
            preferredTypes: {
                'object': 'Object',
                'number': 'Number',
                'string': 'String',
                'boolean': 'Boolean',
                'array': 'Array'
            }
        }
    },
    rules: {
        'array-bracket-spacing': 'error',
        'array-callback-return': [
            'error',
            {
				'allowImplicit': true
            }
        ],
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
        // Deprecated in favor of node/callback-return
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
        'no-lonely-if': 'error',

        // Jsdoc
        'jsdoc/check-alignment': 'error', // Recommended
        'jsdoc/check-examples': 'error',
        'jsdoc/check-indentation': 'error',
        'jsdoc/check-param-names': 'error', // Recommended
        'jsdoc/check-property-names': 'error',
        'jsdoc/check-syntax': 'error',
        'jsdoc/check-tag-names': 'error', // Recommended
        'jsdoc/check-types': 'error', // Recommended
        'jsdoc/implements-on-classes': 'error', // Recommended
        'jsdoc/match-description': 'off',
        'jsdoc/newline-after-description': 'error', // Recommended
        'jsdoc/no-types': 'off',
        'jsdoc/no-undefined-types': 'error', // Recommended
        'jsdoc/require-description': 'off',
        'jsdoc/require-description-complete-sentence': 'off',
        'jsdoc/require-example': 'off',
        'jsdoc/require-hyphen-before-param-description': 'off',
        'jsdoc/require-jsdoc': 'off', // Recommended
        'jsdoc/require-param': 'error', // Recommended
        'jsdoc/require-param-description': 'off', // Recommended
        'jsdoc/require-param-name': 'error', // Recommended
        'jsdoc/require-param-type': 'error', // Recommended
        'jsdoc/require-property-description': 'off',
        'jsdoc/require-returns': 'error', // Recommended
        'jsdoc/require-returns-check': 'error', // Recommended
        'jsdoc/require-returns-description': 'off', // Recommended
        'jsdoc/require-returns-type': 'error', // Recommended
        'jsdoc/tag-lines': 'off',
        'jsdoc/valid-types': 'error', // Recommended

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
        'no-import-assign': 'error',
        'no-loop-func': 'error',
        'no-misleading-character-class': 'error',
        'no-mixed-operators': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'off',
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
        'no-negated-condition': 'error',
        'no-new-object': 'error',
        'no-new-wrappers': 'error',
        'no-prototype-builtins': 'error',
        'no-redeclare': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'off', // based on https://twitter.com/jasnell/status/1333074325163835394
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
        'prefer-object-has-own': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'error',
        'prefer-template': 'error',
        'require-atomic-updates': 'off', // see https://github.com/eslint/eslint/issues/11899
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

        // Unicorn
        'unicorn/better-regex': 'off', // Too dangerous, good as a warning maybe
        'unicorn/catch-error-name': ['error', { name: 'err' }],
        'unicorn/consistent-destructuring': 'off',
        'unicorn/expiring-todo-comments': [
            'error',
            {
                allowWarningComments: false, // still allow 'todo'`s
                terms: ['fixme', 'xxx'] // don't trigger on TODO
            }
        ],
        'unicorn/filename-case': 'off',
        'unicorn/import-style': 'off',
        'unicorn/no-array-for-each': 'off',
        'unicorn/no-array-callback-reference': 'off',
        'unicorn/no-array-push-push': 'error',
        'unicorn/no-document-cookie': 'error',
        'unicorn/no-invalid-remove-event-listener': 'error',
        'unicorn/no-lonely-if': 'off',
        'unicorn/no-null': 'off',
        'unicorn/no-this-assignment': 'error',
        'unicorn/no-unsafe-regex': 'error',
        'unicorn/no-unused-properties': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/numeric-separators-style': [
            'error',
            {
                onlyIfContainsSeparator: true
            }
        ],
        'unicorn/prefer-array-flat': 'error',
        'unicorn/prefer-array-flat-map': 'error',
        'unicorn/prefer-array-index-of': 'error',
        'unicorn/prefer-module': 'off',
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/prefer-number-properties': 'error',
        'unicorn/prefer-object-from-entries': 'error',
        'unicorn/prefer-prototype-methods': 'error',
        'unicorn/prefer-switch': 'off',
        'unicorn/prefer-ternary': 'off',
        'unicorn/no-useless-length-check': 'error',
        'unicorn/no-useless-spread': 'error',
        'unicorn/prefer-regexp-test': 'error',
        'unicorn/prevent-abbreviations': 'off',
        'unicorn/regex-shorthand': 'off', // Doesn't properly optimize https://github.com/sindresorhus/eslint-plugin-unicorn/issues/472
        'unicorn/require-array-join-separator': 'error',
        'unicorn/require-number-to-fixed-digits-argument': 'error',
        'unicorn/template-indent': 'off',

        'valid-typeof': ['error', { 'requireStringLiterals': true }],
        'yoda': [
            'error',
            'never'
        ]
    }
};
