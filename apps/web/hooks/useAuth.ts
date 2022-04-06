import { AuthContext } from "@contexts/AuthContext";
import { MeT } from "components/interfaces/user";
import firebase from "firebase/app";
import React from "react";

export type Provider = "google.com" | "github.com" | "microsoft.com" | "password";

export type User = firebase.User & { token: string; provider: Provider };

type ProviderAuthT = {
  currentUser: User & MeT;
  setProvider: (provider: Provider) => void;
  provider: Provider;
  signup: (email: any, password: any, passwordConfirm: string) => Promise<firebase.auth.UserCredential>;
  signin: (email: any, password: any) => Promise<firebase.auth.UserCredential>;
  checkEmail: (emai: string) => Promise<boolean>;
  googleLogin: () => Promise<firebase.auth.UserCredential>;
  microsoftLogin: () => Promise<firebase.auth.UserCredential>;
  githubLogin: () => Promise<firebase.auth.UserCredential>;
  logout: () => Promise<void>;
  resetPassword: (email: any) => Promise<void>;
  updateEmail: (email: any) => any;
  updatePassword: (password: any) => any;
};

export const useAuth = (): ProviderAuthT => {
  return React.useContext(AuthContext);
};
