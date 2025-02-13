<template>
  <div>
    <p>현재 시간 : {{timeStr}}</p>
    <p>현재 시간(ref) : {{timeStrRef}}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

// 현재 시간
const now = new Date();
// 현재 시간 문자열
const nowStr = now.toLocaleTimeString();
// 현재 시간 문자열을 템플릿 변수로 준비
let timeStr = nowStr;
// 현재 시간 문자열을 템플릿 변수로서 ref()로 준비
const timeStrRef = ref(nowStr);

//새로운 시간으로 변경
function changeTime():void {
  // 현재 시간
  const newTime = new Date();
  // 현재 시간 문자열
  const newTimeStr = newTime.toLocaleTimeString();
  // 현재 시간 문자열을 템플릿 변수 timeStr에 대입
  timeStr = newTimeStr;
  // 현재 시간 무자열을 템플릿 변수 timeStrRef에 대입
  timeStrRef.value = newTimeStr;
}

setInterval(changeTime, 1000);
</script>

<style scoped>

</style>
