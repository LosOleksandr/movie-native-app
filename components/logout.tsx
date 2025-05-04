import { View } from 'react-native'

import { useAuthActions } from '@/hooks/auth/use-auth-actions'

import Button from './shared/button'

const LogoutButton = () => {
    const { logoutAction } = useAuthActions()

    const { mutateAsync: logout, isPending } = logoutAction

    return (
        <View>
            <Button text="Logout" onPress={() => logout()} disabled={isPending} />
        </View>
    )
}

export default LogoutButton
