import React from 'react'
import { View, type ViewProps } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'

import { cn } from '@/utils/cn'

type Props = {
    children: React.ReactNode
} & ViewProps

const SafeViewContainer = ({ children, className, ...props }: Props) => {
    return (
        <SafeAreaView className={cn('flex-1 bg-primary-foreground', className)} {...props}>
            {children}
        </SafeAreaView>
    )
}

export default SafeViewContainer
