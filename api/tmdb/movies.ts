import dayjs from 'dayjs'

import type {
    DetailsParams,
    DiscoverMoviesParams,
    MovieDetails,
    SearchTMDBParams,
    TMDBListResponse,
    TrendingTimeWindow,
} from '@/types/tmdb'
import { getFormattedDate } from '@/utils/date'

import fetchApi from '..'
import { tmdbUrls } from './tmdb.urls'

const discoverMovies = async (params: DiscoverMoviesParams = {}): Promise<TMDBListResponse> => {
    const response = await fetchApi<TMDBListResponse>({
        url_endpoint: tmdbUrls.Movies,
        method: 'GET',
        params: params as Record<string, string>,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Failed to fetch movies')
    }

    return response.data
}

const discoverTrendingMovies = async (
    time_window: TrendingTimeWindow = 'week',
    params: Pick<SearchTMDBParams, 'language'> = {},
): Promise<TMDBListResponse> => {
    const trendingUrl = `${tmdbUrls.Trending_Movies}` + '/' + time_window

    const response = await fetchApi<TMDBListResponse>({
        url_endpoint: trendingUrl,
        method: 'GET',
        params: params as Record<string, string>,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Failed to fetch movies')
    }

    return response.data
}

const discoverUpcomingMovies = async (): Promise<TMDBListResponse> => {
    const release_date_gte = getFormattedDate(dayjs().add(2, 'day'))
    const release_date_lte = getFormattedDate(dayjs().endOf('month'))

    const params: DiscoverMoviesParams = {
        'release_date.gte': release_date_gte,
        'release_date.lte': release_date_lte,
        with_release_type: '2|3',
    }

    return discoverMovies(params)
}

const discoverPlayingNowMovies = async (): Promise<TMDBListResponse> => {
    const release_date_gte = getFormattedDate(dayjs().subtract(2, 'month').endOf('month'))
    const release_date_lte = getFormattedDate(dayjs().add(2, 'day'))

    const params: DiscoverMoviesParams = {
        'release_date.gte': release_date_gte,
        'release_date.lte': release_date_lte,
        with_release_type: '2|3',
    }

    return discoverMovies(params)
}

const discoverTopRatedMovies = async (): Promise<TMDBListResponse> => {
    const params: DiscoverMoviesParams = {
        sort_by: 'vote_average.desc',
        'vote_count.gte': 200,
        without_genres: '99,10755,16',
    }

    return discoverMovies(params)
}

const discoverAnimationMovies = async (): Promise<TMDBListResponse> => {
    const params: DiscoverMoviesParams = {
        sort_by: 'vote_average.desc',
        'vote_count.gte': 200,
        with_genres: '16',
        with_original_language: 'en',
    }

    return discoverMovies(params)
}

const discoverAnimeMovies = async (): Promise<TMDBListResponse> => {
    const params: DiscoverMoviesParams = {
        sort_by: 'vote_average.desc',
        'vote_count.gte': 200,
        with_genres: '16',
        with_original_language: 'ja',
    }

    return discoverMovies(params)
}

const getMovieDetails = async (id: string, params: DetailsParams = {}): Promise<MovieDetails> => {
    const response = await fetchApi<MovieDetails>({
        url_endpoint: `${tmdbUrls.Movies}/${id}`,
        method: 'GET',
        params: params as Record<string, string>,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Failed to fetch movie details')
    }

    return response.data
}

export const movies = {
    discoverMovies,
    discoverTrendingMovies,
    discoverUpcomingMovies,
    discoverPlayingNowMovies,
    discoverTopRatedMovies,
    discoverAnimationMovies,
    discoverAnimeMovies,
    getMovieDetails,
}
