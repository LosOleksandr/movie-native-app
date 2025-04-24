import { cva, type VariantProps } from 'class-variance-authority'
import { useColorScheme } from 'nativewind'
import { Pressable, type PressableProps } from 'react-native'
import Animated, {
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated'

import { cn } from '@/utils/cn'
import { activeColors } from '@/utils/colors'

import ThemedText, { type ThemedTextVariants } from './themed-text'

const buttonVariants = cva(['border rounded-lg max-w-max justify-center items-center'], {
    variants: {
        intent: {
            primary: 'border-transparent',
            secondary: 'border-border',
            accent: 'border-accent-foreground',
            success: 'border-transparent',
            danger: 'border-transparent',
        },
        size: {
            badge: 'py-1 px-2',
            small: 'py-2 px-4',
            medium: 'py-3 px-8',
            large: 'py-3 px-12',
        },
        disabled: {
            true: 'opacity-50',
            false: '',
        },
        text_color: {
            primary: 'text-primary-foreground',
            secondary: 'text-secondary-foreground',
            accent: 'text-dark',
        },
    },
    defaultVariants: {
        intent: 'primary',
        size: 'medium',
        disabled: false,
    },
})

type ButtonVariantProps = VariantProps<typeof buttonVariants>

export type ButtonProps = PressableProps &
    ButtonVariantProps & {
        text: string
        font?: ThemedTextVariants['font']
        font_size?: ThemedTextVariants['size']
        className?: string
    }

const Button = ({
    text,
    intent = 'primary',
    size,
    disabled,
    font = 'base',
    font_size = 'base',
    text_color,
    onPress,
    className,
    ...props
}: ButtonProps) => {
    const { colorScheme } = useColorScheme()
    const pressed = useSharedValue(0)
    const colors = activeColors[colorScheme!][intent!]

    const animatedStyle = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(pressed.value, [0, 1], [colors.from, colors.to])
        const scale = interpolate(pressed.value, [0, 1], [1, 1.05])
        return {
            backgroundColor,
            transform: [{ scale }],
        }
    })

    return (
        <Pressable
            disabled={disabled}
            accessibilityRole="button"
            onPress={onPress}
            onPressIn={() => (pressed.value = withTiming(1, { duration: 150 }))}
            onPressOut={() => (pressed.value = withTiming(0, { duration: 150 }))}
            {...props}
        >
            <Animated.View style={animatedStyle} className={cn(buttonVariants({ size, intent, disabled }), className)}>
                <ThemedText intentForeground={intent} size={font_size} font={font} className={className}>
                    {text}
                </ThemedText>
            </Animated.View>
        </Pressable>
    )
}

export default Button
