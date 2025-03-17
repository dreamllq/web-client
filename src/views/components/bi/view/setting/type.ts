export type GridLayoutItem = {
  uuid:string,
  x: number,
  y: number,
  w: number,
  h: number,
  dragging:boolean,
  static?:boolean
}

export type GridLayout = GridLayoutItem[]