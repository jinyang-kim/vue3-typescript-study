<script setup lang="ts">
import {ref} from 'vue';
import OneSection from '@/components/OneSection.vue';

const randInit = Math.round(Math.random() * 10);
const rand = ref(randInit);
const onCreateNewRand = ():void => {
  rand.value = Math.round(Math.random() * 10);
}
</script>

<template>
  <section>
    <p>부모 컴포넌트로 무작위값을 표시: {{rand}}</p>
    <OneSection v-bind:rand="rand" v-on:createNewRand="onCreateNewRand" />
  </section>
</template>

<style scoped>

</style>