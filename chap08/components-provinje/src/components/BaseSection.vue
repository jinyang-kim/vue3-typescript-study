<script setup lang="ts">
import {computed, inject} from 'vue';
import OneMember from '@/components/OneMember.vue';
import type {Member} from '@/interfaces';

// 회원 정보 리스트를 inject
const memberList = inject("memberList") as Map<number, Member>;
// 보유 포인트 합계 계산형 속성
const totalPoints = computed(
  (): number => {
    let total = 0;
    for (const member of memberList.values()) {
      total += member.points;
    }

    return total;
  }
)
</script>

<template>
  <section>
    <h1>회원 리스트</h1>
    <p>모든 회원의 보유 포인트 합계: {{totalPoints}}</p>
    <OneMember v-for="id in memberList.keys()"
               v-bind:key="id"
               v-bind:id="id" />
  </section>
</template>

<style scoped>
section {
  border: 1px dashed orange;
  margin: 10px;
}
</style>