import type { UserCredentials } from '@/types/user'
import { deleteTokenAsync, setTokenAsync } from '@/utils/store-token'

import fetchApi from '..'
import buildUrls from '../utils/buildUrls'
import AuthEndpoints from './auth-enpoints'

const authUrls = buildUrls<typeof AuthEndpoints>(AuthEndpoints)

const register = async (credentials: UserCredentials): Promise<void> => {
    const response = await fetchApi<{ token: string }>({
        url_endpoint: authUrls.Register,
        method: 'POST',
        body: credentials,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Register failed')
    }

    const { data } = response

    await setTokenAsync(data.token)
}

const login = async (credentials: UserCredentials): Promise<void> => {
    const response = await fetchApi<{ token: string }>({
        url_endpoint: authUrls.Login,
        method: 'POST',
        body: credentials,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Login failed')
    }

    const { data } = response

    await setTokenAsync(data.token)
}

const logout = async (): Promise<void> => {
    const response = await fetchApi({
        url_endpoint: authUrls.Logout,
        method: 'POST',
        useCredentials: true,
        authRequired: true,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Logout failed')
    }

    await deleteTokenAsync()
}

export const authAPI = {
    register,
    login,
    logout,
}
