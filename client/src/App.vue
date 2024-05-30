<template>
  <v-layout class="app-body">
    <v-container>
      <HeaderComponent />
      <hr />
    </v-container>

    <main class="main">
      <RouterView />
    </main>

    <!-- <footer>Footer</footer> -->
  </v-layout>
</template>

<script setup lang="ts">
import HeaderComponent from "@/shared/components/HeaderComponent.vue"
</script>

<style scoped lang="scss">
.v-layout {
  display: block;
  background-color: #f9f9f9;
  overflow: hidden;
}

.container {
  &.sticky {
    background-color: #f9f9f9;
    padding-bottom: 0;
    z-index: 100;
  }
}
</style>
