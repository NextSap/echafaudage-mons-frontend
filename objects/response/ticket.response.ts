import {z} from "zod";

export const TicketResponseSchema = z.object({
    id: z.number(),
    name: z.string(),
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
    duration: z.number(),
    estimatedPrice: z.number(),
    vatNumber: z.string(),
    sale: z.boolean(),
});

export const TicketArrayResponseSchema = z.array(TicketResponseSchema);

export type TicketResponseSchemaType = z.infer<typeof TicketResponseSchema>;
export type TicketArrayResponseSchemaType = z.infer<typeof TicketArrayResponseSchema>;