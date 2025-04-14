<script setup lang="ts">
import {ref} from 'vue';

const cocktailListInit: { [key: number]: string; } = {
  2345: "화이트레이디",
  4412: "블루하와이",
  6792: "뉴욕"
};
const cocktailList = ref( cocktailListInit);
</script>

<template>
  <div>
    <ul>
      <li v-for="(cocktailName, id) in cocktailList" v-bind:key="'cocktailList' + id">ID가 {{id}}인 칵테일은 {{cocktailName}}</li>
    </ul>
    <ul>
      <li v-for="(cocktailName, id, index) in cocktailList" v-bind:key="'cocktailList' + id">{{index + 1}}: ID가 {{id}}인 칵테일은 {{cocktailName}}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>