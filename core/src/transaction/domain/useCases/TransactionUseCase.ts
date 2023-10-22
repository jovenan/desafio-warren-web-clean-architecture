import { TransactionRepository } from "../../database";
import { ITransaction } from "../entity";
import { ITransactionRepository, FilterTransactionsParams, GetTransactionParams } from "../repository";

export class TransactionUseCase implements ITransactionRepository {
    private transactionRepository: TransactionRepository;

    constructor() {
        this.transactionRepository = new TransactionRepository();
    }

    async filterTransactions({ type }: FilterTransactionsParams): Promise<ITransaction[]> {
        const result = await new Promise((resolve) => {
            this.transactionRepository.getTransactions({url: "/transactions"})
                .then((response => resolve(response.data)));
        }) as ITransaction[];

        if(type == "status") {
            result.sort((a, b) => {
                const statusOrder: { [key: string]: number } = { "created": 1, "processing": 2, "processed": 3 };
                return statusOrder[a.status] - statusOrder[b.status];
            });
        } else {
            result.sort((a, b) => {
                return a.title.localeCompare(b.title);
            });
        }

        return result;
    }

    async listTransaction(): Promise<ITransaction[]> {
        return await new Promise((resolve) => {
            this.transactionRepository.getTransactions({url: "/transactions"})
                .then((response => resolve(response.data)));
        });
    }

    async getTransaction({ id }: GetTransactionParams): Promise<ITransaction> {
        return await new Promise((resolve) => {
            this.transactionRepository.getTransactions({url: "/transactions/" + id})
                .then((response => resolve(response.data)));
        });
    }
}