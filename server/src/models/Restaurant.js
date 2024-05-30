import { model, Schema } from "mongoose"

const restaurantSchema = new Schema({
  name: String,
  rate: Number,
  timeAvg: Number,
  tags: [String],
  img: String,
  location: {
    address: String,
    latitude: Number,
    longitude: Number
  },
  openHours: [{
    day: String,
    time: String
  }],
  cuisine: String
}) 

export default model("Restaurant", restaurantSchema)