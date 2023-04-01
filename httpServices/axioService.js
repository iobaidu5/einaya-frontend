import axios from "axios";
import { verifyExpiry, getSession } from "/customHooks";
// import { postAPI } from "./"
// import { openMessage } from "components/notification/notification";
// import { unauthorized } from "./unauthorized"
/*to check if same request in queue*/

// const access_token = getSession("access_token");
/*Expired token not allowed in refresh token request*/

/* Setting request headers*/
// axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
// axios.defaults.headers.common["Content-Type"] = "application/json";

/*Attaching token in request if got from storage*/
axios.interceptors.request.use(

  (config) => {
    //Add config heer
    verifyExpiry();
    if (getSession("access_token")) {
      config.headers.common["Authorization"] = `Bearer ${getSession("access_token")}`;
      config.headers.common["X-Company-Key"] = getSession("companyKey");
    }
    // else {
    //   config.headers.common["Authorization"] = "";
    // }
    return config;
  },
  (error) => {
    /*Error Handling*/
    return Promise.reject(error);
  }
);


// Response interceptor for API calls
// axios.interceptors.response.use((response) => {
//   return response
// }, async function (error) {
//   const originalRequest = error.config;
//   console.log("testing called", error, originalRequest)
//   if (error.response.status === 401 && originalRequest._retry !== true) {
//     console.log("entered")
//     originalRequest._retry = true;
//     delete axios.defaults.headers.common["Authorization"];
//     const access_token = await postAPI({ endPoint: "login/verifyToken", requestData: { refresh_token } });
//     // axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
//     // return axiosApiInstance(originalRequest);
//   }
//   return Promise.reject(error);
// });


// /*Intercepting the response in case of specif status codes*/
// axios.interceptors.response.use(
//   function (success) {
//     // handle generic cases
//     return Promise.resolve(success)
//   },
//   function (error) {
//     if (error.response.status === 403) {
//       localStorage.clear()
//       window.location.reload();
//       // unauthorized()
//       // return Promise.reject(error);
//     }
//     // if (error.response && error.response.data && error.response.data.message) {
//     //   /*Showing response from the server*/
//     //   let errorMessage = error.response.data.message;
//     //   /*Showing response from local*/
//     //   openMessage({ description: errorMessage });

//     // } else {
//     //   /*Showing response from local*/
//     //   openMessage({ description: "Error" });
//     // }

//     /*if all above process failes breaking the queue*/
//     return Promise.reject(error);
//   }
// );

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
