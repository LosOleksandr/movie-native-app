import { cx } from 'class-variance-authority'
import React from 'react'
import { View, type ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = {
    children: React.ReactNode
} & ViewProps

const SafeViewContainer = ({ children, className, ...props }: Props) => {
    const insets = useSafeAreaInsets()

    return (
        <View
            className={cx('flex-1 bg-primary-foreground', className)}
            style={{
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
