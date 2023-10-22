import { IHttpResponse } from "../entity";
import { FetchDataParams, IHttpRepository } from "../repository";
export declare class HttpUseCase implements IHttpRepository {
    constructor();
    fetchData(params: FetchDataParams): Promise<IHttpResponse<any>>;
}
