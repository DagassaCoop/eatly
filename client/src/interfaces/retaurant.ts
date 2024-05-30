export enum ERestaurantTags {
  Healthy,
  Trending,
  Supreme
}

export interface IRestaurantPreview {
  id: string
  name: string
  rate: number
  timeAvg: number
  tags: Array<ERestaurantTags>
  img: string
}
