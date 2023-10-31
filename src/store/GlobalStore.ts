import { EWindow, IGlobalStore } from "@/interfaces/stores/GlobalStore"
import { defineStore } from "pinia"

export const useGlobalStore = defineStore("global", {
  state: (): IGlobalStore => {
    return {
      window: EWindow.mobile
    }
  },
  getters: {},
  actions: {
    setWindow(window: EWindow) {
      this.window = window
    }
  }
})
