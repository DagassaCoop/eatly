<template>
  <!-- Mobile -->
  <header class="header hidden-sm-and-up">
    <RouterLink v-slot="{ navigate }" :to="{ name: 'home' }" custom>
      <div class="header__logo" @click="navigate">
        <img class="header__logo-img" :src="logo" alt="logo" />
        <p class="header__logo-title">eatly</p>
      </div>
    </RouterLink>
    <img class="header__burger" :src="burger" alt="burger menu" @click="drawer = !drawer" />
    <v-navigation-drawer v-model="drawer" class="header__drawer" temporary location="right">
      <v-list density="compact" nav>
        <v-list-item
          v-for="(link, index) in navList"
          :key="index"
          :prepend-icon="link.prependIcon"
          :title="link.title"
          :to="{ name: link.link }"
          active-class="header__drawer-item_active"
        >
          <!-- <template #default="{ isActive }">
            <RouterLink
              :to="{ name: link.link }"
              :class="['header__drawer-item', isActive ? 'header__drawer-item_active' : null]"
            >
              <v-icon :class="['header__drawer-item-icon', 'mdi', link.prependIcon]" />
              <span class="header__drawer-item-title">{{ link.title }}</span>
              <span>{{ isActive }}</span>
            </RouterLink>
          </template> -->
          <template #prepend="{}">
            <v-icon :class="['header__drawer-item-icon', 'mdi', link.prependIcon]" />
          </template>
          <template #title="{ title }">
            <span class="header__drawer-item-title">{{ title }}</span>
          </template>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </header>
  <!-- Tablet -->
  <!-- <header class="header hidden-xs hidden-lg-and-up">
    <RouterLink :to="{ name: 'home' }"> Home page </RouterLink>
    <RouterLink :to="{ name: 'about' }"> About page </RouterLink>
  </header> -->
  <!-- Desktop -->
  <!-- <header class="header hidden-md-and-down">
    <RouterLink :to="{ name: 'home' }"> Home page </RouterLink>
    <RouterLink :to="{ name: 'about' }"> About page </RouterLink>
  </header> -->
</template>

<script setup lang="ts">
import logo from "@/assets/images/header/Logo.svg"
import burger from "@/assets/images/header/burger.svg"
import { ref } from "vue"

const drawer = ref(false)

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
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;

  &__logo {
    display: flex;
    align-items: center;
    align-items: center;

    &-img {
      width: 45px;
      height: 42px;
      margin-right: 11px;
    }

    &-title {
      @extend .poppins-bold;
      color: $violet-dark;
      font-size: 21px;
      line-height: 27.5px;
    }
  }

  &__burger {
    cursor: pointer;
  }

  &__drawer {
    &-item {
      display: flex;
      text-decoration: none;
      padding: 15px 5px;
      border-radius: 12px;

      &-icon {
        color: $violet-dark;
      }

      &-title {
        @extend .poppins;
        text-transform: uppercase;
        color: $violet-dark;
        font-size: 18px;
        line-height: 21px;
      }

      &_active {
        background-color: $violet-dark;
        .header__drawer-item {
          &-icon,
          &-title {
            color: #f7f8fa;
          }
        }
      }
    }
  }
}
</style>
