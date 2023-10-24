var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { describe, it } from "@jest/globals";
import { TransactionUseCase } from './TransactionUseCase';
import { mockedTransactions, mockedFilteredByStatusTransactions } from "./mocks";
jest.mock("./TransactionUseCase");
describe("TransactionUseCase", () => {
    let transactionUseCaseMocked;
    beforeEach(() => {
        transactionUseCaseMocked = jest.mocked(new TransactionUseCase());
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("should return a list of transactions", () => __awaiter(void 0, void 0, void 0, function* () {
        transactionUseCaseMocked.listTransaction.mockImplementationOnce(() => Promise.resolve(mockedTransactions));
        const result = yield transactionUseCaseMocked.listTransaction();
        expect(result).toBeTruthy();
        expect(Array.isArray(result)).toBe(true);
        expect(result).toEqual(mockedTransactions);
        expect(transactionUseCaseMocked.listTransaction).toHaveBeenCalledTimes(1);
    }));
    it("should return a list of transactions filtered by status", () => __awaiter(void 0, void 0, void 0, function* () {
        transactionUseCaseMocked.filterTransactions.mockResolvedValueOnce(mockedFilteredByStatusTransactions);
        const result = yield transactionUseCaseMocked.filterTransactions({ type: "status" });
        expect(result).toBeTruthy();
        expect(Array.isArray(result)).toBe(true);
        expect(result).toEqual(mockedFilteredByStatusTransactions);
        expect(transactionUseCaseMocked.filterTransactions).toHaveBeenCalledWith({ type: "status" });
        expect(transactionUseCaseMocked.filterTransactions).toHaveBeenCalledTimes(1);
    }));
    it("should return a list of transactions filtered by title", () => __awaiter(void 0, void 0, void 0, function* () {
        transactionUseCaseMocked.filterTransactions.mockResolvedValueOnce(mockedTransactions);
        const result = yield transactionUseCaseMocked.filterTransactions({ type: "title" });
        expect(result).toBeTruthy();
        expect(Array.isArray(result)).toBe(true);
        expect(result).toEqual(mockedTransactions);
        expect(transactionUseCaseMocked.filterTransactions).toHaveBeenCalledWith({ type: "title" });
        expect(transactionUseCaseMocked.filterTransactions).toHaveBeenCalledTimes(1);
    }));
    it("should return a transaction when getTransaction is called", () => __awaiter(void 0, void 0, void 0, function* () {
        transactionUseCaseMocked.getTransaction.mockResolvedValueOnce(mockedTransactions[0]);
        const result = yield transactionUseCaseMocked.getTransaction({ id: "5f89f9f271e4213092bd4e41" });
        expect(result).toBeTruthy();
        expect(Array.isArray(result)).toBe(false);
        expect(result).toEqual(mockedTransactions[0]);
        expect(transactionUseCaseMocked.getTransaction).toHaveBeenCalledWith({ id: "5f89f9f271e4213092bd4e41" });
        expect(transactionUseCaseMocked.getTransaction).toHaveBeenCalledTimes(1);
    }));
});
//# sourceMappingURL=TransactionUseCase.test.js.map