<script setup lang="ts">

</script>

<template>
  <div>
    <ul>
      <template v-for="r in 5" v-bind:key="r">
        <li>반지름이 {{r}}인 원의 둘레: {{2 * r * 3.14}}</li>
      </template>
    </ul>
  </div>
</template>

<style scoped>

</style>