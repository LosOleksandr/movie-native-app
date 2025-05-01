import type {
    DetailsParams,
    DiscoverSeriesParams,
    SearchTMDBParams,
    SeriesDetails,
    TMDBListResponse,
    TrendingTimeWindow,
} from '@/types/tmdb'

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
    getSeriesDetails,
}
