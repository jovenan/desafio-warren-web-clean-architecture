import { FetchDataParams } from "./../../infra";
export declare class TransactionRepository {
    getTransactions(params: FetchDataParams): Promise<import("./../../infra").IHttpResponse<any>>;
}
