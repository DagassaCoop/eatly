export enum EWindow {
  mobile,
  tablet,
  desktop
}

export interface IGlobalStore {
  window: EWindow
  windowClasses: {
    [key in EWindow]: string
  }
}
