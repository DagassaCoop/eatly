import Query from "./Query.js";
import Mutation from "./Mutation.js";

// types
import { DishRelatedMethods } from "./types/Dish.js";
import { RestaurantRelatedMethods } from "./types/Restaurant.js";

export default {
  Query,
  Mutation,
  Dish: DishRelatedMethods,
  Restaurant: RestaurantRelatedMethods,
}