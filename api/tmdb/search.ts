import type { SearchTMDBParams, TMDBListResponse } from '@/types/tmdb'

import fetchApi from '..'
import { tmdbUrls } from './tmdb.urls'

const searchMoviesAndSeries = async (params: SearchTMDBParams = {}): Promise<TMDBListResponse> => {
    const response = await fetchApi<TMDBListResponse>({
        url_endpoint: tmdbUrls.Search,
        method: 'GET',
        params: params as Record<string, string>,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Failed to fetch search results')
    }

    return response.data
}

export const search = {
    searchMoviesAndSeries,
}
