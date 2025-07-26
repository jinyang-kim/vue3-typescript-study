<script setup lang="ts">
import {useCounterStore} from '@/stores/counter';
import {computed} from 'vue';

const counterStore = useCounterStore();
const count = computed(
  (): number => {
    return counterStore.counter;
  }
);
const doubleCount = computed(
  (): number => {
    return counterStore.doubleCount;
  }
);
const onIncrementClick = () => {
  counterStore.incrementCount();
}
const onResetClick = () => {
  counterStore.$reset();
}
</script>

<template>
  <div>
    <p>현재 포인트: {{count}}</p>
    <p>현재 포인트의 두 배: {{doubleCount}}</p>
    <button v-on:click="onIncrementClick">가산</button>
    <button v-on:click="onResetClick">리셋</button>
  </div>
</template>

<style scoped>

</style>