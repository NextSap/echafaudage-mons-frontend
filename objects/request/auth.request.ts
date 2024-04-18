import {z} from "zod";

export const LoginRequestSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    rememberMe: z.boolean()
});

export type LoginRequestSchemaType = z.infer<typeof LoginRequestSchema>;