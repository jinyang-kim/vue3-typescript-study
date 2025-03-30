<script setup lang="ts">
import {computed, ref} from 'vue';

const msg = ref("안녕하세요");
const isTextColorRed = ref(true);
const isBgColorBlue = ref(false);
const styles = ref({
  textColorRed: false,
  bgColorBlue: true
});
const computedStyles = computed((): {textColorRed: boolean; bgColorBlue: boolean;} => {
  // 무작위 값을 이용하여 0또는 1을 생성 (textColorRed용)
  const randText = Math.round(Math.random());
  // textColorRed 속성의 값을 나타내는 변수를 true로 준비
  let textColorFlg = true;
  // 발생한 무작위값이 0이면 false로 변경
  if (randText == 0) {
    textColorFlg = false;
  }
  // 무작위 값을 이용하여 0 또는 1을 생성 (bgColorBlue용)
  const randBg = Math.round(Math.random());
  // bgColorBlue 속성의 값을 나타내는 변수를 true로 준비
  let bgColorFlg = true;
  // 발생한 무작위 값이 0이면 false로 변경
  if (randBg == 0) {
    bgColorFlg = false;
  }
  // 각 속성의 값을 객체로 변환
  return {
    textColorRed: textColorFlg,
    bgColorBlue: bgColorFlg
  }
})
</script>

<template>
  <div>
    <p v-bind:class="{textColorRed: true, bgColorBlue: true}">{{msg}}</p>
    <p v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">{{msg}}</p>
    <p v-bind:class="{textColorPink: true}">{{msg}}</p>
    <p v-bind:class="{'text-color-pink': true}">{{msg}}</p>
    <p class="textSize24" v-bind:class="{textColorRed: isTextColorRed, bgColorBlue: isBgColorBlue}">{{msg}}</p>
    <p class="textSize24" v-bind:class="styles">{{msg}}</p>
    <p v-bind:class="computedStyles">{{msg}}</p>
  </div>
</template>

<style scoped>
.textColorRed {
  color: red;
}
.text-color-pink {
  color: pink;
}
.bgColorBlue {
  background-color: blue;
}
.textSize24 {
  font-size: 24px;
}
</style>
