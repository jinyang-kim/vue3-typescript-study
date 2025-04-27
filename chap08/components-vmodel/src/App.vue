<script setup lang="ts">
import WithModel from '@/components/WithModel.vue';
</script>

<template>
  <h1>컴포넌트의 독립성</h1>
  <section>
    <h2>v-model을 포함한 컴포넌트</h2>
    <WithModel />
    <WithModel />
  </section>
</template>

<style>
section {
  border: 1px solid blue;
  margin: 10px;
}
</style>