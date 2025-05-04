import ProtectedState from '@/components/shared/protected-state'
import SafeViewContainer from '@/components/shared/safe-view-container'
import ThemedText from '@/components/shared/themed-text'
import { useAuthContext } from '@/providers/auth-provider'

const Page = () => {
    const { isAuthenticated } = useAuthContext()
    return (
        <SafeViewContainer className="items-center justify-center">
            {isAuthenticated ? (
                <ThemedText size={'2xl'} font={'semibold'}>
                    Your saved movies here
                </ThemedText>
            ) : (
                <ProtectedState />
            )}
        </SafeViewContainer>
    )
}

export default Page
