<script setup lang="ts">
import OneInfo from '@/components/OneInfo.vue';
</script>

<template>
  <h1>Props 기초</h1>
  <section>
    <h2>속성에 직접 기술</h2>
    <OneInfo title="Props의 이용" content="자식 컴포넌트에 데이터를 넘겨주는 Props를 이용" />
  </section>
</template>

<style>
section {
  border: 1px solid blue;
  margin: 10px;
}
</style>