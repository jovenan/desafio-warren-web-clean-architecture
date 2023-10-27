import { FilterTransactionsParams, GetTransactionParams, SearchTransactionsParams } from "../domain";
export declare class TransactionView {
    private transaction;
    constructor();
    filterTransactions(params: FilterTransactionsParams): Promise<import("../domain").ITransaction[]>;
    listTransaction(): Promise<import("../domain").ITransaction[]>;
    getTransaction(params: GetTransactionParams): Promise<import("../domain").ITransaction | null>;
    searchTransactions(params: SearchTransactionsParams): Promise<import("../domain").ITransaction[] | []>;
}
