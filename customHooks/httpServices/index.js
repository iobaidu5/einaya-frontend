// import http from "./axioService";
// import { getSession } from "/customHooks";

// export const httpServices = () => {
//   const { setSnackBarState } = useAppContext();
//   let baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/`;
//   let microServices = {
//     // registration: `${baseUrl}registration/v1/`,
//   };
//   async function postAPI({ service, endPoint, requestData, options }) {
//     try {
//       const { data } = await http.post(
//         `${service ? microServices[service] : baseUrl}${endPoint}`,
//         requestData,
//         // {
//         //   headers: {
//         //     msisdn: getSession("user"),
//         //     language: "en",
//         //     channel: "web",
//         //     deviceId: "1234567",
//         //   },
//         // }
//       );
//       return data;
//     } catch (response) {

//       setSnackBarState({
//         open: true, variant: "error", message: response?.responseMessage || "Something went wrong.",
//         autoHideDuration: 3000
//       })
//       return response;
//     }
//   }
//   async function updateAPI({ service, endPoint, requestData, options }) {
//     try {
//       const { data } = await http.put(
//         `${service ? microServices[service] : baseUrl}${endPoint}`,
//         requestData,
//         options
//       );
//       return data;
//     } catch ({ response }) {
//       return response?.data;
//     }
//   }
//   async function retrieveAPI({ service, endPoint, params, responseType }) {
//     try {
//       const { data } = await http.get(
//         `${service ? microServices[service] : baseUrl}${endPoint}`,
//         { params, responseType }
//       );
//       return data;
//     } catch ({ response }) {
//       return response?.data;
//     }
//   }
//   async function deleteAPI({ service, endPoint, params }) {
//     try {
//       const { data } = await http.delete(
//         `${service ? microServices[service] : baseUrl}${endPoint}`,
//         { data: params }
//       );
//       return data;
//     } catch ({ response }) {
//       return response?.data;
//     }
//   }

//   return { postAPI, updateAPI, retrieveAPI, deleteAPI };
// }

