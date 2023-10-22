import { IHttpResponse } from "../entity";
import { FetchDataParams, IHttpRepository } from "../repository";
export declare class HttpUseCase implements IHttpRepository {
    constructor();
    fetchData<T>(params: FetchDataParams): Promise<IHttpResponse<T>>;
}
