<template>
  <section class="interactive">
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col>
            <OffersCarousel />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-row>
              <v-col class="interactive__search">
                <v-autocomplete
                  v-model="autocompleteModel"
                  label="Search"
                  :items="autocompleteItems"
                  :rounded="true"
                  variant="solo"
                  menu-icon=""
                  prepend-inner-icon="mdi-magnify"
                  auto-select-first
                  :autofocus="false"
                  class="interactive__search-autocomplete"
                >
                </v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="interactive__search-type">
                <div class="btn-wrapper">
                  <v-btn class="btn btn_outlined">Food</v-btn>
                  <v-btn class="btn btn_filled">Restaurant</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
  </section>
</template>

<script setup lang="ts">
import { ref, Ref, watch } from "vue"
import OffersCarousel from "../components/OffersCarousel.vue"

const autocompleteItems: Ref<Array<string>> = ref(["item 1", "item 2"])
const autocompleteModel: Ref<string> = ref("")

watch(autocompleteModel, () => {
  console.log(autocompleteModel.value)
})
</script>

<style scoped lang="scss">
.interactive {
  &__search {
    &-autocomplete {
      .v-field {
        padding: 0 20px;

        &__field {
          margin-left: 10px;
        }
      }
    }

    &-type {
      .btn {
        font-size: 18px;
        line-height: 21px;
      }
    }
  }
}
</style>
