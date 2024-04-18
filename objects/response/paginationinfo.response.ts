import {z} from "zod";

export const PaginationInfoResponseSchema = z.object({
    totalPages: z.number()
});

export type PaginationInfoResponse = z.infer<typeof PaginationInfoResponseSchema>;