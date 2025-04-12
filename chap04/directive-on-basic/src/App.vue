<script setup lang="ts">
import {ref} from 'vue';

const randValue = ref("시작 전");
const onButtonClick = (): void => {
  const rand = Math.round(Math.random() * 10);
  randValue.value = String(rand);
}
</script>

<template>
  <div>
    <section>
      <button v-on:click="onButtonClick">클릭</button>
      <p>클릭 결과: {{randValue}}</p>
    </section>
  </div>
</template>

<style scoped>

</style>
