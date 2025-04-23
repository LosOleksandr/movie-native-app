type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

type Api = {
    url_endpoint: string
    method: HttpMethod
    useCredentials?: boolean
    useCache?: boolean
    body?: any
    headers?: RequestInit['headers']
    params?: Record<string, string>
    authRequired?: boolean
}

type ApiResponse<T> = {
    ok: true
    data: T
}

type ApiError = {
    status: number
    ok: false
    message: string
    body: any
}

export type { Api, ApiError, ApiResponse, HttpMethod }
