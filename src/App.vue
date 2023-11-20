<template>
  <v-layout>
    <div ref="header" class="container">
      <HeaderComponent />
      <hr />
    </div>

    <main class="main">
      <RouterView />
    </main>

    <!-- <footer>Footer</footer> -->
  </v-layout>
</template>

<script setup lang="ts">
import HeaderComponent from "@/shared/components/HeaderComponent.vue"
import { useGlobalStore } from "@/store/GlobalStore"
import { ref, onMounted, nextTick, onBeforeUnmount, watch } from "vue"
import { EWindow } from "@/interfaces/stores/GlobalStore"

// manage screen responsiveness

const global = useGlobalStore()
const windowWidth = ref(window.innerWidth)

watch(windowWidth, () => {
  console.log("App >  watch windowWidth >> ", windowWidth)
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

// Check scroll and manage header 'sticky' class

// const header = ref<HTMLElement | null>(null)
// const headerSticky = ref(false)
// const windowScroll = ref(window.scrollY)
// const haederHeight = ref<number | null>(null)

// const getHeaderHeight = (headerElement: Ref<HTMLElement | null>) => {
//   haederHeight.value = headerElement.value?.offsetHeight!
// }

// watch(windowScroll, () => {
//   if (windowScroll.value > header.value?.offsetHeight!) {
//     headerSticky.value = true
//   } else {
//     headerSticky.value = false
//   }
// })

// const onScroll = () => {
//   windowScroll.value = window.scrollY
// }

// onMounted(() => {
//   nextTick(() => {
//     window.addEventListener("scroll", onScroll)
//   })
// })

// onBeforeUnmount(() => {
//   window.removeEventListener("scroll", onScroll)
// })
</script>

<style scoped lang="scss">
.v-layout {
  display: block;
  background-color: #f9f9f9;
}

.container {
  &.sticky {
    background-color: #f9f9f9;
    padding-bottom: 0;
    z-index: 100;
  }
}
</style>
