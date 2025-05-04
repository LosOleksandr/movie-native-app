import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'

const TopicSkeletonItem = () => {
    const opacity = useSharedValue(0)

    useEffect(() => {
        opacity.value = withRepeat(withTiming(1, { duration: 1000 }), -1, true)
    }, [opacity])

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
    }))

    return <Animated.View style={animatedStyle} className="h-80 w-48 rounded-xl bg-slate-400/50" />
}

const TopicSkeleton = () => {
    const data = Array.from({ length: 20 }, (_, i) => i.toString())

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item}
            horizontal
            renderItem={() => <TopicSkeletonItem />}
            contentContainerClassName="gap-4 ml-4"
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default TopicSkeleton
