import { DishQueries } from "./types/Dish.js";
import { RestaurantQueries } from "./types/Restaurant.js";

export default {
  ...DishQueries,
  ...RestaurantQueries,
}