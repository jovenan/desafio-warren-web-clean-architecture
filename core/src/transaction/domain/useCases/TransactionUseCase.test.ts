import { describe, it } from "@jest/globals";
import { TransactionUseCase } from './TransactionUseCase';
import { mockedTransactions, mockedFilteredByStatusTransactions } from "./mocks";

jest.mock("./TransactionUseCase");

describe("TransactionUseCase", () => {
    let transactionUseCaseMocked: jest.MockedObjectDeep<TransactionUseCase>;

    beforeEach(() => {
        transactionUseCaseMocked = jest.mocked(new TransactionUseCase());
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("should return a list of transactions", async () => {
        transactionUseCaseMocked.listTransaction.mockImplementationOnce(() => Promise.resolve(mockedTransactions));

        const result = await transactionUseCaseMocked.listTransaction();

        expect(result).toBeTruthy();
        expect(Array.isArray(result)).toBe(true);
        expect(result).toEqual(mockedTransactions);
        expect(transactionUseCaseMocked.listTransaction).toHaveBeenCalledTimes(1);
    });

    it("should return a list of transactions filtered by status", async () => {
        transactionUseCaseMocked.filterTransactions.mockResolvedValueOnce(mockedFilteredByStatusTransactions);

        const result = await transactionUseCaseMocked.filterTransactions({type: "status"});

        expect(result).toBeTruthy();
        expect(Array.isArray(result)).toBe(true);
        expect(result).toEqual(mockedFilteredByStatusTransactions);
        expect(transactionUseCaseMocked.filterTransactions).toHaveBeenCalledWith({type: "status"});
        expect(transactionUseCaseMocked.filterTransactions).toHaveBeenCalledTimes(1);
    });

    it("should return a list of transactions filtered by title", async () => {
        transactionUseCaseMocked.filterTransactions.mockResolvedValueOnce(mockedTransactions);

        const result = await transactionUseCaseMocked.filterTransactions({type: "title"});

        expect(result).toBeTruthy();
        expect(Array.isArray(result)).toBe(true);
        expect(result).toEqual(mockedTransactions);
        expect(transactionUseCaseMocked.filterTransactions).toHaveBeenCalledWith({type: "title"});
        expect(transactionUseCaseMocked.filterTransactions).toHaveBeenCalledTimes(1);

    });

    it("should return a transaction when getTransaction is called", async () => {
        transactionUseCaseMocked.getTransaction.mockResolvedValueOnce(mockedTransactions[0]);

        const result = await transactionUseCaseMocked.getTransaction({id: "5f89f9f271e4213092bd4e41"});

        expect(result).toBeTruthy();
        expect(Array.isArray(result)).toBe(false);
        expect(result).toEqual(mockedTransactions[0]);
        expect(transactionUseCaseMocked.getTransaction).toHaveBeenCalledWith({id: "5f89f9f271e4213092bd4e41"});
        expect(transactionUseCaseMocked.getTransaction).toHaveBeenCalledTimes(1);
    });
});