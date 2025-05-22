<script setup lang="ts">
interface Props {
  name: string;
}

defineProps<Props>();
</script>

<template>
  <section class="box">
    <h1>{{name}} 님의 상황</h1>
    <slot>
      <p>문제 없습니다.</p>
    </slot>
  </section>
</template>

<style>
.box {
  border: 1px solid green;
  margin: 10px;
}
</style>