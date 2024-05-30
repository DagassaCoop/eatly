<template>
  <div :class="['top-dishes container', pageName + '__section']">
    <h2 :class="['top-dishes__title', pageName + '__subtitle']">
      Our Top <br />
      <span>Dishes</span>
    </h2>
    <div class="top-dishes__dishes">
      <DishPreview v-for="(dish, index) in dishes" :key="index" :dish="dish" />
    </div>
    <div class="top-dishes__all">
      <RouterLink class="top-dishes__all-link" :to="{ name: 'dishes' }">View All</RouterLink>
      <img class="top-dishes__all-arrow" :src="arrow" alt="arrow" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { EDishTags, IDish } from "@/interfaces/dish"
import { uuid } from "vue-uuid"

import DishPreview from "../components/DishPreview.vue"

import dishPreviewImageOne from "@/assets/images/shared/dish-preview-1.png"
import dishPreviewImageTwo from "@/assets/images/shared/dish-preview-2.png"
import dishPreviewImageThree from "@/assets/images/shared/dish-preview-3.png"
import arrow from "@/assets/images/home/top-restaurants-arrow.jpeg"

const { pageName } = defineProps<{
  pageName: string
}>()

const dishes: Array<IDish> = [
  {
    id: uuid.v4(),
    name: "Chicken Hell",
    rate: 4.8,
    timeAvg: 24,
    tags: [EDishTags.Healthy],
    img: dishPreviewImageOne,
    price: 12.99
  },
  {
    id: uuid.v4(),
    name: "Swe Dish",
    rate: 4.9,
    timeAvg: 24,
    tags: [EDishTags.Trending],
    img: dishPreviewImageTwo,
    price: 19.99
  },
  {
    id: uuid.v4(),
    name: "Swe Dish",
    rate: 4.9,
    timeAvg: 24,
    tags: [EDishTags.Supreme],
    img: dishPreviewImageThree,
    price: 19.99
  },
  {
    id: uuid.v4(),
    name: "Chicken Hell",
    rate: 4.8,
    timeAvg: 24,
    tags: [EDishTags.Healthy],
    img: dishPreviewImageOne,
    price: 12.99
  }
]
</script>

<style scoped lang="scss">
.top-dishes {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  &__title {
    width: 100%;
    text-align: center;
    margin: 60px 0;
  }

  &__dishes {
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-wrap: wrap;
    margin-bottom: 20px;

    & * {
      width: calc(50% - 20px);
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
      @extend .poppins !optional;
      color: $text-gray-second;
      font-size: 20px;
      line-height: 24px;
      margin-right: 20px;
      text-decoration: none;
    }
  }
}
</style>
