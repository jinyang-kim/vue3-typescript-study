<script setup lang="ts">
import Input from '@/components/Input.vue';
import Radio from '@/components/Radio.vue';
import Select from '@/components/Select.vue';
import {ref} from 'vue';

// 현재 표시되는 컴포넌트를 나타내는 템플릿 변수
const currentComp = ref(Input);
// 현재 표시되는 컴포넌트명을 나타내는 템플릿 변수
const currentCompName = ref("Input");
// 컴포넌트의 배열
const compList = [Input, Radio, Select];
const compNameList: string[] = ["Input", "Radio", "Select"];
// 현재 표시되는 컴포넌트에 해당하는 배열의 인덱스 번호
let currentCompIndex = 0;
// 컴포넌트를 교체하는 메서드
const switchComp = (): void => {
  // 인덱스 번호 증가
  currentCompIndex++;
  // 인덱스 번호 3이상인 경우
  if(currentCompIndex >= 3) {
    // 0으로 리셋
    currentCompIndex = 0;
  }
  // 인덱스 번호에 해당하는 컴포넌트를 currentComp에 대입
  currentComp.value = compList[currentCompIndex];
  // 인덱스 번호에 해당하는 컴포넌트명을 currentCompName에 대입
  currentCompName.value = compNameList[currentCompIndex];
}
</script>

<template>
  <p>컴포넌트명: {{currentCompName}}</p>
  <KeepAlive>
    <component v-bind:is="currentComp" />
  </KeepAlive>
  <button v-on:click="switchComp">바꾸기</button>
</template>

<style scoped>

</style>