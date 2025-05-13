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

// Emit 객체 정의
interface Emits {
  (event: "incrementPoint", id: number): void;
}

// Props 객체 정의
const props = defineProps<Props>();
// Emit 정의
const emit = defineEmits<Emits>();

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
  emit("incrementPoint", props.id);
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
      <dd>{{points}}</dd>
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