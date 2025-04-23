import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'

import { AuthProvider } from '@/providers/auth-provider'
import '../global.css'

export default function RootLayout() {
    const colorScheme = useColorScheme()

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <AuthProvider>
                <Slot />
                <StatusBar style="auto" />
            </AuthProvider>
        </ThemeProvider>
    )
}
