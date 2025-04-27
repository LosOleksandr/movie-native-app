/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './hooks/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--color-primary-default)',
                    foreground: 'var(--color-primary-foreground)',
                    active: 'var(--color-primary-active)',
                    foreground_active: 'var(--color-primary-foreground-active)',
                },
                secondary: {
                    DEFAULT: 'var(--color-secondary-default)',
                    foreground: 'var(--color-secondary-foreground)',
                    active: 'var(--color-secondary-foreground)',
                    foreground_active: 'var(--color-secondary-active)',
                },
                accent: {
                    DEFAULT: 'var(--color-accent-default)',
                    foreground: 'var(--color-accent-default)',
                    active: 'var(--color-accent-active)',
                    foreground_active: 'var(--color-accent-foreground-active)',
                },
                danger: {
                    DEFAULT: 'var(--color-danger-default)',
                    active: 'var(--color-danger-active)',
                },
                success: {
                    DEFAULT: 'var(--color-success-default)',
                    active: 'var(--color-success-active)',
                },
                dark: {
                    DEFAULT: 'var(--color-dark-default)',
                    active: 'var(--color-dark-active)',
                },
                light: {
                    DEFAULT: 'var(--color-light-default)',
                    active: 'var(--color-light-active)',
                },
                muted: {
                    DEFAULT: 'var(--color-muted-default)',
                    active: 'var(--color-muted-active)',
                },
            },
        },
    },
    plugins: [],
}
