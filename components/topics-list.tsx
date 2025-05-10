import { FlatList, View } from 'react-native'

import { tmdbAPI } from '@/api/tmdb'
import type { TMDBListQuery } from '@/types/query'
import { QUERIES_KEYS } from '@/utils/queries-keys'

import TMDBList from './shared/lists/tmdb-list'
import { TMDBTopic } from './shared/tmdb-topic'

type TopicItemType = {
    id: string
    query: TMDBListQuery
    title: string
}

const { MOVIES, SERIES } = QUERIES_KEYS.TOPICS

const topics: TopicItemType[] = [
    {
        id: 'upcoming-movies',
        query: {
            queryKey: MOVIES.UPCOMING_MOVIES,
            queryFn: tmdbAPI.movies.discoverUpcomingMovies,
        },
        title: 'Upcoming movies this month',
    },
    {
        id: 'playing-now-movies',
        query: {
            queryKey: MOVIES.PLAYING_NOW_MOVIES,
            queryFn: tmdbAPI.movies.discoverPlayingNowMovies,
        },
        title: 'Playing now',
    },
    {
        id: 'top-rated-movies',
        query: {
            queryKey: MOVIES.TOP_RATED_MOVIES,
            queryFn: tmdbAPI.movies.discoverTopRatedMovies,
        },
        title: 'Top rated',
    },
    {
        id: 'animation-movies',
        query: {
            queryKey: MOVIES.ANIMATION_MOVIES,
            queryFn: tmdbAPI.movies.discoverAnimationMovies,
        },
        title: 'Top animation movies',
    },
    {
        id: 'anime-movies',
        query: {
            queryKey: MOVIES.ANIME_MOVIES,
            queryFn: tmdbAPI.movies.discoverAnimeMovies,
        },
        title: 'Top anime movies',
    },
    {
        id: 'on-air-series',
        query: {
            queryKey: SERIES.ON_AIR_SERIES,
            queryFn: tmdbAPI.series.discoverOnAirSeries,
        },
        title: 'Series on air',
    },
    {
        id: 'top-reated-series',
        query: {
            queryKey: SERIES.TOP_RATED_SERIES,
            queryFn: tmdbAPI.series.discoverTopRatedSeries,
        },
        title: 'Top rated series',
    },
]

const TopicsList = () => {
    return (
        <View className="flex-1">
            <FlatList
                data={topics}
                contentContainerClassName="pb-8 gap-12"
                numColumns={1}
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TMDBTopic topic_title={item.title}>
                        <TMDBList query={item.query} />
                    </TMDBTopic>
                )}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default TopicsList
