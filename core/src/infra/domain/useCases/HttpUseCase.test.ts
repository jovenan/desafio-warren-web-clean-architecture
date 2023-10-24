import { describe, it } from "@jest/globals";
import { HttpUseCase } from "./HttpUseCase";
import { HttpResponse } from "./mocks";

jest.mock("./HttpUseCase");

describe("HttpUseCase", () => {
    let httpUseCaseMocked: jest.MockedObjectDeep<HttpUseCase>;

    beforeEach(() => {
        httpUseCaseMocked = jest.mocked(new HttpUseCase());
        httpUseCaseMocked.fetchData.mockImplementationOnce(() => Promise.resolve(HttpResponse));
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it("should have fetchData method", async () => {
        expect(httpUseCaseMocked.fetchData({url: "/transactions"})).toBeTruthy();
    });

    it("should return correct response struct on fetchData", async () => {
        const result = await httpUseCaseMocked.fetchData({url: "/transactions"});

        expect(result).toBeTruthy();
        expect(result).toEqual(HttpResponse);
        expect(httpUseCaseMocked.fetchData).toBeCalledWith({url: "/transactions"});
        expect(httpUseCaseMocked.fetchData).toHaveBeenCalledTimes(1);
    });
});