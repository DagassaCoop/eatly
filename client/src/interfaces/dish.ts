export enum EDishTags {
  Healthy,
  Trending,
  Supreme
}

export interface IDish {
  id: string
  name: string
  rate: number
  timeAvg: number
  tags: Array<EDishTags>
  img: string
  price: number
}
