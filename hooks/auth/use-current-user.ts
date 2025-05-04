import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

import { userAPI } from '@/api/user'
import { checkTokenClient } from '@/utils/store-token'

export const useCurrentUser = () => {
    const queryClient = useQueryClient()

    const userQuery = useQuery({
        queryKey: ['current-user'],
        queryFn: userAPI.getCurrentUser,
        enabled: checkTokenClient(),
        retry: false,
        refetchInterval: 20000,
        staleTime: 20 * 1000,
    })

    useEffect(() => {
        if (userQuery.isError) {
            queryClient.setQueryData(['current-user'], null)
        }
    }, [queryClient, userQuery.isError])

    return {
        user: userQuery.data ?? null,
        isAuthenticated: !!userQuery.data,
        userQuery,
    }
}
