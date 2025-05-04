import * as SecureStore from 'expo-secure-store'

export const checkTokenClient = () => {
    const token = SecureStore.getItem('token')

    return !!token
}

export const getTokenAsync = async () => {
    return await SecureStore.getItemAsync('token')
}

export const setTokenAsync = async (token: string) => {
    await SecureStore.setItemAsync('token', token)
}

export const deleteTokenAsync = async () => {
    await SecureStore.deleteItemAsync('token')
}
