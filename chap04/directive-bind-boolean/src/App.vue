<script setup lang="ts">
import {ref} from 'vue';

const isSendButtonDisabled = ref(true);
</script>

<template>
  <div>
    <p><button type="button" v-bind:disabled="isSendButtonDisabled">전송</button></p>
  </div>
</template>

<style scoped>

</style>
