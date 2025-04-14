<script setup lang="ts">
import {computed} from 'vue';

const showOrNot = computed(
  (): boolean => {
    // 반환값용 변수를 초깃값 false로 준비
    let showOrNot = false;
    // 0 ~ 100 무작위값 생성
    const rand = Math.round(Math.random() * 100);
    // 무작위 값이 50 이상이면 true를 반환
    if(rand >= 50) {
      showOrNot = true;
    }

    return showOrNot;
  }
)
</script>

<template>
  <div>
    <section>
      v-if를 이용
      <p v-if="showOrNot">조건에 부합하여 표시</p>
    </section>
    <section>
      v-show를 이용
      <p v-show="showOrNot">조건에 부합하여 표시</p>
    </section>
  </div>
</template>

<style scoped>

</style>