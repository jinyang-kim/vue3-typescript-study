<script setup lang="ts">
import {ref, watch} from 'vue';

// 칵테일 번호 템플릿 변수
const cocktailNo = ref(1);
// 칵테일 번호에 해당하는 칵테일 정보 템플릿 변수 준비
const priceMsg = ref("");
// watch를 설정
watch(cocktailNo,
  (newVal: number, oldVal: number): void => {
    let msg = "이전 칵테일: ";
    msg += getCocktailInfo(oldVal);
    msg += "  =>  ";
    msg += "현재 칵테일: ";
    msg += getCocktailInfo(newVal);
    // 표시 문자열을 prcieMsg로 설정
    priceMsg.value = msg;
  }
)

// cocktailNo를 1초마다 1~4의 무작위값으로 변경
setInterval(
  (): void => {
    cocktailNo.value = Math.round(Math.random() * 3) + 1;
  }, 1000
)

interface Cocktail {
  id: number;
  name: string;
  price: number;
}

function getCocktailInfo(cocktailNo: number): string {
  // 칵테일 리스트
  const cocktailDataListInit = new Map<number, Cocktail>();
  cocktailDataListInit.set(1, {id: 1, name: "화이트레이디", price: 1200});
  cocktailDataListInit.set(2, {id: 2, name: "블루하와이", price: 1500});
  cocktailDataListInit.set(3, {id: 3, name: "뉴욕", price: 1100});
  cocktailDataListInit.set(4, {id: 4, name: "마티니", price: 1500});

  // 칵테일 번호에 해당하는 칵테일 데이터 취득
  const cocktail = cocktailDataListInit.get(cocktailNo);
  // 칵테일 번호에 해당하는 정보가 없는 경우 메시지
  let msg = "해당 칵테일은 없습니다.";
  // 칵테일 번호에 해당하는 정보가 있는 경우 메시지
  if(cocktail != undefined) {
    // 칵테일 번호에 해당하는 칵테일 이름과 금액을 표시하는 문자열 생성
    msg = `해당 칵테일은 ${cocktail.name}이며 가격은 ${cocktail.price}원입니다.`;
  }
  // 표시 문자열 반환
  return msg;
}
</script>

<template>
  <div>
    <p>현재 칵테일 번호: {{cocktailNo}}</p>
    <p>{{priceMsg}}</p>
  </div>
</template>

<style scoped>

</style>