export const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: Array<K | string> // string
): Omit<T, K> => {
  const clone = {
    ...obj,
  }
  keys.forEach((key) => {
    if ((key as K) in clone) {
      delete clone[key as K]
    }
  })
  return clone
}
