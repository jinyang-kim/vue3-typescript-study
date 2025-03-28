<script setup lang="ts">

import {ref} from 'vue';

const widthOrHeight = ref("height");
const widthOrHeightValue = ref(100);
</script>

<template>
  <div>
    <p><img src="@/assets/logo.svg" alt="Vue Logo" v-bind:[widthOrHeight]="widthOrHeightValue"></p>
  </div>
</template>

<style scoped>

</style>
