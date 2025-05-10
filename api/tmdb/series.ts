import dayjs from 'dayjs'

import type {
    DetailsParams,
    DiscoverSeriesParams,
    SearchTMDBParams,
    SeriesDetails,
    TMDBListResponse,
    TrendingTimeWindow,
} from '@/types/tmdb'
import { getFormattedDate } from '@/utils/date'

import fetchApi from '..'
import { tmdbUrls } from './tmdb.urls'

const discoverSeries = async (params: DiscoverSeriesParams = {}): Promise<TMDBListResponse> => {
    const response = await fetchApi<TMDBListResponse>({
        url_endpoint: tmdbUrls.Series,
        method: 'GET',
        params: params as Record<string, string>,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Failed to fetch series')
    }

    return response.data
}

const discoverTrendingSeries = async (
    time_window: TrendingTimeWindow = 'week',
    params: Pick<SearchTMDBParams, 'language'> = {},
): Promise<TMDBListResponse> => {
    const trendingUrl = `${tmdbUrls.Trending_Series}` + '/' + time_window

    const response = await fetchApi<TMDBListResponse>({
        url_endpoint: trendingUrl,
        method: 'GET',
        params: params as Record<string, string>,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Failed to fetch series')
    }

    return response.data
}

const discoverOnAirSeries = async (): Promise<TMDBListResponse> => {
    const air_date_gte = getFormattedDate(dayjs().subtract(2, 'month').endOf('month'))
    const air_date_lte = getFormattedDate(dayjs().add(2, 'day'))

    const params: DiscoverSeriesParams = {
        'air_date.gte': air_date_gte,
        'air_date.lte': air_date_lte,
        without_genres: '10767,10763,10764,16',
    }

    return discoverSeries(params)
}

const discoverTopRatedSeries = async (): Promise<TMDBListResponse> => {
    const params: DiscoverSeriesParams = {
        sort_by: 'vote_average.desc',
        'vote_count.gte': 200,
        without_genres: '10767,10763,10764,16',
    }

    return discoverSeries(params)
}

const getSeriesDetails = async (id: string, params: DetailsParams = {}): Promise<SeriesDetails> => {
    const response = await fetchApi<SeriesDetails>({
        url_endpoint: `${tmdbUrls.Series}/${id}`,
        method: 'GET',
        params: params as Record<string, string>,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Failed to fetch series details')
    }

    return response.data
}

export const series = {
    discoverSeries,
    discoverTrendingSeries,
    discoverOnAirSeries,
    discoverTopRatedSeries,
    getSeriesDetails,
}
