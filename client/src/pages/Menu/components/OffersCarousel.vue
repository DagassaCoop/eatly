<template>
  <div class="carousel">
    <v-carousel
      v-model="carousel"
      hide-delimiters
      :show-arrows="false"
      :cycle="true"
      :interval="5000"
      class="carousel__scroll"
    >
      <v-carousel-item v-for="(item, i) in items" :key="i" cover class="carousel__scroll-item">
        <OffersCarouselItem :data="item" />
      </v-carousel-item>
    </v-carousel>
    <div class="carousel__delimiters">
      <div
        v-for="(_, index) in items"
        :key="index"
        :class="['carousel__delimiters-item', 'm-1', index === carousel ? 'active' : '']"
        @click="carousel = index"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

import OffersCarouselItem from "./OffersCarouselItem.vue"

const items = [1, 2, 3]

const carousel: any = ref(null)
</script>

<style lang="scss">
.carousel {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  &__scroll {
    max-height: 400px;
    .v-responsive__content {
      max-height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .v-carousel-item {
      margin: 0 10px;
    }
  }

  &__delimiters {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;

    &-item {
      cursor: pointer;
      height: 6px;
      flex: 1;
      border-radius: 12px;
      background-color: #dbd9ee;
      transition: all 0.4s ease-in-out;
    }

    .active {
      flex: 2;
      background-color: $violet-dark;
    }
  }
}
</style>
