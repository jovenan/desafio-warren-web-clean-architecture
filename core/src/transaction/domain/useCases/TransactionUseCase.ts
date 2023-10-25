import { TransactionRepository } from "../../database";
import { ITransaction } from "../entity";
import { ITransactionRepository, FilterTransactionsParams, GetTransactionParams } from "../repository";

export class TransactionUseCase implements ITransactionRepository {
    private transactions: Promise<ITransaction[]>;

    constructor() {
        const transactionRepository = new TransactionRepository();
        this.transactions = new Promise((resolve) => {
            transactionRepository.getTransactions({url: "/transactions"})
                .then((response => resolve(response.data)));
        });
    }

    async listTransaction(): Promise<ITransaction[]> {
        return this.transactions;
    }

    async filterTransactions({ type }: FilterTransactionsParams): Promise<ITransaction[]> {
        const transactions = await this.transactions;

        return transactions.filter((transaction) => transaction.status == type) || [];
    }

    async getTransaction({ id }: GetTransactionParams): Promise<ITransaction | null> {
        const transactions = await this.transactions;

        return transactions.find((transaction) => transaction.id == id) || null;
    }
}