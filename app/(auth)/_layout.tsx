import { Redirect, Stack } from 'expo-router'
import React from 'react'

import useAuthStore from '@/stores/auth'

const Layout = () => {
    const { isAuthenticated } = useAuthStore()

    if (isAuthenticated) {
        return <Redirect href={'/(app)/(tabs)'} />
    }

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
        </Stack>
    )
}

export default Layout
