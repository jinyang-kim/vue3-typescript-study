<script setup lang="ts">
import {ref} from 'vue';
import OneInfo from '@/components/OneInfo.vue';

const weatherListInit = new Map<number, Weather>();
weatherListInit.set(1, {id: 1, title: "오늘의 날씨", content: "오늘은 하루 종일 맑습니다"});
weatherListInit.set(2, {id: 2, title: "내일의 날씨", content: "내일은 하루 종일 비가 오겠습니다"});
weatherListInit.set(3, {id: 3, title: "모레의 날씨", content: "모레는 하루 종일 눈이 오겠습니다"});
const weatherList = ref(weatherListInit);

interface Weather {
  id: number;
  title: string;
  content: string;
}
</script>

<template>
  <h1>Props 기초</h1>
  <section>
    <h2>반복 컴포넌트 생성</h2>
    <OneInfo v-for="[id, weather] in weatherList" v-bind:key="id" v-bind:title="weather.title" v-bind:content="weather.content" />
  </section>
</template>

<style scoped>
section {
  border: 1px solid blue;
  margin: 10px;
}
</style>