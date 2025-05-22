<script setup lang="ts">
import OneSection from '@/components/OneSection.vue';
import {ref} from 'vue';

const yeongheeProblemsInit: string[] = ["통화가 되지 않습니다", "부재중입니다"];
const yeonghee = ref("영희");
const cheolsooProblems = ref(yeongheeProblemsInit);
const cheolsoo = ref("철수");
</script>

<template>
  <section>
    <h2>Slot 이용</h2>
    <OneSection v-bind:name="yeonghee">
      <template v-slot:default>
        <p>문제 발생</p>
      </template>
      <template v-slot:detail>
        <ul>
          <li v-for="problem in yeongheeProblemsInit" v-bind:key="problem">
            {{problem}}
          </li>
        </ul>
      </template>
    </OneSection>
    <OneSection v-bind:name="cheolsoo" />
  </section>
</template>

<style scoped>

</style>