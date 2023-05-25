import axios from "axios";
import store from "store";

const config = {
  // baseURL: 'https://dev-api.importir.com', // Ubah ke API staging jika perlu
  baseURL: "https://new-apiv2.importir.com", // Ubah ke API production jika perlu
  timeout: 60 * 1000, // Timeout
};

const axiosInstance = axios.create(config);

axiosInstance.interceptors.request.use(async (config) => {
  let user = await store.get("user_token");
  const userStorage = user && user;
  const token = userStorage;

  if (userStorage) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    // Lakukan sesuatu dengan data response
    response = typeof response.data !== "undefined" ? response.data : response;
    return response;
  },

  function (error) {
    if (error.response.status === 404) {
      // return window.location.href = '/error/error-404'
    } else if (error.response.status === 401) {
      //  return window.location.href = '/error/error-401'
    }
    console.log(error);
    return Promise.reject(error);
  }
);

export default axiosInstance;

// EXAMPLE CALL API

export const getDataApiBearer = async (url) => {
  try {
    const res = await axiosInstance.get(url);
    console.log(res.data, "ini res");
    return res.data;
  } catch (error) {
    console.log(error, "ini error");
    throw error;
  }
};

// Example Get Data

// const getData = async () => {
//     try {
//         const response = await getDataApiBearer('/api/');
//         console.log(response);
//         // Lakukan sesuatu dengan data response
//       } catch (error) {
//         console.log(error);
//         // Tangani error dengan cara yang sesuai
//       }
// }

// Finish

export const postDataApiBearer = async (url, data) => {
  try {
    const res = await axiosInstance.post(url, data);
    console.log(res.data, "ini res");
    return res.data;
  } catch (error) {
    console.log(error, "ini error");
    throw error;
  }
};

// Example post data

// const postData = async () => {
//   const newData = { name: "John Doe", age: 30 };
//   try {
//     const response = await postDataApiBearer("/api/", newData);
//     console.log(response);
//     // Lakukan sesuatu dengan data response
//   } catch (error) {
//     console.log(error);
//     // Tangani error dengan cara yang sesuai
//   }
// };
// //Finish

export const deleteDataApiBearer = async (url) => {
  try {
    const res = await axiosInstance.delete(url);
    console.log(res.data, "ini res");
    return res.data;
  } catch (error) {
    console.log(error, "ini error");
    throw error;
  }
};

// Example Delete Data 

// const deleteData = async () => {
//     const idToDelete = 123;
//     try {
//       const response = await deleteDataApiBearer(`/api/${idToDelete}`);
//       console.log(response);
//       // Lakukan sesuatu dengan data response
//     } catch (error) {
//       console.log(error);
//       // Tangani error dengan cara yang sesuai
//     }
    
// }

// Finish

export const updateDataApiBearer = async (url, data) => {
  try {
    const res = await axiosInstance.put(url, data);
    console.log(res.data, "ini res");
    return res.data;
  } catch (error) {
    console.log(error, "ini error");
    throw error;
  }
};

//Example Update Data 

// const updateData = async () => {
//     const idToUpdate = 456;
//     const updatedData = { name: 'Jane Doe', age: 35 };
//     try {
//       const response = await updateDataApiBearer(`/api/${idToUpdate}`, updatedData);
//       console.log(response);
//       // Lakukan sesuatu dengan data response
//     } catch (error) {
//       console.log(error);
//       // Tangani error dengan cara yang sesuai
//     }
    
// }

// Finish
