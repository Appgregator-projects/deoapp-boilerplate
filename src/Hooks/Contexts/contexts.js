import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../../Config/firebase";
import { GlobalReducer, initialState } from "./reducers";

// ** You can add more context in this file
// ** Just follow the context bellow

// ** Define State Context
// ** You dont know what is context? Read this: https://reactjs.org/docs/context.html
const GlobalStateContext = createContext();

// ** Define Dispatch Context
// ** You dont know what is dipatch? Read this: https://reactjs.org/docs/hooks-reference.html#usedispatch
const GlobalDispatchContext = createContext();

// ** Define Custom Hooks
// ** You dont know what is custom hooks? Read this: https://reactjs.org/docs/hooks-custom.html
export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a AuthProvider");
  }
  return context;
}

export function useGlobalDispatch() {
  const context = useContext(GlobalDispatchContext);
  if (context === undefined) {
    throw new Error("useGlobalDisptach must be used within a AuthProvider");
  }
  return context;
}

// ** Define Provider
// ** You dont know what is provider? Read this: https://reactjs.org/docs/context.html#contextprovider
export const GlobalProvider = ({ children }) => {
  const [user, dispatch] = useReducer(GlobalReducer, initialState);

  useEffect(() => {
	const sub = onAuthStateChanged(auth, (user) => {
		if (user) {
			dispatch({ type: "AUTH_STATUS", payload: {isLoggedin : true, uid:user.uid} });
		} else {
			dispatch({ type: "AUTH_STATUS", payload:  {isLoggedin : false, uid:''} });
		}
	  });
	return () => {
		sub()
	}
  }, [])
  
  
  return (
    <GlobalStateContext.Provider value={user}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};
