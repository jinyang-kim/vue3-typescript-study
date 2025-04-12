<script setup lang="ts">
import {ref} from 'vue';

const msg = ref("시작 전");
const onEnterKey = ():void => {
  msg.value = "엔터 키가 입력되었습니다.";
}
const onRightButtonClick = ():void => {
  msg.value = "마우스 우클릭되었습니다.";
}
const onShiftClick = ():void => {
  msg.value = "Shift 키를 누르면서 클릭했습니다.";
}
const onShiftKey = ():void => {
  msg.value = "Shift 키를 눌렀습니다.";
}
</script>

<template>
  <div>
    <p>{{msg}}</p>
    <input type="text" v-on:keydown.enter="onEnterKey" /><br />
    <button v-on:click.right="onRightButtonClick">마우스 우클릭</button>
    <button v-on:click.shift="onShiftClick">시프크 키를 누르면서 클릭</button>
    <input type="text" v-on:keydown.shift="onShiftKey" /><br />
  </div>
</template>

<style scoped>

</style>
