export enum ERestaurantTags {
  Healthy,
  Trending,
  Supreme
}

export interface IRestaurantPreview {
  name: string
  rate: number
  timeAvg: number
  tags: Array<ERestaurantTags>
  img: string
}
