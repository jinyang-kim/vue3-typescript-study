<script setup lang="ts">
import {ref} from 'vue';

// 현재 시각 가져오기
const now = new Date();
// 현재 시각 문자열 변환
const nowStr = now.toLocaleTimeString();
// 현재 시각 문자열을 템플릿 변수로 준비
let timeStr = nowStr;
// 현재 시각 문자열을 템플릿 변수로서 ref() 준비
const timeStrRef = ref(nowStr);
// 새로운 시각으로 변경하는 함수
const changeTime = (): void => {
  // 현재 시각 가져오기
  const newTime = new Date();
  // 현재 시각 문자열 변환
  const newTimeStr = newTime.toLocaleTimeString();
  // 현재 시각 문자열을 템플릿 변수 timeStr에 대입
  timeStr = newTimeStr;
  // 현재 시각 문자열을 템플릿 변수 timeStrRef에 대입
  timeStrRef.value = newTimeStr;
};

// changeTime 함수를 1초 간격으로 실행
setInterval(changeTime, 1000);
</script>

<template>
  <div>
    <p>현재 시간: {{timeStr}}</p>
    <p>현재 시간(ref): {{timeStrRef}}</p>
  </div>
</template>

<style scoped>

</style>
