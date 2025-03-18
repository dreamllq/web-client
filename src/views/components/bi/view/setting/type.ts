export type BizData = {
  id: string
}

export type GridLayoutItem = {
  uuid:string,
  x: number,
  y: number,
  w: number,
  h: number,
  dragging:boolean,
  static?:boolean,
  bizData?:BizData
}

export type GridLayout = GridLayoutItem[]