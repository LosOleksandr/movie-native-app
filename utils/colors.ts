import { vars } from 'nativewind'
import * as twColors from 'tailwindcss/colors'

export const colors = {
    primary: {
        default: twColors.slate[700],
        foreground: twColors.slate[100],
        active: twColors.slate[500],
        foreground_active: twColors.slate[300],
    },
    secondary: {
        default: twColors.zinc[600],
        foreground: twColors.zinc[300],
        active: twColors.zinc[500],
        foreground_active: twColors.zinc[300],
    },
    accent: {
        default: twColors.amber[400],
        foreground: twColors.amber[400],
        active: twColors.amber[600],
        foreground_active: twColors.amber[300],
    },
    success: {
        default: twColors.green[500],
        active: twColors.green[400],
    },
    danger: {
        default: twColors.red[500],
        active: twColors.red[400],
    },
    muted: {
        default: twColors.neutral[400],
        foreground: twColors.neutral[200],
    },
}

export const themes = {
    light: vars({
        '--color-primary-default': colors.primary.default,
        '--color-primary-foreground': colors.primary.foreground,
        '--color-primary-active': colors.primary.active,
        '--color-primary-foreground-active': colors.primary.foreground_active,
        '--color-secondary-default': colors.secondary.default,
        '--color-secondary-foreground': colors.secondary.foreground,
        '--color-secondary-active': colors.primary.active,
        '--color-secondary-foreground-active': colors.primary.foreground_active,
        '--color-accent-default': colors.accent.default,
        '--color-accent-foreground': colors.accent.foreground,
        '--color-accent-active': colors.primary.active,
        '--color-accent-foreground-active': colors.primary.foreground_active,
        '--color-danger-default': colors.danger.default,
        '--color-danger-active': colors.primary.active,
        '--color-success-default': colors.success.default,
        '--color-success-active': colors.primary.active,
        '--color-dark-default': colors.primary.default,
        '--color-dark-active': colors.primary.active,
        '--color-light-default': colors.primary.foreground,
        '--color-light-active': colors.primary.foreground_active,
        '--color-muted-default': colors.muted.default,
        '--color-muted-foreground': colors.muted.foreground,
    }),

    dark: vars({
        '--color-primary-default': colors.primary.foreground,
        '--color-primary-foreground': colors.primary.default,
        '--color-primary-active': colors.primary.foreground_active,
        '--color-primary-foreground-active': colors.primary.active,
        '--color-secondary-default': colors.secondary.foreground,
        '--color-secondary-foreground': colors.secondary.default,
        '--color-secondary-active': colors.primary.foreground_active,
        '--color-secondary-foreground-active': colors.primary.active,
        '--color-accent-default': colors.accent.foreground,
        '--color-accent-foreground': colors.accent.default,
        '--color-accent-active': colors.primary.foreground_active,
        '--color-accent-foreground-active': colors.primary.active,
        '--color-danger-default': colors.danger.default,
        '--color-danger-active': colors.primary.active,
        '--color-success-default': colors.success.default,
        '--color-success-active': colors.primary.active,
        '--color-dark-default': colors.primary.default,
        '--color-dark-active': colors.primary.active,
        '--color-light-default': colors.primary.foreground,
        '--color-light-active': colors.primary.foreground_active,
        '--color-muted-default': colors.muted.foreground,
        '--color-muted-foreground': colors.muted.default,
    }),
}

export const activeColors = {
    light: {
        primary: {
            from: colors.primary.default,
            to: colors.primary.active,
        },
        secondary: {
            from: colors.secondary.default,
            to: colors.secondary.active,
        },
        accent: {
            from: colors.accent.default,
            to: colors.accent.active,
        },
        success: {
            from: colors.success.default,
            to: colors.success.active,
        },
        danger: {
            from: colors.danger.default,
            to: colors.danger.active,
        },
    },
    dark: {
        primary: {
            from: colors.primary.foreground,
            to: colors.primary.foreground_active,
        },
        secondary: {
            from: colors.secondary.foreground,
            to: colors.secondary.foreground_active,
        },
        accent: {
            from: colors.accent.foreground,
            to: colors.accent.foreground_active,
        },
        success: {
            from: colors.success.default,
            to: colors.success.active,
        },
        danger: {
            from: colors.danger.default,
            to: colors.danger.active,
        },
    },
}
