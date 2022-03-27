<template>
  <div class="flex w-full items-center justify-center">
    <div class="flex items-center bg-white p-16 rounded-lg drop-shadow-2xl">
      <div
        class="flex items-center justify-center w-48 h-48 bg-violet-200 border rounded-full mr-10"
      >
        <span class="text-xl">LOGO</span>
      </div>
      <form>
        <div class="p-5 border rounded-sm">
          <input-text
            type="email"
            label="Email"
            :modelValue="user_login.email"
            @update:modelValue="(newValue) => (user_login.email = newValue)"
          />
          <input-text
            type="password"
            label="Password"
            :modelValue="user_login.password"
            @update:modelValue="(newValue) => (user_login.password = newValue)"
          />
          <div class="flex items-enter justify-center mt-5">
            <div class="block w-3/4">
              <action-button label="Login" @click="login" />
            </div>
          </div>
        </div>
        <div class="flex items-center mt-5">
          <div>
            <span class="text-sm font-medium text-slate-700 mr-5"
              >Don't have an account yet?</span
            >
          </div>
          <div>
            <span
              class="text-sm font-medium text-slate-700 text-blue-500 cursor-pointer"
              >Regisger now</span
            >
          </div>
        </div>
        <div class="p-5 border rounded-sm mt-2">
          <label class="block mb-3">
            <span class="block text-sm font-medium text-slate-700">
              Login with
            </span>
            <action-button
              label="Google"
              class="bg-white rounded-sm text-gray-500 border border-gray-400 hover:bg-gray-200 active:bg-gray-400 focus:outline-none focus:ring focus:ring-sky-200 mt-2"
              @click="loginWithGoogle"
            />
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputText from "./InputText.vue";
import ActionButton from "./ActionButton.vue";
export default {
  name: "UserLogin",
  data() {
    return {
      user_login: {
        email: "",
        password: "",
      },
    };
  },
  components: {
    InputText,
    ActionButton,
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", this.user_login);
    },
    loginWithGoogle() {
      this.$store.dispatch("auth/loginWithGoogle");
    },
    onMessage(e) {
      // console.log(e.origin !== window.origin || !e.data.token)
      if (!e.data.token) {
        return;
      }
      console.log(e.data.user);
      localStorage.setItem("user", e.data.user);
      localStorage.setItem("access_token", e.data.token);
      this.$store.commit("auth/loginSuccess", JSON.parse(e.data.user));
      this.$router.go("/dashboard");
    },
  },
  mounted() {
    window.addEventListener("message", this.onMessage, false);
  },

  beforeUnmount() {
    window.removeEventListener("message", this.onMessage);
  },
};
</script>

<style></style>
