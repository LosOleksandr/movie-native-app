import { createContext, useContext, type ReactNode } from 'react'

import { useCurrentUser } from '@/hooks/auth/use-current-user'
import type { User } from '@/types/user'

import type { UseQueryResult } from '@tanstack/react-query'

type AuthContextType = {
    user: User | null
    isAuthenticated: boolean
    userQuery: UseQueryResult<User, Error>
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const auth = useCurrentUser()

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider')
    }
    return context
}
