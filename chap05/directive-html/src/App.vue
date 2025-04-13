<script setup lang="ts">
import {ref} from 'vue';

const htmlStr = ref(`<a href="https://vuejs.org//">Vue.js의 TOP 페이지</a>`);
</script>

<template>
  <div>
    <section>{{htmlStr}}</section>
    <section v-html="htmlStr"></section>
  </div>
</template>

<style scoped>

</style>