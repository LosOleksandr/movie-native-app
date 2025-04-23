import * as SecureStore from 'expo-secure-store'
import { create } from 'zustand'

import { userAPI } from '@/api/user'
import { User } from '@/types/user'

interface AuthStore {
    isAuthenticated: boolean
    user: User | null
    isLoading: boolean
    error: string | null
    onInitialize: () => Promise<void>
}

const useAuthStore = create<AuthStore>((set, get) => ({
    isAuthenticated: false,
    user: null,
    isLoading: false,
    error: null,

    onInitialize: async () => {
        set({ isLoading: true, error: null })
        try {
            const token = await SecureStore.getItemAsync('token')

            if (token) {
                const user = await userAPI.getCurrentUser()

                set({ isAuthenticated: true, isLoading: false, user })
            } else {
                set({ isAuthenticated: false, isLoading: false })
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unexpected initialize error'
            set({ isAuthenticated: false, isLoading: false, error: message })
        }
    },
}))

export default useAuthStore
