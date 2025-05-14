<script setup lang="ts">
import {computed, inject} from 'vue';
import type {Member} from '@/interfaces';

// Props 인터페이스 정의
interface Props {
  id: number;
}

// Props 객체 정의
const props = defineProps<Props>();
// 회원 정보 리스트를 inject
const memberList = inject("memberList") as Map<number, Member>;
// 해당하는 회원 정보 취득
const member = computed(
  (): Member => {
    return memberList.get(props.id) as Member;
  }
)
// Props의 note를 가공하는 계산형 속성
const localNote = computed(
  (): string => {
    let localNote = member.value.note;
    if(localNote == undefined) {
      localNote = "--";
    }

    return localNote;
  }
);
</script>

<template>
  <section class="box">
    <h4>{{member.name}} 님의 정보</h4>
    <dl>
      <dt>ID</dt>
      <dd>{{id}}</dd>
      <dt>메일 주소</dt>
      <dd>{{member.email}}</dd>
      <dt>보유 포인트</dt>
      <dd>
        <input type="number" v-model.number="member.points">
      </dd>
      <dt>비고</dt>
      <dd>{{localNote}}</dd>
    </dl>
  </section>
</template>

<style scoped>
.box {
  border: 1px solid green;
  margin: 10px;
}
</style>