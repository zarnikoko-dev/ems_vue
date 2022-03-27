<template>
  <button
    type="button"
    class="bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 py-1 w-full rounded-2xl text-white"
  >
    {{label}}
  </button>
</template>

<script>
export default {
    name : 'ActionButton',
    props : ['label']
};
</script>

<style></style>
