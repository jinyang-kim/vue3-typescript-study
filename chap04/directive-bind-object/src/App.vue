<script setup lang="ts">
import {ref} from 'vue';

const imgAttributes = ref({
  src: "/images/logo.svg",
  alt: "Vue 로고",
  width: 75,
  height: 75
})
</script>

<template>
  <p><img v-bind="imgAttributes"></p>
  <p><img v-bind="imgAttributes" title="로고입니다"></p>
  <p><img v-bind="imgAttributes" alt="로고입니다."></p>
</template>

<style scoped>

</style>
