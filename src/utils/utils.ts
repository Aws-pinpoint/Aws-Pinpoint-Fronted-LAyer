export const objIsEmpty = (obj: object) =>
  obj === undefined ||
  (typeof obj === 'object' && Object.keys(obj).length === 0)
