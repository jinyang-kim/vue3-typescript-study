<script setup lang="ts">
import {computed} from 'vue';
import { RouterLink } from 'vue-router';
import type { Member } from '@/interfaces';
import {useMembersStore} from '@/stores/members.ts';

interface Props {
  id: number;
}

const props = defineProps<Props>();
const membersStore = useMembersStore();
const member = computed(
  (): Member => {
    return membersStore.getById(props.id);
  }
)
const localNote = computed(
  (): string => {
    let localNote = "--";
    if(member.value.note != undefined) {
      localNote = member.value.note;
    }

    return localNote;
  }
)
</script>

<template>
  <h1>회원 관리</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{name: 'AppTop'}">Top</RouterLink>
      </li>
      <li>
        <RouterLink v-bind:to="{name: 'MemberList'}">회원 리스트</RouterLink>
      </li>
      <li>회원 상세 정보</li>
    </ul>
  </nav>
  <section>
    <h2>회원 상세 정보</h2>
    <dl>
      <dt>ID</dt>
      <dd>{{member.id}}</dd>
      <dt>이름</dt>
      <dd>{{member.name}}</dd>
      <dt>메일주소</dt>
      <dd>{{member.email}}</dd>
      <dt>보유 포인트</dt>
      <dd>{{member.points}}</dd>
      <dt>비고</dt>
      <dd>{{localNote}}</dd>
    </dl>
  </section>
</template>

<style scoped>

</style>