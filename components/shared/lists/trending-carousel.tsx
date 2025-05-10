import { useQuery } from '@tanstack/react-query'
import { Dimensions, View } from 'react-native'

import { tmdbAPI } from '@/api/tmdb'

import Carousel from '../carousel'
import TrendingListItem from '../list-items/trending-list-item'
import { TopicSkeletonItem } from '../loading/topic-sketelon'

const { width } = Dimensions.get('window')

const TrendingCarousel = () => {
    //using `useQuery` instead of `useSuspenseQuery` due to timing issues with carousel initialization.
    const { data, isLoading } = useQuery({
        queryKey: ['trending-movies'],
        queryFn: () => tmdbAPI.movies.discoverTrendingMovies(),
    })

    return (
        <View className="relative mb-8 flex-1">
            {isLoading ? (
                <TopicSkeletonItem className="mb-8 h-[254px] w-full" />
            ) : (
                <Carousel
                    id="trending-carousel"
                    data={data?.results ?? []}
                    renderItem={({ item }) => <TrendingListItem item={item} />}
                    width={width + 50}
                    height={256}
                    autoPlay={true}
                    pagingEnabled
                    autoPlayInterval={5000}
                >
                    <Carousel.Pagination
                        variant="basic"
                        containerStyle={{
                            gap: 6,
                            position: 'absolute',
                            bottom: 8,
                        }}
                    />
                </Carousel>
            )}
        </View>
    )
}

export default TrendingCarousel
