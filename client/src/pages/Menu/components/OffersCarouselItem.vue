<template>
  <div class="carousel-item">
    <h1 class="carousel-item__title">
      50% OFF <br />
      <span>WEEKENDS</span>
    </h1>
    <div class="carousel-item__dish">
      <img :src="DishImage" alt="Dish" />
    </div>
  </div>
</template>

<script setup lang="ts">
import DishImage from "@/assets/images/shared/dish-preview-1.png"
</script>

<style scoped lang="scss">
.carousel-item {
  display: flex;
  justify-items: start;
  align-items: center;
  width: 100%;
  height: 250px;
  border-radius: 18.693px;
  background: $violet-dark;
  padding: 30px 50px;

  &__title {
    @extend .poppins-bold !optional;
    font-size: 65px;
    line-height: 54px;
    color: #ffffff;
    span {
      color: #7c6fcd;
    }
  }

  &__dish {
    width: 250px;
    height: 250px;
    position: absolute;
    bottom: 130px;
    right: 30px;
  }
}
</style>
