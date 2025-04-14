<script setup lang="ts">
import {ref} from 'vue';

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(2345, {id: 2345, name: "화이트레이디", price: 1200});
cocktailDataListInit.set(4412, {id: 4412, name: "블루하와이", price: 1500});
cocktailDataListInit.set(6792, {id: 6792, name: "뉴욕", price: 1100});
cocktailDataListInit.set(8429, {id: 8429, name: "마티니", price: 1500});
const cocktailDataList = ref(cocktailDataListInit);
interface Cocktail {
  id: number;
  name: string;
  price: number;
}
</script>

<template>
  <div>
    <ul>
      <template v-for="[id, cocktailItem] in cocktailDataList" v-bind:key="id">
        <li>{{cocktailItem.name}}의 가격은{{cocktailItem.price}}원</li>
      </template>
    </ul>
  </div>
</template>

<style scoped>

</style>