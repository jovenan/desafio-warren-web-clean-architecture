import { TransactionRepository } from "../../database";
import { ITransaction } from "../entity";
import { ITransactionRepository, FilterTransactionsParams, GetTransactionParams, SearchTransactionsParams } from "../repository";

export class TransactionUseCase implements ITransactionRepository {
    private transactions: Promise<ITransaction[]>;

    constructor() {
        const transactionRepository = new TransactionRepository();
        this.transactions = new Promise((resolve) => {
            transactionRepository.getTransactions({url: "/transactions"})
                .then((response => {
                    const result = response.data;
                    const sortedResultByDate: ITransaction[] = result.sort((a: ITransaction, b: ITransaction) => {
                        const dateA: Date= new Date(a.date);
                        const dateB: Date = new Date(b.date);
                        return dateB.getTime() - dateA.getTime();
                    });
                    resolve(sortedResultByDate);
                }));
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

    async searchTransactions({ word }: SearchTransactionsParams): Promise<ITransaction[] | []> {
        const transactions = await this.transactions;

        return transactions.filter(transaction => transaction.title.toLowerCase().startsWith(word.toLowerCase())) || [];
    }
}