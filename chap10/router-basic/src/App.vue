<script setup lang="ts">
import type { Member } from '@/interfaces';
import {provide, reactive} from 'vue';

const memberList = new Map<number, Member>();
memberList.set(33456, {id: 33456, name: "영희", email: "box@example.com", points: 35, note: "신규 가입 특정"});
memberList.set(47783, {id: 47783, name: "철수", email: "mue@exmaple.com", points: 53});
provide("memberList", reactive(memberList));
</script>

<template>
  <header>
    <h1>Vue 라우터 샘플</h1>
    <main>
      <RouterView />
    </main>
  </header>
</template>

<style>
main {
  border: 1px solid blue;
  padding: 10px;
}
#breadcrumbs ul li {
  display: inline;
  list-style-type: none;
}
#breadcrumbs ul {
  padding-left: 0;
}
#breadcrumbs ul .current {
  color: red;
}
#breadcrumbs ul li:before {
  content: " > ";
}
#breadcrumbs ul li:first-child:before {
  content: none;
}
</style>