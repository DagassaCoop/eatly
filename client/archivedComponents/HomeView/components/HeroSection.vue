<template>
  <div class="home-page__section hero container">
    <div class="hero__section">
      <span class="hero__undertitle">Over 1000 users</span>
      <h1 class="home-page__title hero__title">
        Enjoy Foods <br />
        Over <span>World</span>
      </h1>
      <p class="home-page__description hero__description">
        Eatly help you set saving goals, earn cash back offers, Go to disclaimer for more details
        and get paychecks up to two days early. Get a <span>$20 bonus</span>.
      </p>
      <div class="hero__action-btns">
        <button class="btn btn_filled">Get Started</button>
        <button class="btn btn_outlined">Go Pro</button>
      </div>
      <div class="hero__reviews">
        <img class="hero__reviews-logo" :src="heroReviewsLogo" alt="trust reviews logo" />
        <img class="hero__reviews-stars" :src="heroReviewsStars" alt="trust reviews stars" />
        <span class="hero__reviews-amount">4900+</span>
      </div>
    </div>
    <div class="hero__section">
      <div class="hero__food">
        <div class="hero__food-info">
          <img class="hero__food-info-preview" :src="heroFoodImage" alt="hero food preview" />
          <div class="hero__food-info-text">
            <span class="hero__food-info-title">Chicken Hell</span><br />
            <p class="hero__food-info-description">On The Way</p>
          </div>
          <span class="hero__food-info-time">3:09 PM</span>
          <img
            class="hero__food-info-illustration"
            :src="heroFoodInfoIllustrationTop"
            alt="hero food info illustration"
          />
        </div>
        <div class="hero__food-image">
          <div class="hero__food-image-dish-box">
            <img class="hero__food-image-dish" :src="heroFoodImage" alt="hero food image" />
          </div>
          <img
            class="hero__food-image-arrow"
            :src="heroFoodImageArrow"
            alt="hero food image arrow"
          />
        </div>
        <div class="hero__food-graph">
          <div class="hero__food-graph-period">
            <button
              v-for="(period, index) in graphPeriods"
              :key="index"
              :class="['hero__food-graph-period-item', period.active ? 'active' : '']"
              @click="setGraphListNewActive(index, graphPeriods)"
            >
              {{ period.str }}
            </button>
          </div>
          <div class="hero__food-graph-chart">
            <img
              class="hero__food-graph-chart-vector"
              :src="heroFoodGraphChart"
              alt="hero food graph chart"
            />
            <svg
              class="hero__food-graph-chart-lines"
              xmlns="http://www.w3.org/2000/svg"
              width="99"
              height="25"
              viewBox="0 0 99 25"
              fill="none"
            >
              <line
                opacity="0.09"
                x1="0.242423"
                y1="24.4763"
                x2="98.0183"
                y2="24.4763"
                stroke="#6C5FBC"
                stroke-width="0.277816"
                stroke-linecap="round"
              />
              <line
                opacity="0.09"
                x1="0.564689"
                y1="12.7683"
                x2="98.3406"
                y2="12.7683"
                stroke="#6C5FBC"
                stroke-width="0.277816"
                stroke-linecap="round"
              />
              <line
                opacity="0.09"
                x1="0.242423"
                y1="0.721932"
                x2="98.0183"
                y2="0.721932"
                stroke="#6C5FBC"
                stroke-width="0.277816"
                stroke-linecap="round"
              />
            </svg>
            <button class="hero__food-graph-chart-price">$409</button>
            <svg
              class="hero__food-graph-chart-ellips"
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="10"
              viewBox="0 0 5 6"
              fill="none"
            >
              <path
                d="M4.43609 2.87525C4.43609 3.87625 3.68096 4.63128 2.81696 4.63128C1.95296 4.63128 1.19783 3.87625 1.19783 2.87525C1.19783 1.87425 1.95296 1.11922 2.81696 1.11922C3.68096 1.11922 4.43609 1.87425 4.43609 2.87525Z"
                fill="#C5BFED"
                stroke="#6C5FBC"
                stroke-width="1.05387"
              />
            </svg>
          </div>
          <div class="hero__food-graph-graphic-systems">
            <button
              v-for="(system, index) in graphGraphicSystems"
              :key="index"
              :class="['hero__food-graph-graphic-systems-item', system.active ? 'active' : '']"
              @click="setGraphListNewActive(index, graphGraphicSystems)"
            >
              {{ system.str }}
            </button>
          </div>
          <img
            class="hero__food-graph-illustration"
            :src="heroFoodGraphIllustrationButtom"
            alt="hero food graph illustration"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import heroReviewsLogo from "@/assets/images/home/trustpilot-logo.png"
import heroReviewsStars from "@/assets/images/home/reviews-stars.png"
import heroFoodImage from "@/assets/images/home/hero-food-image.png"
import heroFoodGraphChart from "@/assets/images/home/hero-food-graph-chart.svg"
import heroFoodImageArrow from "@/assets/images/home/hero-food-image-arrow.svg"
import heroFoodInfoIllustrationTop from "@/assets/images/home/hero-food-illustration-top.svg"
import heroFoodGraphIllustrationButtom from "@/assets/images/home/hero-food-illustration-buttom.svg"
import { ref } from "vue"
import { Ref } from "vue"

type TGraphListItem = {
  str: string
  active: boolean
}

const graphPeriods: Ref<Array<TGraphListItem>> = ref([
  {
    str: "Main",
    active: true
  },
  {
    str: "Weekly",
    active: false
  },
  {
    str: "Montly",
    active: false
  },
  {
    str: "Yearly",
    active: false
  }
])

