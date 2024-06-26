import {base_url} from "@/config/service.config";
import {api} from "@/config/ky.config";
import {TicketArrayResponseSchema, TicketResponseSchema} from "@/objects/response/ticket.response";
import {TicketRequestSchemaType} from "@/objects/request/ticket.request";
import {PaginationInfoResponseSchema} from "@/objects/response/paginationinfo.response";

const endpoint: string = `${base_url}/ticket`;

export const getTicket = async (id: string) => {
    return api.get(`${endpoint}/${id}`).json().then(TicketResponseSchema.parse);
}

export const getTickets = async (page: number, size: number) => {
    return api.get(`${endpoint}?page=${page}&size=${size}`).json().then(TicketArrayResponseSchema.parse);
}

export const createTicket = async (ticketRequest: TicketRequestSchemaType) => {
    return api.post(`${endpoint}`, {json: ticketRequest}).json().then(TicketResponseSchema.parse);
}

export const updateTicket = async (id: string, ticketRequest: TicketRequestSchemaType) => {
    return api.put(`${endpoint}/${id}`, {json: ticketRequest}).json().then(TicketResponseSchema.parse);
}

export const deleteTicket = async (id: string) => {
    return api.delete(`${endpoint}/${id}`);
}

export const getPaginationInfo = async (size: number) => {
    return api.get(`${endpoint}/paginationInfo?size=${size}`).json().then(PaginationInfoResponseSchema.parse);
}