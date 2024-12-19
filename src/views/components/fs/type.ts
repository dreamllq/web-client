import { F } from '@/services/api';

export enum LAYOUT {
  ICON='icon',
  LIST='list',
  COLUMN='column'
}


export type ColumnItem = {
  parentId: string|null,
  list: F[]
}

export type ColumnList = ColumnItem[]

export type ColumnMap = {
  [parentId:string]:ColumnItem
}

export type ParentIdMap = {
  [childId:string]:string
}
