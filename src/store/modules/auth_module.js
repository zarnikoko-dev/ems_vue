import api from "../../api/api";
import Cookie from "js-cookie";
import {openWindow} from '../../common/methods';
const state = () => ({
  auth: localStorage?.getItem("access_token") === null ? false : true,
  user: JSON.parse(localStorage?.getItem("user")),
  errors: {},
  isSignin: false,
  isSignout: false,
});

const mutations = {
  setIsSignin(state, status) {
    state.isSignin = status;
  },
  setIsSignout(state, status) {
    state.isSignout = status;
  },
  setErr(state, errors) {
    state.errors = errors;
  },
  loginSuccess(state, user) {
    state.errors = {};
    state.auth = true;
    state.user = user;
  },
  logout(state) {
    state.auth = false;
    state.user = {};
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
    Cookie.remove("XSRF-TOKEN");
    Cookie.remove("laravel_session");
  },
};

const actions = {
  async login({ commit }, data) {
    commit("setIsSignin", true);
    await api.login(data);
    commit("setIsSignin", false);
  },
  async logout({ commit }) {
    commit("setIsSignout", true);
    await api.logout(); // logout in backend
    commit("logout");
    commit("setIsSignout", false);
  },
  async loginWithGoogle({ commit }) {
    try {
      const newWindow = openWindow('', 'message')
      commit("setIsSignin", true);
      const res = await api.loginWithGoogle();
      newWindow.location.href = res.data.url;
      commit("setIsSignin", false);
    } catch (error) {
      console.log(error);
    }
  },
  // eslint-disable-next-line
  async testAuth({commit}){
      try{
        const res = await api.testAuth();
        console.log(res.data);
      }catch(err){
          console.log(err);
      }
  }
};


export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
