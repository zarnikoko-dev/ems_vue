<template>
  <div style="relative inline-block" @click="toggle" v-click-away="close">
    <slot name="toggler">
        <button>Toggle</button>
    </slot>
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "DropdownMenu",
  provide() {
    return {
      sharedState: this.sharedState,
    };
  },
  data() {
    return {
      sharedState: {
        active: false,
      },
    };
  },
  methods: {
    toggle() {
      this.sharedState.active = !this.sharedState.active;
    },
    close(){
      this.sharedState.active = false;
    },
  },
};
</script>

<style></style>
