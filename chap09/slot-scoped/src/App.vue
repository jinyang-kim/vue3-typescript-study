<script setup lang="ts">
import OneSection from '@/components/OneSection.vue';
</script>

<template>
  <section>
    <OneSection>
      <template v-slot="slotProps">
        <dl>
          <dt>이름</dt>
          <dd>{{slotProps.memberInfo.name}}</dd>
          <dt>상황</dt>
          <dd>{{slotProps.memberInfo.state}}</dd>
        </dl>
      </template>
    </OneSection>
  </section>
</template>

<style scoped>

</style>