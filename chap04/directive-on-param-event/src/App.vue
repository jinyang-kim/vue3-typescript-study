<script setup lang="ts">
import {ref} from 'vue';

const mousePointerX = ref(0);
const mousePointerY = ref(0);
const onImgMouseMove = (event: MouseEnvet): void => {
  mousePointerX.value = event.offsetX;
  mousePointerY.value = event.offsetY;
}
</script>

<template>
  <section>
    <img src="./assets/logo.svg" alt="Vue 로그" width="200" v-on:mousemove="onImgMouseMove" />
    <p>포인터 위치: x = {{mousePointerX}}; y = {{mousePointerY}}</p>
  </section>
</template>

<style scoped>

</style>
