import TMDBEndpoints from './tmdb.endpoints'
import buildUrls from '../utils/buildUrls'

export const tmdbUrls = buildUrls<typeof TMDBEndpoints>(TMDBEndpoints)
