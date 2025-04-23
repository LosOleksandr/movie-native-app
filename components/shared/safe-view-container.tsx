import clsx from 'clsx'
import React from 'react'
import { View, ViewProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type Props = {
    children: React.ReactNode
} & ViewProps

const SafeViewContainer = ({ children, className, ...props }: Props) => {
    const insets = useSafeAreaInsets()

    return (
        <View
            className={clsx('flex-1', className)}
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
