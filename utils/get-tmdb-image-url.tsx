import type { ImageSourcePropType } from 'react-native'

const TMDBPosterURl = 'https://image.tmdb.org/t/p/w500'
const no_poster_img = require('../assets/images/no-poster.png')

export const getTMDBImageURL = (image_path?: string | null): { uri: string } | ImageSourcePropType => {
    return image_path ? { uri: `${TMDBPosterURl}${image_path}` } : no_poster_img
}
