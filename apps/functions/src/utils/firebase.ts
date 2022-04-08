import * as admin from "firebase-admin";
import { firebaseConfig } from "../../utils/constants";

// NOTE: add service setting depends on your usecase. (i.e. firestore)
const firebase = admin.initializeApp({
  projectId: firebaseConfig.projectId
});

export const database = firebase.firestore();
