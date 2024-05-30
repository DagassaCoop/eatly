<template>
  <div :class="['home-page', global.windowClasses[global.window]]">
    <HeroSection />
    <FeaturesSection />
    <MobileSection />
    <hr />
    <TopRestaurantsSection page-name="home-page" />
    <hr />
    <TopDishes page-name="home-page" />
    <hr />
    <ControlPurchase page-name="home-page" />
  </div>
</template>

<script setup lang="ts">
import HeroSection from "./components/HeroSection.vue"
import FeaturesSection from "./components/FeaturesSection.vue"
import MobileSection from "./components/MobileSection.vue"
import TopRestaurantsSection from "@/shared/sections/TopRestaurantsSection.vue"
import TopDishes from "@/shared/sections/TopDishes.vue"
import ControlPurchase from "@/shared/sections/ControlPurchase.vue"

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
    @extend .inter !optional;
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
