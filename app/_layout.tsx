import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import '../global.css'

export default function RootLayout() {
    const colorScheme = useColorScheme()

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack />
            <StatusBar style="auto" />
        </ThemeProvider>
    )
}
