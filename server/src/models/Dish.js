import { model, Schema, Types } from "mongoose";

const dishSchema = new Schema({
  name: String,
  rate: Number,
  timeAvg: Number,
  tags: [String],
  img: String,
  price: Number,
  restaurantId: Types.ObjectId,
})

export default model("Dish", dishSchema)