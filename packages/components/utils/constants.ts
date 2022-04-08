export const IS_DEV = process.env.IS_DEV === "true";

export const firebaseConfig = {
  apiKey: process.env.API_KEY!,
  authDomain: process.env.AUTH_DOMAIN!,
  projectId: process.env.PROJECT_ID!,
  storageBucket: process.env.STORAGE_BUCKET!,
  messagingSenderId: process.env.MESSAGEING_SENDER_ID!,
  appId: process.env.APP_ID!
};

export const api_key_vision = process.env.API_KEY_VISION!;

export const stripe_public_key = process.env.STRIPE_PUBLIC_KEY!;
