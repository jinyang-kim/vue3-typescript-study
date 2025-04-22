<script setup lang="ts">
import {computed, ref} from 'vue';

const cocktailDataListInit = new Map<number, Cocktail>();
cocktailDataListInit.set(2345, {id: 2345, name: "화이트레이디", price: 1200});
cocktailDataListInit.set(4412, {id: 4412, name: "블루하와이", price: 1500});
cocktailDataListInit.set(6792, {id: 6792, name: "뉴욕", price: 1100});
cocktailDataListInit.set(8429, {id: 8429, name: "마티니", price: 1500});
const cocktailDataList = ref(cocktailDataListInit);
const cocktail1500 = computed(
  // 계산 함수 반환값 형태는 map
  (): Map<number, Cocktail> => {
    // 필터링한 결과를 저장하는 새로운 Map 준비
    const newList = new Map<number, Cocktail>();
    // cocktailDataList 안의 Map을 반복 처리
    cocktailDataList.value.forEach(
      //  반복의 각 처리 내용을 나타내는 함수
      (value: Cocktail, key: number): void => {
        // 칵테일 가격이 1500원이라면 newList에 등록
        if(value.price == 1500) {
          newList.set(key, value);
        }
      }
    );

    // 필터링된 새 Map을 반환값으로 설정
    return newList;
  }
)
const changeWhiteLadyPriceInList = (): void => {
  const whiteLady = cocktailDataList.value.get(2345) as Cocktail;
  whiteLady.price = 1500;
}
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
  <div>
    가격이 1500원인 칵테일 리스트
    <ul>
      <li v-for="[id, cocktailItem] in cocktail1500" v-bind:key="'cocktail1500' + id">
        {{cocktailItem.name}}의 가격은 {{cocktailItem.price}}
      </li>
    </ul>
  </div>
  <p>
    CocktailDataList 내의 화이트레이디 가격을 1500원으로
    <button v-on:click="changeWhiteLadyPriceInList">변경</button>
  </p>
</template>

<style scoped>

</style>