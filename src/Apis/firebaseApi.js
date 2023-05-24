import {
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { auth, storage } from "../Config/firebase";
import { errorSlack, loginSlack, logoutSlack, slackLogin } from "./slackApi";

export const getSingleDocumentFirebase = async (collectionName, docName) => {
  // returns data
  return <></>;
};

export const getCollectionFirebase = async (collectionName, docName, sort) => {
  return <></>;
};

export const getCollectionNextFirebase = async (collectionName, docName) => {
  return <></>;
};

export const setDocumentFirebase = async (collectionName, docName, data) => {
  if (!data.createdAt) data.lastUpdated = new Date();
  data.lastUpdatedBy = auth.currentUser.uid;
  data.projectID = "project ID here";
  //returns toast
  return <></>;
};
export const addDocumentFirebase = async (collectionName, data) => {
  data.createdAt = new Date();
  data.createdBy = auth.currentUser.uid;

  //returns docID
  return <></>;
};

export const deleteDocumentFirebase = async (collectionName, docName) => {
  //returns toast
  return <></>;
};

export const uploadFileFirebase = async (
  data,
  location,
  stateLoading,
  stateData
) => {
  // only receive image,video and pdf
  const storageRef = ref(storage, `user/${auth.currentUser.uid}/${data.name}`);
  const uploadTask = uploadBytesResumable(storageRef, data);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
      if (progress !== 100) stateLoading(progress);
    },
    (error) => {
      console.log(error.message);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        const updateData = {
          ...data,
          image_url: downloadURL,
        };
        stateData(updateData);
        return updateData;
      });
    }
  );

  //returns file url
  return <></>;
};

export const deleteFileFirebase = async (fileName, location) => {
  const desertRef = ref(storage, "images/desert.jpg");
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully TOAST
    })
    .catch((error) => {
      const errorMessage = error.message;
      errorSlack(errorMessage);
    });
};

export const loginUser = async (email, password, dispatch) => {
  // ** update context state
  dispatch({ type: "REQUEST_LOGIN" });

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user.email;

      // ** update context state
      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          user: userCredential,
        },
      });

      // ** update local storage
      localStorage.setItem("currentUser", JSON.stringify(userCredential));

      // ** send log to slack
      loginSlack(user);
    })
    .catch((error) => {
      // ** update context state
      dispatch({
        type: "LOGIN_ERROR",
        error: "Incorrect email or password",
      });
      const errorMessage = error.message;

      // ** send log to slack
      errorSlack(errorMessage);
    });
};

export const logOutUser = async () => {
  const email = auth.currentUser.email;
  signOut(auth)
    .then(() => {
      logoutSlack(email);
    })
    .catch((error) => {
      errorSlack(error);
    });
  return <></>;
};

export const updateProfileFirebase = async (data) => {
  //make sure its not their email address beign change
  updateProfile(auth.currentUser, data)
    .then(() => {
      console.log("success");
      return;
    })
    .catch((error) => {
      console.log(error);
      errorSlack(error.message);
    });
};
