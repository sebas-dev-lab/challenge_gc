export enum charactsTypes {
  'moisture' = 'moisture',
  'color' = 'color',
  'damaged_grain' = 'damaged_grain'
}

export type InputCharacts = {
  name: charactsTypes
  value: number | string;
}

export type InputOptions = {
  id: number
  quantity: number
  characteristics: Array<InputCharacts>
}

export type InputType = {
  loads: Array<InputOptions>
}
