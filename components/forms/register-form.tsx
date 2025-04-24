import { Link, router } from 'expo-router'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { AnimatedView } from 'react-native-reanimated/lib/typescript/component/View'
import { z } from 'zod'

import { authAPI } from '@/api/auth'
import { useAppForm } from '@/hooks/use-app-form'

import ThemedText from '../shared/themed-text'
import FadeInContainer from '../shared/fade-in-container'

const registerSchema = z
    .object({
        email: z
            .string({ invalid_type_error: 'Email must be a string' })
            .min(1, { message: 'Email is required' })
            .email({ message: 'Invalid email format' }),
        password: z
            .string({ invalid_type_error: 'Password must be a string' })
            .min(1, 'Password is required')
            .min(8, { message: 'Password must be at least 8 characters' })
            .refine((val) => /[a-z]/.test(val), {
                message: 'Password must contain at least one lowercase letter',
            })
            .refine((val) => /[A-Z]/.test(val), {
                message: 'Password must contain at least one uppercase letter',
            })
            .refine((val) => /\d/.test(val), {
                message: 'Password must contain at least one number',
            })
            .refine((val) => /^[A-Za-z\d]{8,}$/.test(val), {
                message: 'Password must contain only letters and digits',
            }),
        confirm: z.string().min(1, { message: 'Please confirm your password' }),
    })
    .refine((data) => data.password === data.confirm, {
        path: ['confirm'],
        message: "Passwords don't match",
    })

const RegisterForm = () => {
    const [submitError, setSubmitError] = useState('')

    const form = useAppForm({
        defaultValues: {
            email: '',
            password: '',
            confirm: '',
        },

        onSubmit: async ({ value }) => {
            try {
                await authAPI.register(value)

                router.push('/(app)/(tabs)')
            } catch (error) {
                if (error instanceof Error) {
                    setSubmitError(error.message)
                } else {
                    setSubmitError('Unexpected error')
                }
            }
        },

        validators: {
            onChange: registerSchema,
        },
    })

    return (
        <FadeInContainer className="justify-center gap-4 p-6">
            <ThemedText align={'center'} size={'2xl'} font={'bold'} className="mb-4">
                Create an account
            </ThemedText>
            <form.AppField
                name="email"
                children={(field) => <field.FormField label="Email" validatorApapter="zod" />}
            />
            <form.AppField
                name="password"
                children={(field) => <field.FormField label="Password" validatorApapter="zod" secureTextEntry />}
            />
            <form.AppField
                name="confirm"
                children={(field) => (
                    <field.FormField label="Confirm password" validatorApapter="zod" secureTextEntry />
                )}
            />
            {submitError && <Text className="my-4 text-center text-red-500">{submitError}</Text>}
            <form.AppForm>
                <form.SubscribeButton text="Signup" />
            </form.AppForm>
            <Link href={'/(auth)/login'} className="text-md mt-4 max-w-max self-center text-secondary underline">
                Already have an account? Log in
            </Link>
        </FadeInContainer>
    )
}

export default RegisterForm
