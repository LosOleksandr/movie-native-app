import * as SecureStore from 'expo-secure-store'
import { Platform } from 'react-native'

import { Api, ApiError, ApiResponse } from '@/types/api'

const API_URL = Platform.OS === 'android' ? process.env.EXPO_PUBLIC_API_URL_ANDROID : process.env.EXPO_PUBLIC_API_URL

if (!API_URL) {
    throw new Error('API_URL is not defined')
}

const fetchApi = async <T>(input: Api, isRetry = false): Promise<ApiResponse<T> | ApiError> => {
    let { url_endpoint, method, useCache, body, headers, params, authRequired = false } = input

    let url = `${API_URL}${url_endpoint}`

    let requestHeaders: HeadersInit = {
        'Content-Type': 'application/json',
        ...headers,
    }

    if (authRequired) {
        const token = await SecureStore.getItemAsync('token')
        if (token) {
            requestHeaders = {
                ...requestHeaders,
                Authorization: `Bearer ${token}`,
            }
        }
    }

    const options: RequestInit = {
        method,
        headers: requestHeaders,
        body: body ? JSON.stringify(body) : undefined,
        cache: useCache ? 'force-cache' : 'no-store',
        credentials: 'include',
        mode: 'cors',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        keepalive: true,
    }

    if (params) {
        const queryParams = new URLSearchParams(params)
        url += `?${queryParams.toString()}`
    }

    const response = await fetch(url, options)

    if (response.status === 401 && !isRetry) {
        try {
            const refreshRes = await fetch(`${API_URL}/auth/refresh`, {
                method: 'POST',
                credentials: 'include',
            })

            const refreshData = await refreshRes.json()

            if (!refreshRes.ok) {
                return {
                    status: refreshRes.status,
                    ok: false,
                    message: refreshData?.message || 'Failed to refresh token',
                    body: {},
                }
            }

            const token = refreshData?.token
            if (token) {
                await SecureStore.setItemAsync('token', token)

                return fetchApi<T>(input, true)
            }

            return {
                status: 401,
                ok: false,
                message: 'No token found in refresh response',
                body: {},
            }
        } catch (error) {
            return {
                status: 401,
                ok: false,
                message: error instanceof Error ? error.message : 'Token refresh error',
                body: {},
            }
        }
    }

    if (!response.ok) {
        const json = await response.json()
        return {
            status: response.status,
            ok: false,
            message: json.message || 'Request failed',
            body: json,
        }
    }

    const data = (await response.json()) as T

    return { ok: true, data }
}

export default fetchApi
