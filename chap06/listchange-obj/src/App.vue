<script setup lang="ts">
import {ref} from 'vue';

const whiteLadyInit: {
  id: number;
  name: string;
  price: number;
  recipe: string;
} = {
  id: 2345,
  name: "화이티레이디",
  price: 1200,
  recipe: "진 30ml + 쿠앵트로 15ml + 레몬과즙 15ml"
}
const whiteLady = ref(whiteLadyInit);
const changeWhiteLadyPrice = ():void => {
  whiteLady.value.price = 1500;
}
</script>

<template>
  <div>
    <dl>
      <template v-for="(value, key) in whiteLady" v-bind:key="key">
        <dt>{{key}}</dt>
        <dd>{{value}}</dd>
      </template>
    </dl>
  </div>
  <p>
    가격을 1500원으로
    <button v-on:click="changeWhiteLadyPrice">변경</button>
  </p>
</template>

<style scoped>

</style>