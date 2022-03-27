<template>
  <div>
    <div
      class="flex items-center bg-white py-10 pl-10 pr-10 rounded-lg drop-shadow-2xl"
    >
        <div class="flex w-40 h-40 bg-purple-200 rounded-full justify-center items-center mr-5">
            <span>Profile Picture</span>
        </div>
        <div class="flex-row">
            <div>
                <span class="text-lg font-bold">{{$store.state.auth.user?.name}}</span>
            </div>
            <div>
                <span class="text-gray-500">{{$store.state.auth.user?.email}}</span>
            </div>
        </div>
    </div>
    <action-button label="test auth" @click="testAuth"/>
  </div>
</template>

<script>
import ActionButton from './ActionButton.vue';
export default {
  name: "DashBoard",
  components : {
    ActionButton,
  },
  methods : {
    testAuth(){
      this.$store.dispatch("auth/testAuth");
    }
  }
};
</script>

<style></style>
