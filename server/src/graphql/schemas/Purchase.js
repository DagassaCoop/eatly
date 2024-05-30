export default `#graphql
  type Purchase {
    id: ID!
    dishId: ID!
    deliveryStatus: String!
    orderTime: Int!
  }

  type Query {
    purchases: [Purchase]
    purchase(id: ID!): Purchase
  }
`