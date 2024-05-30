<template>
  <header class="header mb-3 mt-6">
    <v-row>
      <v-col cols="2" class="header__logo">
        <RouterLink v-slot="{ navigate }" :to="{ name: 'home' }" custom>
          <div class="header__logo-link" @click="navigate">
            <img class="header__logo-img" :src="logo" alt="logo" />
            <p class="header__logo-title">eatly</p>
          </div>
        </RouterLink>
      </v-col>
      <v-col cols="4" class="header__nav">
        <RouterLink
          v-for="(item, index) in navList"
          :key="index"
          :to="{ name: item.link }"
          :class="['header__nav-item', item.link === route.name ? 'header__nav-item_active' : '']"
        >
          {{ item.title }}
        </RouterLink>
      </v-col>
      <v-col cols="6" class="header__login">
        <button class="header__login-btn btn mr-3">Login</button>
        <button class="header__login-btn btn btn_filled">Sign up</button>
      </v-col>
    </v-row>
  </header>
</template>

<script setup lang="ts">
import logo from "@/assets/images/header/Logo.svg"
import { useRoute } from "vue-router"

const navList: Array<{
  prependIcon: string
  title: string
  link: string
}> = [
  {
    prependIcon: "mdi-silverware",
    title: "Menu",
    link: "menu"
  },
  {
    prependIcon: "mdi-post-outline",
    title: "Blog",
    link: "blog"
  },
  {
    prependIcon: "mdi-currency-usd",
    title: "Pricing",
    link: "pricing"
  },
  {
    prependIcon: "mdi-account-box-outline",
    title: "Contact",
    link: "contact"
  }
]

const route = useRoute()
</script>

<style scoped lang="scss">
.header {
  &__logo {
    display: flex;
    align-items: center;

    &-link {
      cursor: pointer;
      display: flex;
      align-items: center;
    }

    &-img {
      width: 45px;
      height: 42px;
      margin-right: 11px;
    }

    &-title {
      @extend .poppins-bold !optional;
      color: $violet-dark;
      font-size: 21px;
      line-height: 27.5px;
    }
  }

  &__nav {
    display: flex;
    justify-content: space-around;
    align-items: center;

    &-item {
      cursor: pointer;
      @extend .inter-semibold !optional;
      color: #606060;
      font-size: 1.11431rem;

      &_active {
        @extend .inter-bold !optional;
        color: $violet-dark;
      }
    }
  }

  &__login {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    &-btn {
      @extend .inter-semibold !optional;
      color: #606060;

      &:hover {
        background-color: #ffffff;
        border: 1px solid $violet-dark;
        color: $violet-dark !important;
      }
    }
    .btn_filled {
      color: #ffffff;
    }
  }
}
</style>
