<template>
  <div class="home-page__section top-restaurants container">
    <h2 class="home-page__subtitle top-restaurants__title">
      Our Top <br />
      <span>Restaurants</span>
    </h2>
    <div class="top-restaurants__restaurants">
      <RestaurantPreview v-for="(item, index) in restaurants" :key="index" :restaurant="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RestaurantPreview from "@/components/RestaurantPreview.vue"
import { ERestaurantTags, IRestaurantPreview } from "@/interfaces/retaurant"

import restaurantPreviewImgOne from "@/assets/images/home/top-restaurants-1.jpeg"
import restaurantPreviewImgTwo from "@/assets/images/home/top-restaurants-2.jpeg"

const restaurants: Array<IRestaurantPreview> = [
  {
    name: "The Chicken King",
    rate: 4.8,
    timeAvg: 24,
    tags: [ERestaurantTags.Healthy],
    img: restaurantPreviewImgOne
  },
  {
    name: "The Burger King",
    rate: 4.9,
    timeAvg: 24,
    tags: [ERestaurantTags.Trending],
    img: restaurantPreviewImgTwo
  },
  {
    name: "The Burger King",
    rate: 4.9,
    timeAvg: 24,
    tags: [ERestaurantTags.Trending],
    img: restaurantPreviewImgTwo
  }
]
</script>

<style scoped lang="scss">
.top-restaurants {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &__title {
    width: 100%;
    text-align: center;
    margin-bottom: 60px;
  }

  &__restaurants {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    & * {
      width: 100%;
      margin-bottom: 40px;
    }
  }
}
</style>
