import { describe, it } from "@jest/globals";
import { HttpUseCase } from "./HttpUseCase";
import { IHttpRepository } from "../repository";

describe("HttpUseCase", () => {
    let httpUseCase: IHttpRepository;

    beforeEach(() => {
        httpUseCase = new HttpUseCase();
    });

    it("should have fetchData method", async () => {
        expect(httpUseCase.fetchData({url: "/transactions"})).toBeTruthy();
    });

    it("should return correct response struct on fetchData", async () => {
        const result = await httpUseCase.fetchData({url: "/transactions"});

        expect(result).toHaveProperty("status");
        expect(result).toHaveProperty("headers");
        expect(result).toHaveProperty("data");
        expect(result.status).toBe(200);
        expect(result.headers).toBeTruthy();
        expect(result.data).toBeTruthy();
    });
});