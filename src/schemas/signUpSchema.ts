import {z} from "zod"

export const usernameValidation =
z.string()
.min(2,"Username must be atleast 2 char")
.max(20,"Username must not be more than 20 char")
.regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special chars")

export cont signUpSchema= z.object({
    username: usernameValidation,
    email:z.string().email({message:"Invalid email"}),
    password:z.string().min(6, {messsage:password must be atleast 6 chars})
})