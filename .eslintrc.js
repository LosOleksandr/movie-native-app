// .eslintrc.js
module.exports = {
    extends: ['expo', 'prettier'],
    ignorePatterns: ['/dist/*'],
    plugins: ['prettier', 'import'],
    rules: {
        'prettier/prettier': 'warn',
        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                    },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
                'newlines-between': 'always',
            },
        ],
        'import/first': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-duplicates': 'warn',
        'import/no-unresolved': 'warn',
        'import/no-unused-modules': 'warn',
        'import/no-anonymous-default-export': 'warn',

        'import/no-extraneous-dependencies': [
            'warn',
            {
                devDependencies: ['**/__tests__/**', '**/*.test.tsx', '**/*.test.ts'],
                optionalDependencies: false,
            },
        ],
    },
}
