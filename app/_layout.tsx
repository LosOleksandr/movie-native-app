import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { AuthProvider } from '@/providers/auth-provider'
import { ThemeProvider } from '@/providers/theme-provider'
import '../global.css'

const queryClient = new QueryClient()

export default function RootLayout() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <QueryClientProvider client={queryClient}>
                    <Slot />
                    <StatusBar style="auto" />
                </QueryClientProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}
