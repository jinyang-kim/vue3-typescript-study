<script setup lang="ts">
import {computed, ref} from 'vue';

const cocktailDataListInit: Cocktail[] = [
  {id: 2345, name: "화이트레이디", price: 1200},
  {id: 4412, name: "블루하와이", price: 1500},
  {id: 6792, name: "뉴욕", price: 1100},
  {id: 8429, name: "마티니", price: 1500}
];
const cocktailDataList = ref(cocktailDataListInit);
const cocktail1500 = computed(
  (): Cocktail[] => {
    // 배열의 filter() 메서드를 사용해 새로운 배열 생성
    const newList = cocktailDataList.value.filter(
      // filter() 메서드의 필터링 조건 함수
      // 인자느 배열의 각 요소인 Cocktail 객체
      (cocktailItem: Cocktail): boolean => {
        // 가격이 1500인지 여부를 반환값으로 설정
        return cocktailItem.price == 1500;
      }
    )

    console.log(newList);

    return newList;
  }
)

interface Cocktail {
  id: number;
  name: string;
  price: number;
}
</script>

<template>
  <section>
    칵테일 리스트
    <ul>
      <template v-for="cocktailItem in cocktailDataList" v-bind:key="cocktailItem.id">
        <li>{{cocktailItem.name}}의 가격은 {{cocktailItem.price}}원</li>
      </template>
    </ul>
  </section>
  <section>
    가격이 1500원인 칵테일 리스트
    <ul>
      <li v-for="cocktailItem in cocktail1500" v-bind:key="'cocktail1500' + cocktailItem.id">{{cocktailItem.name}}의 가격은{{cocktailItem.price}}원</li>
    </ul>
  </section>
</template>

<style scoped>

</style>