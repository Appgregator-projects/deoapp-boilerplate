// ** Define the data that will be stored in context
let user = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : "";

// ** Define context initial state
export const initialState = {
  user: "" || user,
  loading: false,
  toggleNavbar: true,
};

// ** Define the context reducer
// ** you still don't know reducer? read this: https://reactjs.org/docs/hooks-reference.html#usereducer , and buy some ram
export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };

    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        loading: false,
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: "",
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
