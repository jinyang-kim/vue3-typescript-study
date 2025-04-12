<script setup lang="ts">
import {ref} from 'vue';

const pMsg = ref("이벤트 전 (클릭해주세요!)");
const pBgColorEvent = ref("white");
const onPClickWithEvent = (bgColor: string, event: MouseEvent): void => {
  pBgColorEvent.value = bgColor;
  pMsg.value = event.timeStamp.toString();
}
</script>

<template>
  <div v-on:click="onPClickWithEvent('green', $event)" v-bind:style="{backgroundColor: pBgColorEvent}">
    {{pMsg}}
  </div>
</template>

<style scoped>

</style>
