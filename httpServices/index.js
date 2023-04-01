import http from "./axioService";
let baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/`;
import { getSession } from "/customHooks";
let microServices = {
  // registration: `${baseUrl}registration/v1/`,
  // registrationV2: `${baseUrl}registration/v2/`,
  // registrationV3: `${baseUrl}registration/v3/`,
  // tokenTax: `${baseUrl}token-tax/v1/`,
  // mvrs: `${baseUrl}mvrs/v2/`,
  // onboarding: `${baseUrl}onboarding/v1/`,
};

async function postAPI({ service, endPoint, requestData, options }) {
  try {
    const { data } = await http.post(
      `${service ? microServices[service] : baseUrl}${endPoint}`,
      requestData,
      {
        ...options,
        params: {
          companyId: getSession("company")?.id,
          ...options?.params,
        },
      }
    );
    return data;
  } catch ({ response }) {
    return response?.data;
  }
}
async function updateAPI({ service, endPoint, requestData, options }) {
  try {
    const { data } = await http.put(
      `${service ? microServices[service] : baseUrl}${endPoint}`,
      requestData,
      {
        ...options,
        params: {
          companyId: getSession("company")?.id,
          ...options?.params,
        },
      }
    );
    return data;
  } catch ({ response }) {
    return response?.data;
  }
}
async function retrieveAPI({ service, endPoint, params, responseType }) {
  try {
    const { data } = await http.get(
      `${service ? microServices[service] : baseUrl}${endPoint}`,
      { params, responseType }
    );
    return data;
  } catch ({ response }) {
    return response?.data;
  }
}
async function deleteAPI({ service, endPoint, params }) {
  try {
    const { data } = await http.delete(
      `${service ? microServices[service] : baseUrl}${endPoint}`,
      { data: params }
    );
    return data;
  } catch ({ response }) {
    return response?.data;
  }
}

export { postAPI, updateAPI, retrieveAPI, deleteAPI };
