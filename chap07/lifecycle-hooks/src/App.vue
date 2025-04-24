<script setup lang="ts">
import {
  computed, type DebuggerEvent,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onRenderTracked,
  onRenderTriggered,
  onUpdated,
  ref,
} from 'vue';

const heightInit = Math.round(Math.random() * 10);
const widthInit = Math.round(Math.random() * 10);
const height = ref(heightInit);
const width = ref(widthInit)
const area = computed(
  (): number => {
    return height.value * width.value;
  }
);
const change = (): void => {
  height.value = Math.round(Math.random() * 10);
  width.value = Math.round(Math.random() * 10);
}

onBeforeMount(
  (): void => {
    console.log(`beforeMount called: ${height.value} * ${width.value}`);
  }
);
onMounted(
  (): void => {
    console.log(`mounted called: ${height.value} * ${width.value}`);
  }
);
onBeforeUpdate(
  (): void => {
    console.log(`beforeUpdate called: ${height.value} * ${width.value}`);
  }
);
onUpdated(
  (): void => {
    console.log(`updated called: ${height.value} * ${width.value}`);
  }
);
onRenderTracked(
  (event: DebuggerEvent): void => {
    console.log(`renderTracked called: ${height.value} * ${width.value}`);
    console.log(event);
  }
);
onRenderTriggered(
  (event: DebuggerEvent): void => {
    console.log(`renderTriggered called: ${height.value} * ${width.value}`);
    console.log(event);
  }
)
</script>

<template>
  <div>
    <p>세로 {{height}}, 가로 {{width}}인 사각형의 면적은 {{area}}</p>
    <button v-on:click="change">값을 변경</button>
  </div>
</template>

<style scoped>

</style>