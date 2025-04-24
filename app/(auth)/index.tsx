import React from 'react'

import RegisterForm from '@/components/forms/register-form'
import SafeViewContainer from '@/components/shared/safe-view-container'

const Page = () => {
    return (
        <SafeViewContainer>
            <RegisterForm />
        </SafeViewContainer>
    )
}

export default Page
