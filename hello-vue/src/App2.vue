<template>
  <div>
    <h1>안녕하세요~ {{name}} 님!</h1>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const name = ref("홍길동");
</script>

<style scoped>

</style>
