<script setup lang="ts">
import {ref} from 'vue';

const hello = ref("안녕하세요");
</script>

<template>
  <div>
    <p v-cloak>{{hello}}</p>
  </div>
</template>

<style scoped>
[v-cloak] {
  display: none;
}
</style>