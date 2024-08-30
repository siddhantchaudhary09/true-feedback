import {z} from 'zod'

export const SignInSchema = z.object({
    identifier:z.string(),
    passworf: z.string()
})