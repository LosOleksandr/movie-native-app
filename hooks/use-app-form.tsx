import { createFormHook } from '@tanstack/react-form'

import FormField from '@/components/shared/form-field'
import SubscribeButton from '@/components/shared/subscribe-button'
import { fieldContext, formContext, useFormContext } from '@/hooks/form-context'

const { useAppForm } = createFormHook({
    fieldComponents: {
        FormField,
    },
    formComponents: {
        SubscribeButton,
    },
    fieldContext,
    formContext,
})

export { useAppForm }
