"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
const admin = require("firebase-admin");
const constants_1 = require("../../utils/constants");
// NOTE: add service setting depends on your usecase. (i.e. firestore)
const firebase = admin.initializeApp({
    projectId: constants_1.firebaseConfig.projectId
});
exports.database = firebase.firestore();
//# sourceMappingURL=firebase.js.map