<script setup lang="ts">
interface Props {
  title: string;
  content: string;
}
defineProps<Props>();
</script>

<template>
  <section class="box">
    <h4>{{title}}</h4>
    <p>{{content}}</p>
  </section>
</template>

<style scoped>
.box {
  border: 1px dashed green;
  margin: 10px;
}
</style>