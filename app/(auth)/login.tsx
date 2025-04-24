import React from 'react'

import LoginForm from '@/components/forms/login-form'
import SafeViewContainer from '@/components/shared/safe-view-container'

const Page = () => {
    return (
        <SafeViewContainer>
            <LoginForm />
        </SafeViewContainer>
    )
}

export default Page
