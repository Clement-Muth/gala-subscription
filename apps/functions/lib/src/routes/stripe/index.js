"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
const payment_1 = require("./payment");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.use(payment_1.payment);
exports.stripe = { router, name: "stripe" };
//# sourceMappingURL=index.js.map