import useFirebaseAuth from "@/hooks/useFirebaseAuth";
import React, { createContext, useContext, ReactNode } from "react";

// Define the type for the authentication context
interface AuthContextType {
  authUser: { uid: string; email: string | null } | null;
  loading: boolean;
}

// Create the context with a default value
const authUserContext = createContext<AuthContextType>({
  authUser: null,
  loading: true,
});

// Define the props for the AuthUserProvider component
interface AuthUserProviderProps {
  children: ReactNode;
}

export function AuthUserProvider({ children }: AuthUserProviderProps) {
  const auth = useFirebaseAuth();
  return (
    <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
  );
}

// Custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);
