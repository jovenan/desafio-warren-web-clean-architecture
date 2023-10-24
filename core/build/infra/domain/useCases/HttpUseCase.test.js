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
import { HttpUseCase } from "./HttpUseCase";
import { HttpResponse } from "./mocks";
jest.mock("./HttpUseCase");
describe("HttpUseCase", () => {
    let httpUseCaseMocked;
    beforeEach(() => {
        httpUseCaseMocked = jest.mocked(new HttpUseCase());
        httpUseCaseMocked.fetchData.mockImplementationOnce(() => Promise.resolve(HttpResponse));
    });
    afterEach(() => {
        jest.resetAllMocks();
    });
    it("should have fetchData method", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(httpUseCaseMocked.fetchData({ url: "/transactions" })).toBeTruthy();
    }));
    it("should return correct response struct on fetchData", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield httpUseCaseMocked.fetchData({ url: "/transactions" });
        expect(result).toBeTruthy();
        expect(result).toEqual(HttpResponse);
        expect(httpUseCaseMocked.fetchData).toBeCalledWith({ url: "/transactions" });
        expect(httpUseCaseMocked.fetchData).toHaveBeenCalledTimes(1);
    }));
});
//# sourceMappingURL=HttpUseCase.test.js.map