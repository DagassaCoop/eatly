import Home from "@/pages/HomeView.vue"
import About from "@/pages/AboutView.vue"

export const routes = [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "about",
    path: "/about",
    component: About
  }
]
