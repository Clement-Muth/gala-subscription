// const path = require("path");

// Copy the .env.example in the root into a .env file in this folder
require("dotenv").config();

if (process.env.error) {
  throw new Error(`Unable to load the .env file from /. Please copy .env.example to lib/`);
}

export const IS_DEV = process.env.IS_DEV == "true" ? true : false;

export const STRIPE_SECRET_KEY = process.env.STRIPE_PRIVATE_KEY;

export const origins = IS_DEV ? ["http://localhost:3005"] : ["https://gala-inscription.web.app"];

export const firebaseConfig = {
  apiKey: process.env.API_KEY!,
  appId: process.env.APP_ID!,
  authDomain: process.env.AUTH_DOMAIN!,
  databaseUrl: process.env.DATABASE_URL!,
  measurementId: process.env.MEASUREMENT_ID!,
  messagingSenderId: process.env.MESSAGING_SENDER_ID!,
  projectId: process.env.PROJECT_ID!,
  storageBucket: process.env.STORAGE_BUCKET!
};
