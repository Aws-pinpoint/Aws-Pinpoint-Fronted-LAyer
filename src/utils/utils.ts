export const objIsEmpty = (obj: Record<string, unknown>) =>
  obj === undefined || Object.keys(obj).length === 0
