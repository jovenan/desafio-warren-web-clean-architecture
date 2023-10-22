import { ITransaction } from "../entity";
import { ITransactionRepository, FilterTransactionsParams, GetTransactionParams } from "../repository";
export declare class TransactionUseCase implements ITransactionRepository {
    private transactionRepository;
    constructor();
    filterTransactions({ type }: FilterTransactionsParams): Promise<ITransaction[]>;
    listTransaction(): Promise<ITransaction[]>;
    getTransaction({ id }: GetTransactionParams): Promise<ITransaction>;
}
