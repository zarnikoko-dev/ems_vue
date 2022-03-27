<template>
  <div
    id="dropdownNavbar"
    class="absolute z-20 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 -translate-x-1/2"
    :class="[active ? 'block' : 'hidden']"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "DropdownContent",
  inject: ["sharedState"],
  computed: {
    active() {
      return this.sharedState.active;
    },
  },
};
</script>

<style></style>
