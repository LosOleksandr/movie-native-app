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
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <Slot />
                    <StatusBar style="auto" />
                </AuthProvider>
            </QueryClientProvider>
        </ThemeProvider>
    )
}
