import { ITransaction } from "../entity";

export type FilterTransactionsParams = {
    type: "created" | "processing" | "processed";
}

export type GetTransactionParams = {
    id: string
}

export type SearchTransactionsParams = {
    word: string
}

export interface ITransactionRepository {
    listTransaction(): Promise<ITransaction[]>;
    filterTransactions(params: FilterTransactionsParams): Promise<ITransaction[]>;
    getTransaction(params: GetTransactionParams): Promise<ITransaction | null>;
    searchTransactions(params: SearchTransactionsParams): Promise<ITransaction[] | []>;
}
