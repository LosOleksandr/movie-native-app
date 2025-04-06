import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

export default function Index() {
    return (
        <View className="flex-1 items-center justify-center bg-gray-400 dark:bg-gray-800">
            <Stack.Screen name="index" options={{ headerTitle: 'Home' }} />
            <Text className="mb-4 text-center text-xl font-bold text-gray-900 dark:text-gray-100">
                Welcome to Movie App!
            </Text>
            <Text className="text-center text-lg text-gray-900 dark:text-gray-100">Find and explore movies</Text>
        </View>
    )
}
