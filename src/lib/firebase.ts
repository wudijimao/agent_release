import {
  getApp,
  getApps,
  initializeApp,
  type FirebaseOptions,
} from "firebase/app";
import {
  getAnalytics,
  isSupported,
  setUserId,
  setUserProperties,
  type Analytics,
} from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyDxhwuLh8GepC3h_RQf4TUKfO_louO2S7U",
  authDomain: "helia-1da25.firebaseapp.com",
  projectId: "helia-1da25",
  storageBucket: "helia-1da25.firebasestorage.app",
  messagingSenderId: "177195750478",
  appId: "1:177195750478:web:e2e09b8d0cfa1bbe89df1f",
  measurementId: "G-1N0WJ6XFKR",
} satisfies FirebaseOptions;

export const firebaseApp = getApps().length > 0
  ? getApp()
  : initializeApp(firebaseConfig);

let analyticsPromise: Promise<Analytics | null> | null = null;

export function initializeFirebaseAnalytics() {
  if (typeof window === "undefined") return Promise.resolve(null);

  analyticsPromise ??= isSupported()
    .then((supported) => supported ? getAnalytics(firebaseApp) : null)
    .catch(() => null);

  return analyticsPromise;
}

export function setFirebaseAnalyticsUser(
  userId: string | null,
  labRole: string | null,
) {
  return initializeFirebaseAnalytics()
    .then((analytics) => {
      if (!analytics) return;

      setUserId(analytics, userId);
      setUserProperties(analytics, { lab_role: labRole });
    })
    .catch(() => undefined);
}
