import { useState, useEffect } from "react";
import {
  onAuthStateChanged as _onAuthStateChanged,
  User as FirebaseUser,
  Unsubscribe,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

// Define the structure of a formatted user
interface FormattedAuthUser {
  uid: string;
  email: string | null;
}

// Utility function to format Firebase user
const formatAuthUser = (user: FirebaseUser): FormattedAuthUser => ({
  uid: user.uid,
  email: user.email,
});

// Custom hook
export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<FormattedAuthUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Handle auth state change
  const authStateChanged = async (
    authState: FirebaseUser | null,
  ): Promise<void> => {
    if (!authState) {
      setAuthUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);
    setLoading(false);
  };

  // Listen for auth state changes
  const onAuthStateChanged = (
    cb: (user: FirebaseUser | null) => void,
  ): Unsubscribe => {
    return _onAuthStateChanged(auth, cb);
  };

  // Subscribe to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
  };
}
