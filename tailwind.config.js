/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}', './hooks/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'hsl(var(--color-primary-default))',
                    foreground: 'hsl(var(--color-primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--color-secondary-default))',
                    foreground: 'hsl(var(--color-secondary-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--color-accent-default))',
                    foreground: 'hsl(var(--color-accent-foreground))',
                },
                border: 'hsl(var(--color-border))',
                danger: 'hsl(var(--color-danger))',
                success: 'hsl(var(--color-success))',
                muted: 'hsl(var(--color-muted))',
                light: 'hsl(var(--color-light))',
                dark: 'hsl(var(--color-dark))',
            },
        },
    },
    plugins: [],
}
