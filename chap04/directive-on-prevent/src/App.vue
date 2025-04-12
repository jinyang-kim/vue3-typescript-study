<script setup lang="ts">
import {ref} from 'vue';

const msg = ref("미전송");
const onFormSubmit = (): void => {
  msg.value = "전송되었습니다.";
}
</script>

<template>
  <form action="#" v-on:submit.prevent="onFormSubmit">
    <input type="text" required />
    <button type="submit">전송</button>
  </form>
  <p>{{msg}}</p>
</template>

<style scoped>

</style>
