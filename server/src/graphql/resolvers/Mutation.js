import { DishMutations } from "./types/Dish.js"
import { RestaurantMutations } from "./types/Restaurant.js"

export default {
  ...DishMutations,
  ...RestaurantMutations,
}