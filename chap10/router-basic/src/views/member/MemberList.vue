<script setup lang="ts">
import { inject } from 'vue';
import { RouterLink } from 'vue-router';
import type { Member } from '@/interfaces';

const memberList = inject("memberList") as Map<number, Member>;
</script>

<template>
  <h1>회원 관리</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{name: 'AppTop'}">Top</RouterLink>
      </li>
      <li>회원 리스트</li>
    </ul>
  </nav>
  <section>
    <h2>회원 리스트</h2>
    <section>
      <ul>
        <li v-for="[id, member] in memberList" v-bind:key="id">
          <RouterLink v-bind:to="{name: 'MemberDetail', params: {id: id}}">
            ID가 {{id}}인 {{member.name}} 님
          </RouterLink>
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped>

</style>