import {z} from 'zod'

export const MessageSchema= z.object({

    content: z.string()
    .min(10, {message:"Content must be atleast 10 chars"})
    .max(300 , {message:"Content must not be more than 300 characters"})
}) 