const graphGraphicSystems: Ref<Array<TGraphListItem>> = ref([
  {
    str: "2D",
    active: true
  },
  {
    str: "4D",
    active: false
  },
  {
    str: "5D",
    active: false
  },
  {
    str: "6D",
    active: false
  },
  {
    str: "7D",
    active: false
  }
])

const setGraphListNewActive = (index: number, list: Array<TGraphListItem>) => {
  list.forEach((period: TGraphListItem, periodsIndex: number) => {
    period.active = index === periodsIndex ? true : false
  })
}
</script>

<style scoped lang="sass">
@import "@/client/src/assets/styles/common.sass"
.hero {

  display: flex
  flex-wrap: wrap
  padding-bottom: 100px

  &__section {
    display: flex
    justify-content: center
    flex-wrap: wrap
    width: 100%
  }

  &__undertitle {
    position: relative
    width: 100%
    text-align: center
    padding-left: 50px
    margin-bottom: 5px

    @extend .poppins-bold
    color: $text-black-second
    font-size: 10px
    line-height: 12px
    text-transform: uppercase

    &:before {
      content: ""
      position: absolute
      display: block
      top: 50%
      left: calc(50% - 35px / 2 - 50px)
      height: 1px
      width: 35px
      background-color: $text-black-second
    }
  }

  &__title {
    margin-bottom: 15px
  }

  &__description {
    text-align: center
    margin: 0 15px 40px 15px
  }

  &__action-btns {
    width: 100%
    display: flex
    justify-content: center
    margin-bottom: 25px

    font-size: 14px
    line-height: 16px

    .btn:first-child {
      margin-right: 15px
    }
  }

  &__reviews {
    display: flex
    justify-content: center
    align-items: baseline
    margin-bottom: 50px

    &-stars {
      margin-left: 16px
      padding-bottom: 2px
    }

    &-amount {
      margin-left: 8px
      padding-bottom: 2px
      @extend .plus-jakarta-sans
      color: $text-grey-main
    }
  }

  &__food {
    position: relative
    z-index: 1
    display: flex
    justify-content: center
    align-items: center

    &-image {
      position: relative
      max-width: 300px
      max-height: 300px
      border-radius: 300px
      background: linear-gradient(137deg, #6c5fbc 4.83%, #5144a0 98.22%)

      margin: 28px 38px 28px 48px

      &-dish {
        &-box {
          width: 300px
          height: 300px
          overflow: hidden
        }

        width: 100%
        height: 100%
        margin-left: calc(-300px / 100 * 5)
        margin-top: calc(300px / 100 * 5)
      }

      &-arrow {
        position: absolute
        width: 50px
        height: 50px
        bottom: 50%
        right: -35px
      }
    }

    &-info {
      position: absolute
      z-index: 2
      right: 0
      top: 0
      width: 55%
      display: flex
      align-items: center
      flex-wrap: nowrap
      padding: 8px 4px

      background-color: #ffffff
      border-radius: 8px
      filter: drop-shadow(
        -4.672735214233398px 5.840919017791748px 9.734864234924316px rgba(0, 0, 0, 0.15)
      )

      &-preview {
        flex: 1
        height: 35px
        margin-right: 10px
      }

      &-text {
        flex: 3
      }

      &-title {
        @extend .poppins-bold
        font-size: 12px
        line-height: 14px
      }

      &-description {
        @extend .poppins
        font-size: 8px
        line-height: 10px
        margin-bottom: 7px
      }

      &-time {
        flex: 2
        align-self: flex-end
        text-align: right
        color: $text-gray-second
        font-size: 6px
        line-height: 8px
        margin-right: 8px
      }

      &-illustration {
        position: absolute
        left: calc(100% + 3px)
        bottom: calc(100% + 3px)
      }
    }

    &-graph {
      position: absolute
      z-index: 2
      left: 0
      bottom: 0
      width: 40%
      display: flex
      justify-content: center
      flex-wrap: wrap
      padding: 8px 0px

      background-color: #ffffff
      border-radius: 8px
      filter: drop-shadow(
        -4.672735214233398px 5.840919017791748px 9.734864234924316px rgba(0, 0, 0, 0.15)
      )

      &-period {
        width: 100%
        display: flex
        justify-content: space-around
        margin-bottom: 15px
        padding: 0 12px

        &-item {
          cursor: pointer
          border-radius: 8px

          @extend .poppins
          color: #828282
          font-size: 6px
          line-height: 8px
          padding: 4px 6px

          &.active {
            color: #ffffff
            background: $violet-dark
          }
        }
      }

      &-chart {
        position: relative
        width: 100%

        &-vector {
          width: 100%
          height: 100%
        }

        &-lines {
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: 100%
        }

        &-price {
          position: absolute
          top: 5%
          right: 5%

          @extend .poppins
          color: #ffffff
          font-size: 4px
          line-height: 6px
          padding: 3px 6px
          border-radius: 8px
          background-color: $violet-dark
        }

        &-ellips {
          position: absolute
          top: 20%
          right: 16%
        }
      }

      &-graphic-systems {
        width: 100%
        display: flex
        justify-content: space-around
        margin-top: 10px
        padding: 0 12px

        &-item {
          cursor: pointer
          border-radius: 6.957px

          color: #828282
          font-size: 6px
          line-height: 8px
          padding: 4px 6px

          &.active {
            @extend .poppins-bold
            background: rgba(231, 231, 231, 0.92)
          }
        }
      }

      &-illustration {
        position: absolute
        right: calc(100% + 3px)
        top: calc(100% + 3px)
      }
    }
  }
}
</style>
