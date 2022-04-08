"use strict";
// const path = require("path");
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseConfig = exports.origins = exports.STRIPE_SECRET_KEY = exports.IS_DEV = void 0;
// Copy the .env.example in the root into a .env file in this folder
require("dotenv").config();
if (process.env.error) {
    throw new Error(`Unable to load the .env file from /. Please copy .env.example to lib/`);
}
exports.IS_DEV = process.env.IS_DEV == "true" ? true : false;
exports.STRIPE_SECRET_KEY = process.env.STRIPE_PRIVATE_KEY;
exports.origins = exports.IS_DEV ? ["http://localhost:3005"] : ["https://gala-inscription.web.app"];
exports.firebaseConfig = {
    apiKey: process.env.API_KEY,
    appId: process.env.APP_ID,
    authDomain: process.env.AUTH_DOMAIN,
    databaseUrl: process.env.DATABASE_URL,
    measurementId: process.env.MEASUREMENT_ID,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET
};
//# sourceMappingURL=constants.js.map