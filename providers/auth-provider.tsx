import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'

import useAuthStore from '@/stores/auth'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { onInitialize, isLoading } = useAuthStore()

    useEffect(() => {
        onInitialize()
    }, [onInitialize])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return <>{children}</>
}
