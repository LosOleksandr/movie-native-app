import { useColorScheme } from 'nativewind'
import React, { createContext } from 'react'
import { View } from 'react-native'

import { themes } from '@/utils/colors'

interface ThemeProviderProps {
    children: React.ReactNode
}
export const ThemeContext = createContext<{
    theme: 'light' | 'dark'
}>({
    theme: 'light',
})
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const { colorScheme = 'dark' } = useColorScheme()

    return (
        <ThemeContext.Provider value={{ theme: colorScheme }}>
            <View style={themes[colorScheme]} className="flex-1 bg-primary-foreground">
                {children}
            </View>
        </ThemeContext.Provider>
    )
}
