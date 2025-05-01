import * as SecureStore from 'expo-secure-store'

import type { User, UserCredentials } from '@/types/user'

import fetchApi from '..'
import AuthEndpoints from './auth-enpoints'
import buildUrls from '../utils/buildUrls'

const authUrls = buildUrls<typeof AuthEndpoints>(AuthEndpoints)

const register = async (credentials: UserCredentials): Promise<void> => {
    const response = await fetchApi<{ user: User; token: string }>({
        url_endpoint: authUrls.Register,
        method: 'POST',
        body: credentials,
    })

    if (!response.ok) {
        throw new Error(response.message || 'Register failed')
    }

    const { data } = response

    await SecureStore.setItemAsync('token', data.token)
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

    await SecureStore.setItemAsync('token', data.token)
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

    await SecureStore.deleteItemAsync('token')
}

export const authAPI = {
    register,
    login,
    logout,
}
