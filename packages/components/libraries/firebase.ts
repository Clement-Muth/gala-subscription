import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions";
import firebase from "firebase/app";
import { firebaseConfig, IS_DEV } from "../utils/constants";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);

  if (IS_DEV) {
    firebase.firestore().useEmulator("localhost", 8080);
    firebase.auth().useEmulator("http://localhost:9099");
    firebase.storage().useEmulator("localhost", 9199);
  }
}

export const database = {
  user: firebase.firestore().collection("users"),
  formatDoc: (doc: any) => {
    return { id: doc.id, ...doc.data() };
  }
};

export const auth = firebase.auth();

export const storage = firebase.storage();
