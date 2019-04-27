"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("distance", () => {
    test("success", () => {
        expect(index_1.distance("d81dba5c3daa3b9b71cf379732d1f0512a5bca5a", "68eb2a737ceaca0b65b6cbd381221c846fa357da")).toBe(156);
    });
    test("error", () => {
        expect(() => index_1.distance("d81dba5c3daa3b9b71cf379732d1f0512a5bca5a:", "a")).toThrow();
    });
});
//# sourceMappingURL=index.test.js.map