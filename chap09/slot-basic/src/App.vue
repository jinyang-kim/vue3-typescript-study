<script setup lang="ts">
import {ref} from 'vue';
import OneSection from '@/components/OneSection.vue';

const yeonghee = ref("영희");
</script>

<template>
  <section>
    <h2>Slot 이용</h2>
    <OneSection v-bind:name="yeonghee">
      <p>연락이 되지 않습니다.</p>
    </OneSection>
  </section>
</template>

<style scoped>

</style>