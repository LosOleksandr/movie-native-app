import type { GenreResponse, SearchTMDBParams } from '@/types/tmdb'

import fetchApi from '..'
import { tmdbUrls } from './tmdb.urls'

const getMovieGenres = async (params: Pick<SearchTMDBParams, 'language'> = {}): Promise<GenreResponse> => {
    const response = await fetchApi<GenreResponse>({
        url_endpoint: tmdbUrls.Genres_Movies,
        method: 'GET',
        params: params as Record<string, string>,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Failed to fetch genres')
    }

    return response.data
}

const getSeriesGenres = async (params: Pick<SearchTMDBParams, 'language'> = {}): Promise<GenreResponse> => {
    const response = await fetchApi<GenreResponse>({
        url_endpoint: tmdbUrls.Genres_Series,
        method: 'GET',
        params: params as Record<string, string>,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Failed to fetch genres')
    }

    return response.data
}

export const genres = {
    getMovieGenres,
    getSeriesGenres,
}
