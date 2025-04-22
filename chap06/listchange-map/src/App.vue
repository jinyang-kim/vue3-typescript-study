<script setup lang="ts">
import {ref} from 'vue';

const cocktailListInit = new Map<number, string>();
cocktailListInit.set(2345, "화이트레이디");
cocktailListInit.set(4412, "블루하와이");
cocktailListInit.set(6792, "뉴욕");

const cocktailList = ref(cocktailListInit);

const changeCocktailList = ():void => {
  cocktailList.value.clear();
  cocktailList.value.set(3416, "발랄라이카");
  cocktailList.value.set(5517, "XYZ");
  cocktailList.value.set(7415, "맨해튼");
};
const addCocktailList = (): void => {
  cocktailList.value.set(8894, "블루문");
}
const deleteFromCocktailList = (): void => {
  cocktailList.value.delete(5517);
}
</script>

<template>
  <div>
    <ul>
      <li v-for="[id, cocktailName] in cocktailList" v-bind:key="id">ID가 {{id}}인 칵테일은 {{cocktailName}}</li>
    </ul>
  </div>
  <p>
    CocktailList를
    <button v-on:click="changeCocktailList">변경</button>
  </p>
  <p>
    CocktailList를
    <button v-on:click="addCocktailList">추가</button>
  </p>
  <p>
    CocktailList를
    <button v-on:click="deleteFromCocktailList">삭제</button>
  </p>
</template>

<style scoped>

</style>