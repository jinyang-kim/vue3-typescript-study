<script setup lang="ts">
import {ref} from 'vue';

const inputName2Way = ref("양방향");
const onInputName2Way = (event: Event): void => {
  const element = event.target as HTMLInputElement;
  inputName2Way.value = element.value;
}
</script>

<template>
  <div>
    <input type="text" v-bind:value="inputName2Way" v-on:input="onInputName2Way" />
    <p>{{inputName2Way}}</p>
  </div>
</template>

<style scoped>

</style>