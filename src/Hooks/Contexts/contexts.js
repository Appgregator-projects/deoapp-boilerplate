import React, { createContext, useContext, useReducer } from "react";
import { AuthReducer, initialState } from "./reducers";

// ** You can add more context in this file
// ** Just follow the context bellow

// ** Define State Context
// ** You dont know what is context? Read this: https://reactjs.org/docs/context.html
const AuthStateContext = createContext();

// ** Define Dispatch Context
// ** You dont know what is dipatch? Read this: https://reactjs.org/docs/hooks-reference.html#usedispatch
const AuthDispatchContext = createContext();

// ** Define Custom Hooks
// ** You dont know what is custom hooks? Read this: https://reactjs.org/docs/hooks-custom.html
export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }
  return context;
}

// ** Define Provider
// ** You dont know what is provider? Read this: https://reactjs.org/docs/context.html#contextprovider
export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
