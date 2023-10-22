import { IHttpResponse } from "../entity";

export type FetchDataParams = {
    url: string
}

export interface IHttpRepository {
    fetchData<T>(params: FetchDataParams): Promise<IHttpResponse<T>>;
}
