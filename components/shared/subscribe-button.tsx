import { useFormContext } from '@/hooks/form-context'

import Button from './button'

import type { ButtonProps } from './button'

type SubscribeButtonProps = ButtonProps

const SubscribeButton = (props: SubscribeButtonProps) => {
    const form = useFormContext()

    return (
        <form.Subscribe selector={(state) => state.isSubmitting}>
            {(isSubmitting) => (
                <Button
                    {...props}
                    disabled={isSubmitting}
                    intent={'accent'}
                    font={'bold'}
                    onPress={form.handleSubmit}
                />
            )}
        </form.Subscribe>
    )
}

export default SubscribeButton
