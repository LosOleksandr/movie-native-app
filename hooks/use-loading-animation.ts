import { useEffect } from 'react'
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

export const useLoadingAnimation = () => {
    const opacity = useSharedValue(0)

    useEffect(() => {
        opacity.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true)
    }, [opacity])

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }))

    return animatedStyle
}
