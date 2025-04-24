import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { AuthProvider } from '@/providers/auth-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import '../global.css'

export default function RootLayout() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <Slot />
                <StatusBar style="auto" />
            </AuthProvider>
        </ThemeProvider>
    )
}
