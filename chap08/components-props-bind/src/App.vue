<script setup lang="ts">
import {ref} from 'vue';
import OneInfo from '@/components/OneInfo.vue';

const propsTitle = ref("발생한 무작위값");
const rand = Math.round(Math.random() * 100);
const propsContent = ref(rand);
</script>

<template>
  <h1>Props 기초</h1>
  <section>
    <h2>템플릿 변수 이용</h2>
    <OneInfo v-bind:title="propsTitle" v-bind:content="propsContent" />
  </section>
</template>

<style>
section {
  border: 1px solid blue;
  margin: 10px;
}
</style>