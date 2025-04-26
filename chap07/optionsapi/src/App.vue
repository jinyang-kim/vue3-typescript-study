<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "App",
  data() {
    return {
      height: Math.round(Math.random() * 10),
      width: Math.round(Math.random() * 10),
      cocktailNo: 0,
      priceMsg: ""
    }
  },
  computed: {
    area(): number {
      return this.height * this.width;
    }
  },
  methods: {
    change(): void {
      this.height = Math.round(Math.random() * 10);
      this.width = Math.round(Math.random() * 10);
    }
  },
  updated(): void {
    console.log(`updated called: ${this.height} * ${this.width}`);
  }
});
</script>

<template>
  <div>
    <p>세로 {{height}}, 가로 {{width}}인 사각형의 면적은 {{area}}</p>
    <button v-on:click="change">값을 변경</button>
  </div>
</template>

<style scoped>

</style>