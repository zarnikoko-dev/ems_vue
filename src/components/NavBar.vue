<template>
  <nav class="sticky px-2 py-2 bg-white border-green-400 border-b-2 top-0 z-10">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="#" class="flex items-center">
        <div class="bg-green-500 py-1 pl-2 pr-2">
          <span class="text-xl font-bold text-white">Education</span>
        </div>
        <div class="bg-white py-1 pl-2 pr-2">
          <span class="text-xl font-bold text-green-500"
            >Management System</span
          >
        </div>
      </a>
      <button
        data-collapse-toggle="mobile-menu"
        type="button"
        class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="flex flex-col items-center mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
        >
          <li>
            <router-link
              to="/"
              class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent hover:md:text-green-500"
              active-class="md:text-green-500"
              >Home</router-link
            >
          </li>
          <li v-if="!$store.state.auth.auth">
            <router-link
              to="/login"
              class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent hover:md:text-green-500"
              active-class="md:text-green-500"
              >Login</router-link
            >
          </li>
          <li v-if="$store.state.auth.auth">
            <router-link
              to="/dashboard"
              class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent hover:md:text-green-500"
              active-class="md:text-green-500"
              >Dashboard</router-link
            >
          </li>
          <li v-if="$store.state.auth.auth">
            <dropdown-menu>
              <template v-slot:toggler>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="inline-flex items-center py-2 px-3 mr-3 mb-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg md:mb-0 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  <div class="w-6 h-6 bg-purple-300 rounded-full"></div>
                  <svg
                    class="ml-2 w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </template>
              <dropdown-content>
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-400">
                  <li>
                    <a
                      href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Profile</a
                    >
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    @click="logout"
                    >Logout</a
                  >
                </div>
              </dropdown-content>
            </dropdown-menu>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import DropdownMenu from "./DropdownMenu.vue";
import DropdownContent from "./DropdownContent.vue";
export default {
  name: "NavBar",
  components: {
    DropdownMenu,
    DropdownContent,
  },
  data() {
    return {
      profileDropdownToggle: false,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
  },
};
</script>

<style></style>
