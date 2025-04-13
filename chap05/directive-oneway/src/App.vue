<script setup lang="ts">
import {ref} from 'vue';

const inputNameBind = ref("홍길동");
const inputNameOn = ref("이름 없음");
const onInputName = (event: Event): void => {
  const element = event.target as HTMLInputElement;
  inputNameOn.value = element.value;
}
</script>

<template>
  <div>
    <input type="text" v-bind:value="inputNameBind">
  </div>
  <div>
    <input type="text" v-on:input="onInputName">
    <p>{{inputNameOn}}</p>
  </div>
</template>

<style scoped>

</style>