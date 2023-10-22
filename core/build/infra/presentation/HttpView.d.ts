import { FetchDataParams, IHttpResponse } from "../domain";
export declare class HttpView {
    private http;
    constructor();
    fetchSafe<T>(params: FetchDataParams): Promise<IHttpResponse<T>>;
}
