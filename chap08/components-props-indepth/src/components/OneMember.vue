<script setup lang="ts">
// Props 인터페이스 정의
import {computed, ref} from 'vue';

interface Props {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}
// Props 객체 정의
const props = defineProps<Props>();

// 이 컴포넌트 내에서 이용하는 포인트의 템플릿 변수
const localPoints = ref(props.points);

// Props의 note를 가공하는 계산형 속성
const localNote = computed(
  (): string => {
    let localNote = props.note;
    if(localNote == undefined) {
      localNote = "--";
    }

    return localNote;
  }
);

// [포인트 UP] 버튼을 클릭했을 때의 메서드
const pointUp = (): void => {
  // props.points++;
  localPoints.value++;
}
</script>

<template>
  <section class="box">
    <h4>{{name}} 님의 정보</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{id}}</dd>
      <dt>메일 주소</dt>
      <dd>{{email}}</dd>
      <dt>보유 포인트</dt>
      <dd>{{localPoints}}</dd>
      <dt>비고</dt>
      <dd>{{localNote}}</dd>
    </dl>
    <button v-on:click="pointUp">포인트 UP</button>
  </section>
</template>

<style scoped>
.box {
  border: 1px solid green;
  margin: 10px;
}
</style>