import { Link } from 'expo-router'
import { z } from 'zod'

import { useAuthActions } from '@/hooks/auth/use-auth-actions'
import { useAppForm } from '@/hooks/use-app-form'

import FadeInContainer from '../shared/fade-in-container'
import ThemedText from '../shared/themed-text'

const loginSchema = z.object({
    email: z
        .string({ invalid_type_error: 'Email must be a string' })
        .min(1, 'Email is required')
        .email({ message: 'Invalid email format' }),
    password: z.string({ invalid_type_error: 'Password must be a string' }).min(1, { message: 'Password is required' }),
})

const LoginForm = () => {
    const { loginAction } = useAuthActions()

    const { mutateAsync: login, error, isError } = loginAction

    const form = useAppForm({
        defaultValues: {
            email: '',
            password: '',
        },
        validators: {
            onChange: loginSchema,
        },
        onSubmit: async ({ value }) => {
            await login(value)
        },
    })

    return (
        <FadeInContainer className="justify-center gap-4 p-6">
            <ThemedText size={'2xl'} font={'bold'} align={'center'} className="mb-4">
                Login
            </ThemedText>
            <form.AppField
                name="email"
                children={(field) => <field.FormField label="Email" validatorApapter="zod" />}
            />
            <form.AppField
                name="password"
                children={(field) => <field.FormField label="Password" validatorApapter="zod" secureTextEntry />}
            />
            {isError && (
                <ThemedText align={'center'} size={'base'} intent={'danger'}>
                    {error.message}
                </ThemedText>
            )}
            <form.AppForm>
                <form.SubscribeButton text="Login" />
            </form.AppForm>
            <Link href={'/(auth)'} className="text-md mt-4 max-w-max self-center text-secondary underline">
                Do not have an account? Create one
            </Link>
        </FadeInContainer>
    )
}

export default LoginForm
