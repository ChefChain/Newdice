import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

interface FirebaseCredentials {
  apiKey: string;
  authDomain: string;
  projectId: string;
}

const firebaseCredentials: FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "",
};

Object.keys(firebaseCredentials).forEach((key) => {
  const typedKey = key as keyof FirebaseCredentials;
  const configValue = firebaseCredentials[typedKey] + "";
  if (configValue.charAt(0) === '"') {
    firebaseCredentials[typedKey] = configValue.substring(
      1,
      configValue.length - 1,
    );
  }
});

export const firebaseConfig: FirebaseCredentials = firebaseCredentials;

export const firebaseApp: FirebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth: Auth = getAuth(firebaseApp);
