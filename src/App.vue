<template>
  <v-layout>
    <div class="container">
      <HeaderComponent />
      <hr />
    </div>

    <main class="main">
      <RouterView />
    </main>

    <footer>Footer</footer>
  </v-layout>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue"
import { useGlobalStore } from "@/store/GlobalStore"
import { ref, onMounted, nextTick, onBeforeUnmount, watch } from "vue"
import { EWindow } from "@/interfaces/stores/GlobalStore"

const global = useGlobalStore()
const windowWidth = ref(window.innerWidth)

watch(windowWidth, () => {
  let window: EWindow = EWindow.mobile

  if (windowWidth.value < 600) {
    window = EWindow.mobile
  } else if (windowWidth.value >= 600 && windowWidth.value < 1280) {
    window = EWindow.tablet
  } else {
    window = EWindow.desktop
  }

  global.setWindow(window)
})

const onResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  nextTick(() => {
    window.addEventListener("resize", onResize)
  })
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", onResize)
})
</script>

<style scoped lang="scss">
.v-layout {
  display: block;
}
</style>
