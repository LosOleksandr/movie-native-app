import { TextInput, type TextInputProps, View } from 'react-native'
import { type ZodIssue } from 'zod'

import { useFieldContext } from '@/hooks/form-context'
import { cn } from '@/utils/cn'

import ThemedText from './themed-text'

type Props = {
    label?: string
    validatorApapter?: 'zod' | 'default'
} & TextInputProps

const FormField = ({ placeholder = '', label, className, validatorApapter = 'default', ...rest }: Props) => {
    const field = useFieldContext<string>()

    const rawErrors = field.state.meta.errors ?? []

    const messages: string[] =
        validatorApapter === 'zod' ? (rawErrors as ZodIssue[]).map((err) => err.message) : (rawErrors as string[])

    const isErrorShown = field.state.meta.isTouched && messages.length > 0

    return (
        <View className="mb-4 w-full">
            {label && <ThemedText className="mb-2 text-sm font-medium">{label}</ThemedText>}
            <TextInput
                value={field.state.value}
                onChangeText={field.handleChange}
                placeholder={placeholder}
                className={cn(
                    'rounded-2xl border-2 p-4 text-primary',
                    isErrorShown ? 'border-danger focus:border-danger' : 'border-secondary focus:border-primary',
                )}
                {...rest}
            />
            {isErrorShown && <ThemedText className="mt-1 text-sm text-danger">{messages[0]}</ThemedText>}
        </View>
    )
}

export default FormField
