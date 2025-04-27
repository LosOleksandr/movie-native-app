import { Ionicons } from '@expo/vector-icons'
import { TabList, Tabs, TabSlot, TabTrigger, type TabTriggerSlotProps } from 'expo-router/ui'
import { forwardRef } from 'react'
import { Pressable, View } from 'react-native'
import Animated, { Easing, FadeInDown, LinearTransition } from 'react-native-reanimated'

import { colors } from '@/utils/colors'

import ThemedText from './themed-text'

type AppTabButtonProps = TabTriggerSlotProps & {
    icon: keyof (typeof Ionicons)['glyphMap']
}

const AppTabButton = forwardRef<View, AppTabButtonProps>(({ icon, isFocused, children, ...props }, ref) => {
    return (
        <Animated.View
            entering={FadeInDown.delay(150)}
            layout={LinearTransition.easing(Easing.ease)}
            className="max-w-max items-center justify-center overflow-hidden rounded-3xl bg-slate-600/50"
        >
            <Pressable ref={ref} {...props} className="items-center justify-center gap-2 px-4 py-2">
                <Ionicons name={icon} size={24} color={isFocused ? colors.accent.default : colors.primary.foreground} />

                {isFocused && (
                    <ThemedText intent={'accent'} font={'bold'}>
                        {children}
                    </ThemedText>
                )}
            </Pressable>
        </Animated.View>
    )
})

AppTabButton.displayName = 'AppTabButton'

const AppTabs = () => {
    return (
        <Tabs>
            <TabSlot />
            <TabList className="absolute bottom-0 w-full items-center justify-center bg-slate-300 px-12 py-3 dark:bg-slate-800">
                <TabTrigger name="home" href="/" asChild>
                    <AppTabButton icon="home">Home</AppTabButton>
                </TabTrigger>
                <TabTrigger name="search" href="/search" asChild>
                    <AppTabButton icon="search">Search</AppTabButton>
                </TabTrigger>
                <TabTrigger name="saved" href="/saved" asChild>
                    <AppTabButton icon="bookmark">Saved</AppTabButton>
                </TabTrigger>
                <TabTrigger name="profile" href="/profile" asChild>
                    <AppTabButton icon="person">Profile</AppTabButton>
                </TabTrigger>
            </TabList>
        </Tabs>
    )
}

export default AppTabs
