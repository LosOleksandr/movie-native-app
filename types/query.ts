import type { TMDBListResponse } from './tmdb'
import type { QueryFunction, UseSuspenseQueryOptions } from '@tanstack/react-query'

type TMDBListQuery = {
    queryKey: string[]
    queryFn: QueryFunction<TMDBListResponse, string[]>
    queryOptions?: Omit<
        UseSuspenseQueryOptions<TMDBListResponse, Error, TMDBListResponse, string[]>,
        'queryKey' | 'queryFn'
    >
}

export type { TMDBListQuery }
