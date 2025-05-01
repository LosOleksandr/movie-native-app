import React from 'react'
import { View, type ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { cn } from '@/utils/cn'

type Props = {
    children: React.ReactNode
} & ViewProps

const SafeViewContainer = ({ children, className, ...props }: Props) => {
    const insets = useSafeAreaInsets()

    return (
        <View
            className={cn('flex-1 bg-primary-foreground', className)}
            style={{
                flex: 1,
                paddingTop: insets.top,
                paddingLeft: insets.left,
                paddingBottom: insets.bottom,
                paddingRight: insets.right,
            }}
            {...props}
        >
            {children}
        </View>
    )
}

export default SafeViewContainer
