<script setup lang="ts">
import {ref} from 'vue';

const pBgColor = ref("white");
const onPCLick = (bgColor: string): void => {
  pBgColor.value = bgColor;
}
</script>

<template>
  <div v-on:click="onPCLick('red')" v-bind:style="{backgroundColor: pBgColor}">
    여기를 클릭하면 배경색이 변합니다.
  </div>
</template>

<style scoped>

</style>
