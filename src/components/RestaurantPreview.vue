<template>
  <div class="restaurant">
    <div class="restaurant__img" :style="{ backgroundImage: `url(${restaurant.img})` }" />
    <div class="restaurant__info">
      <div class="restaurant__info-text">
        <div class="restaurant__info-tags">
          <div
            v-for="(tag, index) in restaurant.tags"
            :key="index"
            class="restaurant__info-tags-item"
            :style="tags_style[tag]"
          >
            {{ ERestaurantTags[tag] }}
          </div>
        </div>
        <h4 class="restaurant__info-title">{{ restaurant.name }}</h4>
        <div class="restaurant__info-dop">
          <span class="restaurant__info-time">{{ restaurant.timeAvg }}min •</span>
          <svg
            class="restaurant__info-star"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M13.6156 17.7428C14.9711 18.4847 16.1631 17.5855 15.9039 16.0118L15.4384 13.1862L17.4102 11.1852C18.5068 10.0723 18.0538 8.61401 16.5361 8.38441L13.8112 7.97217L12.5986 5.4141C11.9194 3.9812 10.4446 3.96579 9.76406 5.40139L8.54543 7.97217L5.82051 8.38441C4.30502 8.61369 3.84828 10.0707 4.94645 11.1852L6.91822 13.1862L6.45275 16.0118C6.19387 17.5833 7.38367 18.4858 8.74108 17.7428L11.1783 16.4087L13.6156 17.7428Z"
              fill="#6C5FBC"
            />
            <mask
              id="mask0_1_5425"
              style="mask-type: luminance"
              maskUnits="userSpaceOnUse"
              x="4"
              y="4"
              width="15"
              height="15"
            >
              <path
                d="M13.6156 17.7428C14.9711 18.4847 16.1631 17.5855 15.9039 16.0118L15.4384 13.1862L17.4102 11.1852C18.5068 10.0723 18.0538 8.61401 16.5361 8.38441L13.8112 7.97217L12.5986 5.4141C11.9194 3.9812 10.4446 3.96579 9.76406 5.40139L8.54543 7.97217L5.82051 8.38441C4.30502 8.61369 3.84828 10.0707 4.94645 11.1852L6.91822 13.1862L6.45275 16.0118C6.19387 17.5833 7.38367 18.4858 8.74108 17.7428L11.1783 16.4087L13.6156 17.7428Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_1_5425)"></g>
          </svg>
          <span class="restaurant__info-rate">{{ restaurant.rate }}</span>
        </div>
      </div>
      <div class="restaurant__info-save-btn">
        <v-icon class="mdi mdi-bookmark restaurant__info-save-btn-icon" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ERestaurantTags, IRestaurantPreview } from "@/interfaces/retaurant"

const { restaurant } = defineProps<{
  restaurant: IRestaurantPreview
}>()

const tags_style: {
  [key in ERestaurantTags]: string
} = {
  [ERestaurantTags.Healthy]: "color: #DAA31A; background: #F7EDD0;",
  [ERestaurantTags.Trending]: "color: #FB471D; background: #F7C5BA;",
  [ERestaurantTags.Supreme]: "color: #309D5B; background: rgba(51, 172, 100, 0.2);"
}
</script>

<style scoped lang="scss">
.restaurant {
  display: flex;
  flex-wrap: wrap;
  border-radius: 24px;
  box-shadow: 4.72958px 56.75492px 28.37746px 0px rgba(229, 229, 229, 0.7);
  overflow: hidden;

  &__img {
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: 50% 90%;
  }

  &__info {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #ffffff;
    padding: 12px 22px 14px 28px;

    &-text {
      width: 80%;
      display: flex;
      flex-wrap: wrap;
    }

    &-tags {
      width: 100%;
      display: flex;
      justify-content: flex-start;

      &-item {
        @extend .poppins;
        font-size: 10px;
        line-height: 12px;
        border-radius: 4px;
        padding: 2px 6px;
        margin-left: 10px;

        &:first-child {
          margin-left: 0;
        }
      }
    }

    &-title {
      @extend .poppins-bold;
      color: $text-black-main;
      width: 100%;
      text-align: left;
      font-size: 21px;
      line-height: 24px;
    }

    &-dop {
      width: 100%;
      display: flex;
      align-items: center;

      @extend .manrope;
      font-size: 15px;
      line-height: 18px;
      color: #8e97a6;

      & * {
        margin-right: 5px;
      }
    }

    &-save-btn {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: end;

      &-icon {
        padding: 20px;
        border-radius: 100%;
        background-color: #dbd9ee;
        color: $violet-dark;
      }
    }
  }
}
</style>
