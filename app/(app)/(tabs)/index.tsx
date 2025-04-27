import { Link } from 'expo-router'

import SafeViewContainer from '@/components/shared/safe-view-container'
import ThemedText from '@/components/shared/themed-text'

const Page = () => {
    return (
        <SafeViewContainer className="justify-center">
            <ThemedText className="text-light">Home</ThemedText>
            <Link href="/(app)/(tabs)/search">Search</Link>
        </SafeViewContainer>
    )
}

export default Page
