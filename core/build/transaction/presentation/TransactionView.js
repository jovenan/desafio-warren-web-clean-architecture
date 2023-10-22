var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TransactionUseCase } from "../domain/useCases";
export class TransactionView {
    constructor() {
        this.transaction = new TransactionUseCase();
    }
    filterTransactions(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.transaction.filterTransactions(params);
        });
    }
    listTransaction() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.transaction.listTransaction();
        });
    }
    getTransaction(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.transaction.getTransaction(params);
        });
    }
}
//# sourceMappingURL=TransactionView.js.map