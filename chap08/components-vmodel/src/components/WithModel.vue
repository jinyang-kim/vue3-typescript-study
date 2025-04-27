<script setup lang="ts">
import {ref} from 'vue';

const name = ref("이름 없음");
</script>

<template>
  <section>
    <P>{{name}}님이네요!</P>
    <input type="text" v-model="name">
  </section>
</template>

<style>
section {
  border: 1px dashed orange;
  margin: 10px;
}
</style>