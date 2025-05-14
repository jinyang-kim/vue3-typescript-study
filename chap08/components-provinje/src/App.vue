<script setup lang="ts">
import {provide, reactive} from 'vue';
import BaseSection from '@/components/BaseSection.vue';
import type {Member} from '@/interfaces';

// 회원 리스트
const memberList = new Map<number, Member>();
memberList.set(33456, {id: 33456, name: "영희", email: "box@example.com", points: 35, note: "신규 가입 특전"});
memberList.set(47783, {id: 47783, name: "철수", email: "mue@example.com", points: 53});
// 회원 리스트를 Provide
provide("memberList", reactive(memberList));
</script>

<template>
  <BaseSection />
</template>

<style scoped>

</style>