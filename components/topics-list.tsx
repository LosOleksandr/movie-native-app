import { View } from 'react-native'

import { tmdbAPI } from '@/api/tmdb'

import TMDBList from './shared/lists/tmdb-list'
import { TMDBTopic } from './shared/tmdb-topic'

const TopicsList = () => {
    return (
        <View className="gap-8">
            <TMDBTopic topic_title="Trending">
                <TMDBList queryKey={['trending-movies']} queryFn={() => tmdbAPI.movies.discoverTrendingMovies()} />
            </TMDBTopic>
            <TMDBTopic topic_title="Upcoming movies this month">
                <TMDBList queryKey={['upcoming-movies']} queryFn={tmdbAPI.movies.discoverUpcomingMovies} />
            </TMDBTopic>
            <TMDBTopic topic_title="Playing now">
                <TMDBList queryKey={['playing-now-movies']} queryFn={tmdbAPI.movies.discoverPlayingNowMovies} />
            </TMDBTopic>
            <TMDBTopic topic_title="Top rated">
                <TMDBList queryKey={['top-rated-movies']} queryFn={tmdbAPI.movies.discoverTopRatedMovies} />
            </TMDBTopic>
        </View>
    )
}

export default TopicsList
