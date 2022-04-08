"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseAuth = void 0;
const admin = require("firebase-admin");
const firebaseAuth = async (req, res, next) => {
    if (!req.headers || !req.headers.authorization) {
        return res.status(400).json({
            message: "Authorization Header is required."
        });
    }
    const token = req.headers.authorization.split("Bearer ")[1];
    try {
        await admin.auth().verifyIdToken(token);
        return next();
    }
    catch (err) {
        console.warn(err);
        return res.status(401).json({
            message: "credential is not correct."
        });
    }
};
exports.firebaseAuth = firebaseAuth;
//# sourceMappingURL=firebaseAuth.js.map