<template>
  <div class="home-page__section top-restaurants container">
    <h2 class="home-page__subtitle top-restaurants__title">
      Our Top <br />
      <span>Restaurants</span>
    </h2>
    <div class="top-restaurants__restaurants">
      <RestaurantPreview v-for="(item, index) in restaurants" :key="index" :restaurant="item" />
    </div>
    <div class="top-restaurants__all">
      <RouterLink class="top-restaurants__all-link" :to="{ name: 'restaurants' }">View All</RouterLink>
      <img class="top-restaurants__all-arrow" :src="arrow" alt="arrow" />
    </div>
  </div>
</template>

<script setup lang="ts">
import RestaurantPreview from "@/components/RestaurantPreview.vue"
import { ERestaurantTags, IRestaurantPreview } from "@/interfaces/retaurant"

import restaurantPreviewImgOne from "@/assets/images/home/top-restaurants-1.jpeg"
import restaurantPreviewImgTwo from "@/assets/images/home/top-restaurants-2.jpeg"
import arrow from "@/assets/images/home/top-restaurants-arrow.jpeg"

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

  &__all {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: baseline;
    margin-bottom: 30px;

    &-link {
      @extend .poppins;
      color: $text-gray-second;
      font-size: 20px;
      line-height: 24px;
      margin-right: 20px;
      text-decoration: none;
    }
  }
}
</style>
