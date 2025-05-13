<script setup lang="ts">
import {computed, ref} from 'vue';
import OneMember from '@/components/OneMember.vue';

// 회원 리스트
const memberListInit = new Map<number, Member>();
memberListInit.set(33456, {id: 33456, name: "영희", email: "box@example.com", points: 35, note: "신규 가입 특전"});
memberListInit.set(47783, {id: 33456, name: "철수", email: "mue@example.com", points: 53});
const memberList = ref(memberListInit);

const totalPoints = computed(
  (): number => {
    let total = 0;
    for(const member of memberList.value.values()) {
      total += member.points;
    }

    return total;
  }
)

const onIncrementPoint = (id: number): void => {
  // 처리 함수의 id에 해당하는 회원 정보 객체 취득
  const member = memberList.value.get(id);
  // 회원 정보 객체가 존재하는 경우
  if(member != undefined) {
    // 포인트 증가
    member.points++;
  }
}

interface Member {
  id: number;
  name: string;
  email: string;
  points: number;
  note?: string;
}
</script>

<template>
  <section>
    <h1>회원 리스트</h1>
    <p>모든 회원의 보유 포인트 합계: {{totalPoints}}</p>
    <OneMember v-for="[id, member] in memberList"
               v-bind:key="id"
               v-bind:id="id"
               v-bind:name="member.name"
               v-bind:email="member.email"
               v-bind:points="member.points"
               v-bind:note="member.note"
               v-on:incrementPoint="onIncrementPoint" />
  </section>
</template>

<style scoped>

</style>