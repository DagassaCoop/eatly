<template>
  <div class="dish-preview">
    <div class="dish-preview__image">
      <img class="dish-preview__image-dish" :src="dish.img" alt="dish" />
      <img class="dish-preview__image-heart" :src="heart" alt="heart" />
    </div>
    <div class="dish-preview__info">
      <div class="dish-preview__info-text">
        <div class="dish-preview__info-tags">
          <div
            v-for="(tag, index) in dish.tags"
            :key="index"
            class="dish-preview__info-tags-item"
            :style="tags_style[tag]"
          >
            {{ EDishTags[tag] }}
          </div>
        </div>
        <h4 class="dish-preview__info-title">{{ dish.name }}</h4>
        <div class="dish-preview__info-dop">
          <span class="dish-preview__info-time">{{ dish.timeAvg }}min •</span>
          <svg
            class="dish-preview__info-star"
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
          <span class="dish-preview__info-rate">{{ dish.rate }}</span>
        </div>
      </div>
    </div>
    <div class="dish-preview__price">
      <div class="dish-preview__price-text">
        ${{ dish.price.toString().split(".")[0] }}.<span>{{
          dish.price.toString().split(".")[1]
        }}</span>
      </div>
      <button class="dish-preview__price-add">
        <v-icon class="mdi mdi-plus" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IDishPreview, EDishTags } from "@/interfaces/dish"

import heart from "@/assets/images/shared/heart.svg"

const { dish } = defineProps<{
  dish: IDishPreview
}>()

const tags_style: {
  [key in EDishTags]: string
} = {
  [EDishTags.Healthy]: "color: #DAA31A; background: #F7EDD0;",
  [EDishTags.Trending]: "color: #FB471D; background: #F7C5BA;",
  [EDishTags.Supreme]: "color: #309D5B; background: rgba(51, 172, 100, 0.2);"
}
</script>

<style scoped lang="scss">
.dish-preview {
  display: flex;
  flex-wrap: wrap;
  border-radius: 24px;
  box-shadow: 4.72958px 56.75492px 28.37746px 0px rgba(229, 229, 229, 0.7);
  overflow: hidden;
  background-color: #ffffff;

  &__image {
    position: relative;
    display: flex;
    &-dish {
      width: 100%;
      padding: 20px 20px 0 20px;
    }

    &-heart {
      position: absolute;
      right: 20px;
      top: 20px;

      max-width: 15px;
      max-height: 12px;
    }
  }

  &__info {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 12px 18px 8px 28px;

    &-text {
      width: 100%;
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
      @extend .poppins-semibold;
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
  }

  &__price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    padding: 12px 18px 14px 28px;

    &-text {
      @extend .manrope-bold;
      font-size: 18px;
      line-height: 26px;
      color: $text-black-main;

      & span {
        font-size: 12px;
        color: #8e97a6;
      }
    }

    &-add {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $text-black-main;
      color: #ffffff;
      border-radius: 8px;
      padding: 4px 6px;
    }
  }
}
</style>
