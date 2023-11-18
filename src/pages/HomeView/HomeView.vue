<template>
  <div :class="['home-page', global.windowClasses[global.window]]">
    <HeroSection />
    <FeaturesSection />
    <MobileSection />
    <hr />
    <TopRestaurantsSection />
    <hr />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue"
import FeaturesSection from "./components/FeaturesSection.vue"
import MobileSection from "./components/MobileSection.vue"
import TopRestaurantsSection from "./components/TopRestaurantsSection.vue"

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

  &__subtitle {
    font-size: 30px;
    line-height: 34px;

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

  &.sticky {
    padding-top: 100px;
  }

  hr {
    background-color: #cbcbcb;
  }
}
</style>
