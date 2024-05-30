export default `#graphql
  
  # Dish
  
  type Dish {
    id: ID!
    name: String!
    rate: Float!
    timeAvg: Int!
    tags: [String!]
    img: String!
    price: Float!
    restaurant: Restaurant!
  }

  input AddDishInput {
    name: String!
    tags: [String!]
    img: String!
    price: Float!
    restaurantId: String!
  }

  input UpdateDishInput {
    name: String
    tags: [String]
    img: String
    price: Float
    restaurantId: String
  }


  # Payloads

  type DeleteDishPayload {
    status: String!
    dishes: [Dish]
  }
  

  type Query {
    dishes: [Dish]
    dish(id: ID!): Dish
  }

  type Mutation {
    addDish(dish: AddDishInput!): Dish
    updateDish(id: ID!, dish: UpdateDishInput!): Dish
    deleteDishById(id: ID!): DeleteDishPayload
  }
`