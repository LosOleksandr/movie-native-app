import { cva, type VariantProps } from 'class-variance-authority'
import { Text, type TextProps } from 'react-native'

import { cn } from '@/utils/cn'

const textVariants = cva('text', {
    variants: {
        intent: {
            primary: 'text-primary',
            secondary: 'text-secondary',
            accent: 'text-accent',
            success: 'text-success',
            muted: 'text-muted',
            danger: 'text-danger',
            light: 'text-light',
            dark: 'text-dark',
        },

        intentForeground: {
            primary: 'text-primary-foreground',
            secondary: 'text-secondary-foreground',
            accent: 'text-dark',
        },

        size: {
            xs: 'text-sm',
            small: 'text-sm',
            base: 'text-base',
            large: 'text-lg',
            xl: 'text-xl',
            '2xl': 'text-2xl',
            '3xl': 'text-3xl',
        },

        align: {
            center: 'text-center',
            left: 'text-left',
            right: 'text-right',
        },

        font: {
            light: 'font-light',
            base: 'font-normal',
            semibold: 'font-semibold',
            bold: 'font-bold',
        },
    },
    defaultVariants: {
        intent: 'primary',
        intentForeground: null,
        size: 'base',
        align: 'left',
        font: 'base',
    },
})

export type ThemedTextVariants = VariantProps<typeof textVariants>

type ThemedTextProps = TextProps &
    ThemedTextVariants & {
        className?: string
    }

const ThemedText = ({
    children,
    intent,
    intentForeground,
    size,
    align,
    font,
    className,
    ...props
}: ThemedTextProps) => {
    return (
        <Text className={cn(textVariants({ intent, intentForeground, size, align, font, className }))} {...props}>
            {children}
        </Text>
    )
}

export default ThemedText
