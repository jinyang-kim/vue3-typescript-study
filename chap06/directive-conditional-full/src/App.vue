<script setup lang="ts">
import {computed} from 'vue';

const randomNumber = computed(
  (): number => {
    return Math.round(Math.random() * 100);
  }
)
</script>

<template>
  <div>
    <section>
      점수는 {{randomNumber}} 점으로
      <span v-if="randomNumber >= 80">매우 우수합니다.</span>
      <span v-else-if="randomNumber >= 70">우수합니다.</span>
      <span v-else-if="randomNumber >= 60">보통입니다.</span>
      <span v-else>미흡합니다.</span>
    </section>
  </div>
</template>

<style scoped>

</style>