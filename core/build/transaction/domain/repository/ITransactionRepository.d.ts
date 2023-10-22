import { ITransaction } from "../entity";
export type FilterTransactionsParams = {
    type: "status" | "title";
};
export type GetTransactionParams = {
    id: string;
};
export interface ITransactionRepository {
    listTransaction(): Promise<ITransaction[]>;
    filterTransactions(params: FilterTransactionsParams): Promise<ITransaction[]>;
    getTransaction(params: GetTransactionParams): Promise<ITransaction>;
}
