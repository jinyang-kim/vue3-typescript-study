<script setup lang="ts">
import {ref} from 'vue';

const cocktailListInit: string[] = ["화이트레이디", "블루하와이", "뉴욕"];
const cocktailList = ref(cocktailListInit);
</script>

<template>
  <div>
    <ul>
      <li v-for="cocktailName in cocktailList" v-bind:key="cocktailName">{{cocktailName}}</li>
    </ul>
    <ul>
      <li v-for="(cocktailName, index) in cocktailList" v-bind:key="cocktailName">{{cocktailName}} (인덱스 {{index}})</li>
    </ul>
  </div>
</template>

<style scoped>

</style>