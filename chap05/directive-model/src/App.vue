<script setup lang="ts">
import {ref} from 'vue';

const inputNameModel = ref("양방향");
</script>

<template>
  <div>
    <input type="text" v-model="inputNameModel">
    <p>{{inputNameModel}}</p>
  </div>
</template>

<style scoped>

</style>
