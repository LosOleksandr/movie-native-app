type User = {
    id: string
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
}

type UserCredentials = {
    email: string
    password: string
}

export type { User, UserCredentials }
