<script setup lang="ts">
import {ref} from 'vue';

const inputNameModel = ref("영희");
</script>

<template>
  <input type="text" v-model="inputNameModel">
  <p>{{inputNameModel}}</p>
</template>

<style scoped>

</style>