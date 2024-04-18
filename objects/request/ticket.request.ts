import {z} from "zod";

export const TicketRequestSchema = z.object({
    phoneNumber: z.string(),
    email: z.string().email(),
    address: z.string(),
    vatPayer: z.boolean(),
    materialType: z.string(),
    height: z.number(),
    length: z.number(),
    area: z.number(),
    seen: z.boolean(),
    creationDate: z.number(),
    duration: z.number()
});

export type TicketRequestSchemaType = z.infer<typeof TicketRequestSchema>;