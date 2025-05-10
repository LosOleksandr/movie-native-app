import { LinearGradient } from 'expo-linear-gradient'
import { Image, View } from 'react-native'

import type { TMDBListItem } from '@/types/tmdb'
import { getTMDBImageURL } from '@/utils/get-tmdb-image-url'

import Button from '../button'
import ThemedText from '../themed-text'

type TrendingListItemProps = {
    item: TMDBListItem
}

const TrendingListItem = ({ item }: TrendingListItemProps) => {
    const { backdrop_path, title, name, overview } = item

    const backdrop_image = getTMDBImageURL(backdrop_path)

    return (
        <View className="relative flex-1">
            <Image source={backdrop_image} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
            <LinearGradient
                colors={['rgba(0,0,0,0.9)', 'transparent']}
                className="absolute top-0 h-full w-full px-4 py-8"
                start={[0, 0]}
                end={[1, 1]}
            >
                <View className="w-2/3 gap-2">
                    <ThemedText intent={'light'} numberOfLines={1} font={'semibold'} size={'2xl'}>
                        {title ?? name}
                    </ThemedText>
                    <ThemedText intent={'light'} numberOfLines={1} font={'semibold'} size={'large'}>
                        Action, Drama
                    </ThemedText>
                    <ThemedText intent={'light'} numberOfLines={2} font={'semibold'}>
                        {overview}
                    </ThemedText>
                    <Button
                        text="See details"
                        intent={'accent'}
                        size={'medium'}
                        font={'bold'}
                        className="mt-4 self-start"
                    />
                </View>
            </LinearGradient>
        </View>
    )
}

export default TrendingListItem
