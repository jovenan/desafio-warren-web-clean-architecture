import { HttpView } from "./../../infra";
import { FetchDataParams } from "./../../infra";

export class TransactionRepository {
    async getTransactions(params: FetchDataParams) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new HttpView().fetchSafe<any>(params);
    }
}
