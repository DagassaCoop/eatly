import { Types } from "mongoose";
import Dish from "../../../models/Dish.js"
import Restaurant from "../../../models/Restaurant.js"


export const DishRelatedMethods = {
  async restaurant(parent) {
    return await Restaurant.findById(parent.restaurantId) 
  }
}

export const DishQueries = {
  async dishes() {
    return await Dish.find({})
  },
  async dish(_, { id }) {
    return await Dish.findById(id)
  },
}

export const DishMutations = {
  async addDish(_, { dish }) {
    const newDish = {
      name: dish.name,
      tags: dish.tags,
      img: "path",
      price: dish.price,
      restaurantId: new Types.ObjectId(dish.restaurantId),
      rate: 0,
      timeAvg: 0
    }

    // Better use insertOne, but for some reasons unavailable in this build.
    const result = await Dish.insertMany([newDish])

    return await Dish.findById(result[0])
  },
  async updateDish(_, { id, dish }) {
    await Dish.findByIdAndUpdate(id, dish)
    return await Dish.findById(id)
  },
  async deleteDishById(_, { id }) {  
    const result = await Dish.findByIdAndDelete(id)

    return result ? { status: "Succes", dishes: await Dish.find({}) } : { status: "Fail" }
  }
}