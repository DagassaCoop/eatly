import { Types } from "mongoose";
import Dish from "../../../models/Dish.js";
import Restaurant from "../../../models/Restaurant.js";

export const RestaurantRelatedMethods = {
  async dishes(parent) {
    return await Dish.find({ restaurantId: new Types.ObjectId(parent.id) })
  }
}

export const RestaurantQueries = {
  async restaurants() {
    return await Restaurant.find({})
  },
  async restaurant(_, { id }) {
    return await Restaurant.findById(id)
  }
}

export const RestaurantMutations = {
  async addRestaurant(_, { restaurant }) {

    const newRestaurant = {
      ...restaurant,
    }

    if (!restaurant.openHours) {
      newRestaurant.openHours = [
        {
          "day": "Monday",
          "time": "8:00 AM - 9:00 PM"
        },
        {
          "day": "Tuesday",
          "time": "8:00 AM - 9:00 PM"
        },
        {
          "day": "Wednesday",
          "time": "8:00 AM - 9:00 PM"
        },
        {
          "day": "Thursday",
          "time": "8:00 AM - 9:00 PM"
        },
        {
          "day": "Friday",
          "time": "8:00 AM - 10:00 PM"
        },
        {
          "day": "Saturday",
          "time": "9:00 AM - 10:00 PM"
        },
        {
          "day": "Sunday",
          "time": "9:00 AM - 8:00 PM"
        }
      ] 
    }

    const result = await Restaurant.insertMany([newRestaurant])

    return await Restaurant.findById(result[0])
  },
  async updateRestaurant(_, { id, restaurant }) {
    await Restaurant.findByIdAndUpdate(id, restaurant)

    return await Restaurant.findById(id)
  },
  async deleteRestaurantById(_, { id }) {
    const result = await Restaurant.findByIdAndDelete(id)
    return result ? { status: "Succes", restaurants: await Restaurant.find({}) } : { status: "Fail" }
  }
}