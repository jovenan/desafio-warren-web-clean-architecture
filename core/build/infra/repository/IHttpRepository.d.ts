import { IHttpResponse } from "../entity";
export type FetchDataParams = {
    url: string;
};
export interface IHttpRepository {
    fetchData(params: FetchDataParams): Promise<IHttpResponse<any>>;
}
