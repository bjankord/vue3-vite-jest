<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})

function log() {
  console.log('clicked')
}

function unused() {
  console.log('this should show up as not being covered in test coverage')
}
</script>

<template>
  <button @click="log">{{ msg }}</button>
</template>

<style scoped>
button {
  background-color: aqua;
}
</style>
