import { useMutation, useQueryClient } from '@tanstack/react-query'
import { router } from 'expo-router'

import { authAPI } from '@/api/auth'
import type { UserCredentials } from '@/types/user'

export const useAuthActions = () => {
    const queryClient = useQueryClient()

    const loginAction = useMutation({
        mutationKey: ['login'],
        mutationFn: (creds: UserCredentials) => authAPI.login(creds),
        onSuccess: () => {
            queryClient.fetchQuery({ queryKey: ['current-user'] })
            router.replace('/(app)/(tabs)')
        },
    })

    const registerAction = useMutation({
        mutationKey: ['register'],
        mutationFn: (credentials: UserCredentials) => authAPI.register(credentials),
        onSuccess: () => {
            queryClient.fetchQuery({ queryKey: ['current-user'] })
            router.replace('/(app)/(tabs)/profile')
        },
    })

    const logoutAction = useMutation({
        mutationKey: ['logout'],
        mutationFn: authAPI.logout,
        onSuccess: () => {
            queryClient.resetQueries({ queryKey: ['current-user'] })
            queryClient.setQueryData(['current-user'], null)
        },
    })

    return {
        loginAction,
        registerAction,
        logoutAction,
    }
}
