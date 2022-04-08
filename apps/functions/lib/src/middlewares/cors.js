"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
const Cors = require("cors");
const constants_1 = require("../../utils/constants");
const options = {
    methods: "GET,OPTIONS,POST,DELETE,HEAD,PATCH",
    preflightContinue: false,
    origin: constants_1.origins
};
exports.cors = Cors(options);
//# sourceMappingURL=cors.js.map