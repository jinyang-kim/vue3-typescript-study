<script setup lang="ts">
import {ref} from 'vue';

const trimedText = ref("");
</script>

<template>
  <div>
    <input type="text" v-model.trim="trimedText">
    <p>입력 문자열: {{trimedText}}</p>
  </div>
</template>

<style scoped>

</style>