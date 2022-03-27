import axios from "axios";
import Cookies from "js-cookie";
import store from '../store/store';

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
});
// Some global common cancel token source
instance.CancelToken = axios.CancelToken;
instance.isCancel = axios.isCancel;
// export const cancelSource = instance.CancelToken.source();
// Alter defaults after instance has been created
instance.defaults.headers.common["Accept"] = "application/json";
instance.defaults.withCredentials = true;
export let cancelSource = () => {};
// Add a request interceptor
instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("access_token");
    cancelSource = instance.CancelToken.source();
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    config.cancelToken = cancelSource.token;
    // config.headers['Content-Type'] = 'application/json';
    if (
      (config.method == "post" ||
        config.method == "put" ||
        config.method == "delete") &&
      !Cookies.get("XSRF-TOKEN") &&
      location.hostname === "127.0.0.1"
    ) {
      return setCSRFToken().then(() => config);
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

//Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    // eslint-disable-next-line
    const originalRequest = error.config;
    if (error.response.status === 401 && store.state.auth.auth) {
      store.commit("auth/logout");
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

const setCSRFToken = () => {
  return instance.get("/sanctum/csrf-cookie");
};

export default instance;
