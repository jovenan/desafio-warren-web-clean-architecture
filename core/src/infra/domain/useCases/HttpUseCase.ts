import { IHttpResponse } from "../entity";
import { FetchDataParams, IHttpRepository } from "../repository";
import axios from "axios";


export class HttpUseCase implements IHttpRepository {
    constructor() {
        axios.defaults.baseURL  = "http://localhost:8000";
    }

    async fetchData<T>(params: FetchDataParams): Promise<IHttpResponse<T>> {
        const result = await axios.get(params.url);

        const headers: Record<string, string> = {};
        for (const key in result.headers) {
            if (typeof result.headers[key] === 'string') {
            headers[key] = result.headers[key] as string;
            }
        }

        return {
            status: result.status,
            headers: headers,
            data: result.data
        };
    }
}