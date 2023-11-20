export enum EDishTags {
  Healthy,
  Trending,
  Supreme
}

export interface IDishPreview {
  name: string
  rate: number
  timeAvg: number
  tags: Array<EDishTags>
  img: string
  price: number
}
