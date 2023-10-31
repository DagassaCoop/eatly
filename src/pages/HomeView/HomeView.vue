<template>
  <div :class="['home-page', classes[global.window]]">
    <component :is="components[global.window]"></component>
  </div>
</template>

<script setup lang="ts">
import { EWindow } from "@/interfaces/stores/GlobalStore"
import { useGlobalStore } from "@/store/GlobalStore"

import HomeMobileView from "./HomeMobileView.vue"
import HomeTabletView from "./HomeTabletView.vue"
import HomeDesctopView from "./HomeDesktopView.vue"

const global = useGlobalStore()

const classes = {
  [EWindow.mobile]: "hidden-sm-and-up",
  [EWindow.tablet]: "hidden-xs hidden-lg-and-up",
  [EWindow.desktop]: "hidden-md-and-down"
}

const components = {
  [EWindow.mobile]: HomeMobileView,
  [EWindow.tablet]: HomeTabletView,
  [EWindow.desktop]: HomeDesctopView
}
</script>

<style lang="scss">
h1 span {
  color: $main-normal;
}
</style>
