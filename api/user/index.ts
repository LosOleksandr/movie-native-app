import type { User } from '@/types/user'

import fetchApi from '..'
import UserEndpoints from './user.endpoints'
import buildUrls from '../utils/buildUrls'

const userUrls = buildUrls<typeof UserEndpoints>(UserEndpoints)

const getCurrentUser = async (): Promise<User> => {
    const response = await fetchApi<User>({
        url_endpoint: userUrls.Current,
        method: 'GET',
        useCredentials: true,
        authRequired: true,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Failed to fetch current user')
    }

    return response.data
}

export const userAPI = {
    getCurrentUser,
}
