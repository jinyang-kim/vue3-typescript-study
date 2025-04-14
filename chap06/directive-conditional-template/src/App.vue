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
      점수는 {{randomNumber}}점
      <template v-if="randomNumber >= 80">
        으로 매우 우수합니다.
        <span style="color: red;">대단해요!</span>
      </template>
    </section>
  </div>
</template>

<style scoped>

</style>