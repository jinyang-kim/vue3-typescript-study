<script setup lang="ts">
import {ref} from 'vue';

const price = ref(1000);
</script>

<template>
  <div>
    <input type="number" v-model="price">원<br />
    <p>금액은 {{price}}원입니다.</p>
    <p v-once>금액은 {{price}}원입니다.</p>
  </div>
</template>

<style scoped>

</style>