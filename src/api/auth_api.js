import axios from "../axios/axios";
import store from "../store/store";

const login = async (data) => {
  try {
    const res = await axios.post("/login", data);
    console.log(res.data);
    localStorage.setItem("access_token", res.data.access_token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
    store.commit("auth/loginSuccess", res.data.user);
    // router.push({name: 'dashboard'});
  } catch (err) {
    console.log(err.response.data);
    store.commit("auth/setErr", err.response.data);
  }
};

const logout = async (data) => {
  await axios.post("/logout", data);
};

const loginWithGoogle = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/auth/google")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const testAuth = () => {
  // eslint-disable-next-line
  return new Promise((resolve, reject) => {
    axios
      .get("/user")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export default {
  login,
  logout,
  loginWithGoogle,
  testAuth,
};
