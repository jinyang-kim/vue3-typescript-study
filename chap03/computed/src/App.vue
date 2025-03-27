<script setup lang="ts">

// 반지름 초깃값을 무작위로 가져오기
import {computed, ref} from 'vue';

const radiusInit = Math.round(Math.random() * 10);
// 원주율 기본값 설정
const PI = ref(3.14);
// 반지름 기본값 준비
const radius = ref(radiusInit);
// 원의 면적 계산형 속성 준비
const area = computed((): number => {
  return radius.value * radius.value * PI.value;
});
// 반지름 기본 변수에 새로운 무작위 값을 1초 간격으로 저장
setInterval((): void => {
  radius.value = Math.round(Math.random() * 10);
}, 1000);
</script>

<template>
  <div>
    <p>반지름이 {{radius}}이고 원주율이 {{PI}}인 원의 면적은 {{area}}입니다.</p>
  </div>
</template>

<style scoped>

</style>
