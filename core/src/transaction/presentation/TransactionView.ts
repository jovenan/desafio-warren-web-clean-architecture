import { TransactionUseCase } from "../domain/useCases";
import { FilterTransactionsParams, GetTransactionParams, ITransactionRepository, SearchTransactionsParams } from "../domain";

export class TransactionView {
    private transaction: ITransactionRepository;

    constructor() {
        this.transaction = new TransactionUseCase();
    }

    async filterTransactions(params: FilterTransactionsParams) {
        return await this.transaction.filterTransactions(params);
    }

    async listTransaction() {
        return await this.transaction.listTransaction();
    }

    async getTransaction(params: GetTransactionParams) {
        return await this.transaction.getTransaction(params);
    }

    async searchTransactions(params: SearchTransactionsParams) {
        return await this.transaction.searchTransactions(params);
    }
}