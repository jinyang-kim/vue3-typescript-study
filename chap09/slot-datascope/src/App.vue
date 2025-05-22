<script setup lang="ts">
import OneSection from '@/components/OneSection.vue';
import {ref} from 'vue';

const yeonghee = ref("영희");
const cheolsoo = ref("철수");
</script>

<template>
  <section>
    <h2>Slot 이용</h2>
    <OneSection v-bind:name="yeonghee">
      <p>{{yeonghee}} 님은 연락이 되지 않습니다.</p>
    </OneSection>
    <OneSection v-bind:name="cheolsoo" />
  </section>
</template>

<style scoped>

</style>