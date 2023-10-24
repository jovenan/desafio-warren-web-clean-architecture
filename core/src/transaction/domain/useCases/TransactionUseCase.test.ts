import { describe, it } from "@jest/globals";
import { TransactionUseCase } from './TransactionUseCase';
import { ITransactionRepository } from "../repository";

describe("TransactionUseCase", () => {

    it("should return a list of transactions", async () => {
        const transactionUseCase: ITransactionRepository = new TransactionUseCase();
        const result = await transactionUseCase.listTransaction();

        expect(result).toBeTruthy();
        expect(Array.isArray(result)).toBe(true);
    });
});