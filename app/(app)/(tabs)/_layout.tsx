import { Ionicons } from '@expo/vector-icons'
import { Tabs as ExpoTabs } from 'expo-router'
import React from 'react'

const Tabs = () => {
    return (
        <ExpoTabs>
            <ExpoTabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
                }}
            />
            <ExpoTabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color, size }) => <Ionicons name="search" color={color} size={size} />,
                }}
            />
            <ExpoTabs.Screen
                name="saved"
                options={{
                    title: 'Saved',
                    tabBarIcon: ({ color, size }) => <Ionicons name="bookmark" color={color} size={size} />,
                }}
            />
            <ExpoTabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />,
                }}
            />
        </ExpoTabs>
    )
}

export default Tabs
