import { createApp } from "vue"
import { createPinia } from "pinia"

import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "@mdi/font/css/materialdesignicons.css"

// import "@/assets/styles/index.scss"
import "@/assets/styles/tailwind.css"

import App from "@/App.vue"

import { router } from "@/router/router"

const pinia = createPinia()
const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives
})

app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount("#app")
