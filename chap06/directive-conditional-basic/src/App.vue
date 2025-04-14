<script setup lang="ts">
import {computed, ref} from 'vue';

const number = ref(80);
const showOrNot = computed(
  (): boolean => {
    // 반환값용 변수를 초깃값 false로 준비
    let showOrNot = false;
    // 0 ~ 100 무작위값 생성
    const rand = Math.round(Math.random() * 100);
    // 무작위 값이 50 이상이면 true를 반환
    if(rand >= 50) {
      showOrNot = true;
    }

    return showOrNot;
  }
)
</script>

<template>
  <div>
    <section v-if="number >= 50">조건에 일치함으로 표시</section>
    <section v-if="Math.round(Math.random() * 100) >=50">조건에 일치함으로 표시</section>
    <section v-if="showOrNot">조건에 일치함으로 표시</section>
  </div>
</template>

<style scoped>

</style>