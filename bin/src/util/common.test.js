"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
describe("common", () => {
    describe("promiseAny", () => {
        it("should return the first resolved promise", () => __awaiter(void 0, void 0, void 0, function* () {
            const promises = [
                new Promise((resolve) => setTimeout(() => resolve(1), 100)),
                new Promise((resolve) => setTimeout(() => resolve(2), 200)),
                new Promise((resolve) => setTimeout(() => resolve(3), 300)),
            ];
            const result = yield (0, common_1.promiseAny)(promises);
            expect(result).toEqual(1);
        }));
        it("throws an error if all promises are rejected", () => __awaiter(void 0, void 0, void 0, function* () {
            const promises = [
                new Promise((_, reject) => setTimeout(() => reject(1), 100)),
                new Promise((_, reject) => setTimeout(() => reject(2), 200)),
                new Promise((_, reject) => setTimeout(() => reject(3), 300)),
            ];
            yield expect((0, common_1.promiseAny)(promises)).rejects.toEqual([1, 2, 3]);
        }));
    });
});
