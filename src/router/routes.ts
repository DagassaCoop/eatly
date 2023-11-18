import Home from "@/pages/HomeView/HomeView.vue"
import Menu from "@/pages/MenuView.vue"
import Blog from "@/pages/BlogView.vue"
import Pricing from "@/pages/PricingView.vue"
import Contact from "@/pages/ContactView.vue"

export const routes = [
  {
    name: "home",
    path: "/",
    component: Home
  },
  {
    name: "menu",
    path: "/menu",
    component: Menu
  },
  {
    name: "restaurants",
    path: "/menu/restaurants",
    component: Home // todo > replace normal page
  },
  {
    name: "blog",
    path: "/blog",
    component: Blog
  },
  {
    name: "pricing",
    path: "/pricing",
    component: Pricing
  },
  {
    name: "contact",
    path: "/contact",
    component: Contact
  }
]
