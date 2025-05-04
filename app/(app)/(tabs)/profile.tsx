import LogoutButton from '@/components/logout'
import ProtectedState from '@/components/shared/protected-state'
import SafeViewContainer from '@/components/shared/safe-view-container'
import { useAuthContext } from '@/providers/auth-provider'

const Profile = () => {
    const { isAuthenticated } = useAuthContext()

    return (
        <SafeViewContainer className="items-center justify-center">
            {isAuthenticated ? <LogoutButton /> : <ProtectedState />}
        </SafeViewContainer>
    )
}

export default Profile
