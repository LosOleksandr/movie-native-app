import { vars } from 'nativewind'

export const themes = {
    light: vars({
        '--color-primary-default': '217.2 32.6% 17.5%',
        '--color-primary-foreground': '210 40% 96.1%',
        '--color-secondary-default': '240 5.2% 33.9%',
        '--color-secondary-foreground': '240 4.9% 83.9%',
        '--color-accent-default': '43.3 96.4% 56.3%',
        '--color-accent-foreground': '48 96.6% 76.7%',
        '--color-border': '220.9 39.3% 11%',
        '--color-danger': '0 84.2% 60.2%',
        '--color-success': '142.1 70.6% 45.3%',
        '--color-muted': '217.9 10.6% 64.9%',
        '--color-light': '210 40% 96.1%',
        '--color-dark': '217.2 32.6% 17.5%',
    }),

    dark: vars({
        '--color-primary-default': '210 40% 96.1%',
        '--color-primary-foreground': '217.2 32.6% 17.5%',
        '--color-secondary-default': '240 4.9% 83.9%',
        '--color-secondary-foreground': '240 5.2% 33.9%',
        '--color-accent-default': '48 96.6% 76.7%',
        '--color-accent-foreground': '43.3 96.4% 56.3%',
        '--color-border': '217.9 10.6% 64.9%',
        '--color-danger': '0 84.2% 60.2%',
        '--color-success': '142.1 70.6% 45.3%',
        '--color-muted': '217.9 10.6% 64.9%',
        '--color-light': '210 40% 96.1%',
        '--color-dark': '217.2 32.6% 17.5%',
    }),
}

export const reanimatedColors = {
    light: {
        primary: {
            from: 'hsl(217.2 32.6% 17.5%)',
            to: 'hsl(217.2 42% 27.5%)',
        },
        secondary: {
            from: 'hsl(240 5.2% 33.9%)',
            to: 'hsl(240 5.2% 43.9%)',
        },
        accent: {
            from: 'hsl(43.3 96.4% 56.3%)',
            to: 'hsl(43.3 96.4% 66.3%)',
        },
    },
    dark: {
        primary: {
            from: 'hsl(210 40% 96.1%)',
            to: 'hsl(210 40% 90.1%)',
        },
        secondary: {
            from: 'hsl(240 4.9% 83.9%)',
            to: 'hsl(240 4.9% 73.9%)',
        },
        accent: {
            from: 'hsl(48 96.6% 76.7%)',
            to: 'hsl(48 96.6% 66.7%)',
        },
    },
}
