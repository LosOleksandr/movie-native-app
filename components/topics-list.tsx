import { FlatList } from 'react-native'

import { tmdbAPI } from '@/api/tmdb'

import TMDBList from './shared/lists/tmdb-list'
import { TMDBTopic } from './shared/tmdb-topic'

const topics = [
    {
        key: 'trending-movies',
        title: 'Trending',
        queryFn: () => tmdbAPI.movies.discoverTrendingMovies(),
    },
    {
        key: 'upcoming-movies',
        title: 'Upcoming movies this month',
        queryFn: tmdbAPI.movies.discoverUpcomingMovies,
    },
    {
        key: 'playing-now-movies',
        title: 'Playing now',
        queryFn: tmdbAPI.movies.discoverPlayingNowMovies,
    },
    {
        key: 'top-rated-movies',
        title: 'Top rated',
        queryFn: tmdbAPI.movies.discoverTopRatedMovies,
    },
]

const TopicsList = () => {
    return (
        <FlatList
            data={topics}
            contentContainerClassName="pb-8 gap-12"
            numColumns={1}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
                <TMDBTopic topic_title={item.title}>
                    <TMDBList queryKey={[item.key]} queryFn={item.queryFn} />
                </TMDBTopic>
            )}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default TopicsList
