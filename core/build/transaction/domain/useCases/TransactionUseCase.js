var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TransactionRepository } from "../../database";
export class TransactionUseCase {
    constructor() {
        const transactionRepository = new TransactionRepository();
        this.transactions = new Promise((resolve) => {
            transactionRepository.getTransactions({ url: "/transactions" })
                .then((response => {
                const result = response.data;
                const sortedResultByDate = result.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateB.getTime() - dateA.getTime();
                });
                resolve(sortedResultByDate);
            }));
        });
    }
    listTransaction() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.transactions;
        });
    }
    filterTransactions({ type }) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactions = yield this.transactions;
            return transactions.filter((transaction) => transaction.status == type) || [];
        });
    }
    getTransaction({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactions = yield this.transactions;
            return transactions.find((transaction) => transaction.id == id) || null;
        });
    }
    searchTransactions({ word }) {
        return __awaiter(this, void 0, void 0, function* () {
            const transactions = yield this.transactions;
            return transactions.filter(transaction => transaction.title.toLowerCase().startsWith(word.toLowerCase())) || [];
        });
    }
}
//# sourceMappingURL=TransactionUseCase.js.map