<script setup lang="ts">
import {reactive} from 'vue';

const memberInfo = reactive({
  name: "영희",
  state: "문제없습니다"
})
</script>

<template>
  <section>
    <slot v-bind:memberInfo="memberInfo">
      <h1>{{memberInfo.name}} 님의 상황</h1>
      <p>{{memberInfo.state}}</p>
    </slot>
  </section>
</template>

<style scoped>

</style>