<template>
  <div class="flex flex-col h-screen">
    <nav-bar/>
    <div class="relative flex flex-grow pt-2 pl-2 pr-2 bg-gray-100">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import {mapState} from 'vuex';
export default {
  name: "App",
  components : {
    NavBar,
  },
  data() {
    return {};
  },
  computed : {
    ...mapState({
      auth : state =>  state.auth.auth,
    })
  },
  watch: {
    auth:{
      handler (auth) {
        if (auth) {
          this.$router.push('/dashboard')
        }else{
          this.$router.push('/login')
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
