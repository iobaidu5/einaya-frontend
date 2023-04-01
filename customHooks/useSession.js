import { debounce } from "./debounce";
import { throttle } from "./throttle";
import { postAPI } from "/httpServices";

const localStorage = typeof window !== "undefined" ? window?.localStorage : null;

const timeStamps = () => { return Math.floor(new Date().getTime() / 1000) };

const jwtParse = (query) => { //keys = ["exp", "sessionTime"]
    let access_token = localStorage?.getItem("_") ? JSON?.parse(atob(localStorage?.getItem("_")))?.access_token : null;
    if (access_token) {
        var base64Url = access_token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(window.atob(base64).split("").map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(""));
        if (Array.isArray(query)) {
            let response;
            query.forEach((key) => {
                response = { ...response, [key]: JSON.parse(jsonPayload)?.[key] }
            })
            return response;
        } else {
            return JSON.parse(jsonPayload)?.[query]
        }

    }
};

const onDebounced = debounce(() => {
    document.querySelector("#setOpenTrue")?.click();
    // clearSession()
}, 60000 * jwtParse("sessionTime"));

var onThrottle = throttle(() => {
    refreshToken()
}, (jwtParse("exp") - timeStamps()));

const setSession = ({ access_token, refresh_token, company, companyKey }) => {
    localStorage.setItem("_", btoa(JSON.stringify({ access_token, refresh_token, company: company || {}, companyKey })));
};

const getSession = (query) => { // keys = ["access_token", "refresh_token", "company", "companyKey"]
    if (Array.isArray(query)) {
        let response = {};
        query?.forEach((key) => {
            response[key] = localStorage?.getItem("_") ? JSON.parse(atob(localStorage?.getItem("_")))?.[key] : null;
        })
        return response;
    } else {
        return localStorage?.getItem("_") && JSON?.parse(atob(localStorage?.getItem("_")))?.[query]
    }
};

const clearSession = () => {
    localStorage.clear();
    window.location.assign("/")
};

const refreshToken = (isReload) => {
    postAPI({ endPoint: "refresh-token", requestData: { refreshToken: getSession("refresh_token") } }).then(
        ({ responseCode, data }) => {
            if (responseCode === 200) {
                setSession({ ...data?.keycloakToken, company: data?.company, companyKey: data?.companyKey });
                isReload && window.location.assign("/home");
            } else {
                clearSession();
            }
            return { responseCode }
        }
    );
};

const verifyExpiry = (values) => {
    if (((jwtParse("exp") - timeStamps()) / 60) < 1) {
        clearSession();
    } else if (((jwtParse("exp") - timeStamps()) / 60) >= 1 && ((jwtParse("exp") - timeStamps()) / 60) <= jwtParse("sessionTime")) {
        onThrottle()
    } else if (((jwtParse("exp") - timeStamps()) / 60) > jwtParse("sessionTime")) {
        onDebounced(values)
    }
};

export { setSession, getSession, clearSession, jwtParse, verifyExpiry, refreshToken };