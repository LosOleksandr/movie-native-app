import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'

import useAuthStore from '@/stores/auth'

const Page = () => {
    const { isAuthenticated } = useAuthStore()

    if (!isAuthenticated) {
        return (
            <View className="flex-1 items-center justify-center">
                <Text>Please login to continue</Text>
                <Button title="Login" onPress={() => router.push('/login')} />
            </View>
        )
    }

    return (
        <View>
            <Text>index</Text>
        </View>
    )
}

export default Page
