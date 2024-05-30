export default `#graphql
  
  # Restaurant

  type Restaurant {
    id: ID!
    name: String!
    rate: Float!
    timeAvg: Int!
    tags: [String!]
    img: String!
    location: RestaurantLocation
    openHours: [RestaurantDayOpenHours]
    cuisine: String!
    dishes: [Dish!]
  }
  
  input AddRestaurantInput {
    name: String!
    tags: [String!]
    img: String!
    rate: Float!
    timeAvg: Int!
    location: AddRestaurantLocationInput
    openHours: [AddRestaurantDayOpenHoursInput]
    cuisine: String!
  }

  input UpdateRestaurantInput {
    name: String
    tags: [String]
    img: String
    rate: Float
    timeAvg: Int
    location: UpdateRestaurantLocationInput
    openHours: [UpdateRestaurantDayOpenHoursInput]
    cuisine: String
  }

  # RestaurantLocation

  type RestaurantLocation {
    address: String!
    latitude: Float!
    longitude: Float!
  }

  input AddRestaurantLocationInput {
    address: String!
    latitude: Float!
    longitude: Float!
  }

  input UpdateRestaurantLocationInput {
    address: String
    latitude: Float
    longitude: Float
  }


  # RestaurantDayOpenHours

  type RestaurantDayOpenHours {
    day: String!
    time: String!
  }

  input AddRestaurantDayOpenHoursInput {
    day: String!
    time: String!
  }

  input UpdateRestaurantDayOpenHoursInput {
    day: String
    time: String
  }


  # Payloads

  type DeleteRestaurantPayload {
    status: String!
    restaurants: [Restaurant]
  }


  type Query {
    restaurants: [Restaurant]
    restaurant(id: ID!): Restaurant
  }

  type Mutation {
    addRestaurant(restaurant: AddRestaurantInput!): Restaurant
    updateRestaurant(id: ID!, restaurant: UpdateRestaurantInput!): Restaurant
    deleteRestaurantById(id: ID!): DeleteRestaurantPayload
  }
`