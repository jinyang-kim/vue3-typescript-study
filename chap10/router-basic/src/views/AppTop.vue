<script setup lang="ts">

</script>

<template>
  <h1>Top</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>Top</li>
    </ul>
  </nav>
  <section>
    <p>
      <RouterLink v-bind:to="{name: 'MemberList'}">
        회원 관리는 여기서
      </RouterLink>
    </p>
  </section>
</template>

<style scoped>

</style>