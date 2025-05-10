import React from 'react'
import { FlatList, type FlatListProps } from 'react-native'
import Animated from 'react-native-reanimated'

import { useLoadingAnimation } from '@/hooks/use-loading-animation'
import { cn } from '@/utils/cn'

type TopicSkeletonItemProps = {
    className?: string
}

type TopicSkeletonListProps = {
    numItems: number
} & Pick<FlatListProps<string>, 'contentContainerClassName' | 'columnWrapperClassName' | 'renderItem'>

export const TopicSkeletonItem = ({ className }: TopicSkeletonItemProps) => {
    const loadingAnimation = useLoadingAnimation()

    return <Animated.View style={loadingAnimation} className={cn('bg-slate-400/50', className)} />
}

export const TopicSkeletonList = ({ numItems, renderItem, ...props }: TopicSkeletonListProps) => {
    const data = Array.from({ length: numItems }, (_, i) => i.toString())

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item}
            horizontal
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            {...props}
        />
    )
}
