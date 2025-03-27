<script setup lang="ts">

// 반지름 초깃값을 무작위로 가져오기
import {computed, reactive} from 'vue';

const radiusInit = Math.round(Math.random() * 10);
// 반응형 템플릿 변수 준비
const data = reactive({
  PI: 3.14,
  radius: Math.round(Math.random() * 10)
})
// 원의 면적 계산형 속성 준비
const area = computed((): number => {
  return data.radius * data.radius * data.PI;
});
// 반지름 기본 변수에 새로운 무작위 값을 1초 간격으로 저장
setInterval((): void => {
  data.radius = Math.round(Math.random() * 10);
}, 1000);
</script>

<template>
  <div>
    <p>반지름이 {{data.radius}}이고 원주율이 {{data.PI}}인 원의 면적은 {{area}}입니다.</p>
  </div>
</template>

<style scoped>

</style>
