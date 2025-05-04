import { Redirect, Stack } from 'expo-router'
import React from 'react'

import { useAuthContext } from '@/providers/auth-provider'

const Layout = () => {
    const { isAuthenticated } = useAuthContext()

    if (isAuthenticated) {
        return <Redirect href={'/(app)/(tabs)'} />
    }

    return (
        <Stack screenOptions={{ headerShown: false, animation: 'none' }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
        </Stack>
    )
}

export default Layout
