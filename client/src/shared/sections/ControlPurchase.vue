<template>
  <div :class="['control-purchase container', pageName + '__section']">
    <h2 :class="['control-purchase__title', pageName + '__subtitle']">
      Control <span>Purchases</span> Via Dashboard
    </h2>
    <div class="control-purchase__basket">
      <div class="control-purchase__basket-item"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IPurchase } from "@/interfaces/purchase"

const { pageName } = defineProps<{
  pageName: string
}>()

// todo take from store as getter basketHistory
// const basketList: Array<IPurchase> = [
//   {
//     id:
//   }
// ]
</script>

<style scoped lang="scss">
.control-purchase {
}
</style>
