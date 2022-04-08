"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genFunctionName = void 0;
// generate function name based on dir name and filename
const genFunctionName = (dirname, filename) => {
    const dirName = dirname.split("/").slice(-1)[0].toLowerCase();
    const fileName = filename.split("/").slice(-1)[0].split(".")[0];
    const pascalFileName = fileName.substring(0, 1).toUpperCase() + fileName.substring(1);
    return `${dirName}${pascalFileName}`;
};
exports.genFunctionName = genFunctionName;
//# sourceMappingURL=functions.js.map