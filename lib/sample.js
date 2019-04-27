"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("./index");
const sha1_1 = tslib_1.__importDefault(require("sha1"));
const a = sha1_1.default(Math.random().toString()).toString();
const b = sha1_1.default(Math.random().toString()).toString();
console.log(a, b);
console.log(index_1.distance(a, b));
//# sourceMappingURL=sample.js.map