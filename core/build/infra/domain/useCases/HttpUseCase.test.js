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
describe("HttpUseCase", () => {
    let httpUseCase;
    beforeEach(() => {
        httpUseCase = new HttpUseCase();
    });
    it("should have fetchData method", () => __awaiter(void 0, void 0, void 0, function* () {
        expect(httpUseCase.fetchData({ url: "/transactions" })).toBeTruthy();
    }));
    it("should return correct response struct on fetchData", () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield httpUseCase.fetchData({ url: "/transactions" });
        expect(result).toHaveProperty("status");
        expect(result).toHaveProperty("headers");
        expect(result).toHaveProperty("data");
        expect(result.status).toBe(200);
        expect(result.headers).toBeTruthy();
        expect(result.data).toBeTruthy();
    }));
});
//# sourceMappingURL=HttpUseCase.test.js.map