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
        this.transactionRepository = new TransactionRepository();
    }
    filterTransactions({ type }) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield new Promise((resolve) => {
                this.transactionRepository.getTransactions({ url: "/transactions" })
                    .then((response => resolve(response.data)));
            });
            if (type == "status") {
                result.sort((a, b) => {
                    const statusOrder = { "created": 1, "processing": 2, "processed": 3 };
                    return statusOrder[a.status] - statusOrder[b.status];
                });
            }
            else {
                result.sort((a, b) => {
                    return a.title.localeCompare(b.title);
                });
            }
            return result;
        });
    }
    listTransaction() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Promise((resolve) => {
                this.transactionRepository.getTransactions({ url: "/transactions" })
                    .then((response => resolve(response.data)));
            });
        });
    }
    getTransaction({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield new Promise((resolve) => {
                this.transactionRepository.getTransactions({ url: "/transactions/" + id })
                    .then((response => resolve(response.data)));
            });
        });
    }
}
//# sourceMappingURL=TransactionUseCase.js.map