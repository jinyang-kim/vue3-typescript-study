<script setup lang="ts">
import {ref} from 'vue';

const cocktailListInit = new Map<number, string>();
cocktailListInit.set(2345, "화이트레이디");
cocktailListInit.set(4412, "블루하와이");
cocktailListInit.set(6792, "뉴욕");

const cocktailList = ref(cocktailListInit);
</script>

<template>
  <div>
    <ul>
      <li v-for="[id, cocktailName] in cocktailList" v-bind:key="id">ID가 {{id}}인 칵테일은 {{cocktailName}}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>