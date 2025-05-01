import { LinearGradient } from 'expo-linear-gradient'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Pressable } from 'react-native'

import type { TMDBListItem as TMDBListItemType } from '@/types/tmdb'

import ThemedText from '../themed-text'

type MovieItemProps = {
    item: TMDBListItemType
}

const TMDBListItem = ({ item }: MovieItemProps) => {
    const { title, poster_path, original_name } = item

    const posterUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`

    return (
        <Link href={'/(app)/(tabs)/search'} asChild>
            <Pressable className="relative w-48 flex-1">
                <Image
                    className="h-80 w-full rounded-lg"
                    source={poster_path ? { uri: posterUrl } : require('../../../assets/images/no-poster.png')}
                />
                <LinearGradient
                    colors={['rgba(0,0,0,0.8)', 'transparent']}
                    className="absolute bottom-0 h-1/2 w-full p-4"
                    start={[0, 1]}
                    end={[0, 0]}
                >
                    <ThemedText className="mt-auto" intent={'light'} numberOfLines={1} font={'semibold'} size={'large'}>
                        {title ?? original_name}
                    </ThemedText>
                </LinearGradient>
            </Pressable>
        </Link>
    )
}

export default TMDBListItem
