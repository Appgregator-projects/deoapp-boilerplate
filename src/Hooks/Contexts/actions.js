import axios from "axios";
import { getCollectionFirebase, getSingleDocumentFirebase } from "../../Apis/firebaseApi";

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

export async function getProjects(dispatch, uid) {
	const newData = []

	getCollectionFirebase('projects',  { field: "team", operator: "array-contains", value: uid })
	.then((x)=>{
		console.log(x)
		x.map((y)=>newData.push({id:y.id,name:y.name}))
		dispatch({
		   type: "PROJECTS",
		   payload: {
		   projects: newData,
		   }
	   })
	   currentProject(dispatch,uid,newData[0])
   }) 

   const currentProject=(dispatch,uid,firstProject)=>{
	//    console.log(uid,'ini uid di current project')
	getSingleDocumentFirebase('users',uid)
	.then((x)=>{
		dispatch({
			type: "CURRENT_PROJECTS",
		   payload: {
			currentProject: x.currentProject?x.currentProject:firstProject,
		   }
		})
		console.log(x)
	})

   }

}
 
