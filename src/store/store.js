import { createStore } from "vuex";
import auth_module from './modules/auth_module';

const store = createStore({
  modules: {
    auth: auth_module,
  },
});

export default store;