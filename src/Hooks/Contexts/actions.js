import axios from "axios";

export async function LoginUser(dispatch, loginPayload) {
  const { email, password } = loginPayload;
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    // const response = await axios.post("https://reqres.in/api/login", {
    //   email,
    //   password
    // });
    const response = await axios.post("https://reqres.in/api/login", {
      email,
      password,
    });
    console.log(response);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", error: error });
  }
}
