export enum EPurchaseDeliveryStatus {
  "On The Way",
  "Delivered",
  "Cancelled"
}

export interface IPurchase {
  id: string
  restaurantId: string
  dishId: string
  deliveryStatus: EPurchaseDeliveryStatus
  orderTime: Date
}
