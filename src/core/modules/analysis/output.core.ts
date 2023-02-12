export type OutputCalcs = {
  id: number
  quantity: number
  adjust: number
  total: number
  value: number
}

export type OutputLoads = {
  loads: Array<OutputCalcs>
}
