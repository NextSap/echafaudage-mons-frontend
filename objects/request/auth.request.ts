import {z} from "zod";

export const LoginRequestSchema = z.object({
    email: z.string().email({message: "Email invalide"}),
    password: z.string().min(2, {message: "Mot de passe invalide"}),
    rememberMe: z.boolean()
});

export type LoginRequestSchemaType = z.infer<typeof LoginRequestSchema>;