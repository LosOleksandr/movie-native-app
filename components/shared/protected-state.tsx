import { Link, router, usePathname } from 'expo-router'
import { View } from 'react-native'

import Button from './button'
import FadeInContainer from './fade-in-container'
import ThemedText from './themed-text'

const ProtectedState = () => {
    const pathname = usePathname()

    const routeName = pathname.replaceAll('/', '')

    return (
        <FadeInContainer className="max-w-md justify-center">
            <View className="mb-4 flex-row flex-wrap">
                <ThemedText size="2xl" font="semibold">
                    Please
                </ThemedText>
                <Link href={'/(auth)/login'} className="mx-2 text-2xl font-bold text-accent underline">
                    Log In
                </Link>
                <ThemedText size="2xl" font="semibold">
                    to continue
                </ThemedText>
            </View>
            <ThemedText size={'large'} font={'base'} className="mb-4">
                This feature is available only for authenticated users.
            </ThemedText>
            <ThemedText size={'large'} font={'base'} className="mb-8">
                You can follow the login link to manage your {routeName}.
            </ThemedText>
            <Button
                text="Go to login"
                intent={'secondary'}
                font={'bold'}
                size={'xl'}
                onPress={() => router.push('/(auth)/login')}
            />
        </FadeInContainer>
    )
}

export default ProtectedState
