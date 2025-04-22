<script setup lang="ts">
import {ref} from 'vue';

const cocktailListInit: string[] = ["화이트레이디", "블루하와이", "뉴욕"];
const cocktailList = ref(cocktailListInit);
const changeCocktailList = (): void => {
  cocktailList.value = ["발랄라이카", "XYZ", "맨헤튼"];
};
const addCocktailList = ():void => {
  cocktailList.value.push("블루문");
}
const deleteFromCocktailList = (): void => {
  cocktailList.value.pop();
};
</script>

<template>
  <ul>
    <li v-for="(cocktailName, index) in cocktailList" v-bind:key="cocktailName">{{cocktailName}}(인덱스 {{index}}</li>
  </ul>
  <p>
    CocktailList를
    <button v-on:click="changeCocktailList">변경</button>
  </p>
  <p>
    CocktailList의 끝에 블루문을
    <button v-on:click="addCocktailList">추가</button>
  </p>
  <p>
    CocktailList에서 끝에 요소를
    <button v-on:click="deleteFromCocktailList">삭제</button>
  </p>
</template>

<style scoped>

</style>