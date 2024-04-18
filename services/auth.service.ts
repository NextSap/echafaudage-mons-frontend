import {base_url} from "@/config/service.config";
import {LoginRequestSchemaType} from "@/objects/request/auth.request";
import {api} from "@/config/ky.config";
import {LoginResponseSchema} from "@/objects/response/auth.response";

const endpoint: string = `${base_url}/auth`;

export const login = async (loginRequest: LoginRequestSchemaType) => {
    return await api.post(`${endpoint}/login`, {json: loginRequest}).json().then(LoginResponseSchema.parse);
}