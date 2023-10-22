import { FilterTransactionsParams, GetTransactionParams } from "../domain";
export declare class TransactionView {
    private transaction;
    constructor();
    filterTransactions(params: FilterTransactionsParams): Promise<import("../domain").ITransaction[]>;
    listTransaction(): Promise<import("../domain").ITransaction[]>;
    getTransaction(params: GetTransactionParams): Promise<import("../domain").ITransaction>;
}
