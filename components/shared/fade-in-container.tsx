import { type ViewProps } from 'react-native'
import Animated, { FadeInDown, type AnimatedProps } from 'react-native-reanimated'

import { cn } from '@/utils/cn'

type FadeInContainerProps = AnimatedProps<ViewProps>

const FadeInContainer = ({ children, className, ...props }: FadeInContainerProps) => {
    return (
        <Animated.View entering={FadeInDown} className={cn('flex-1', className)} {...props}>
            {children}
        </Animated.View>
    )
}

export default FadeInContainer
