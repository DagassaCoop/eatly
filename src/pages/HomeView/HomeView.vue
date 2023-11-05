<template>
  <div :class="['home-page', global.windowClasses[global.window]]">
    <HeroSection />
    <FeaturesSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue"
import FeaturesSection from "./components/FeaturesSection.vue"

import { useGlobalStore } from "@/store/GlobalStore"

const global = useGlobalStore()
</script>

<style lang="scss">
.home-page {
  &__title {
    font-size: 46px;
    line-height: 54px;

    span {
      color: $violet-normal;
    }
  }

  &__description {
    @extend .inter;
    color: $text-grey-main;
    font-size: 12px;
    line-height: 18px;

    span {
      color: $violet-normal;
    }
  }
}
</style>
