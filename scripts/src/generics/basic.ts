export default function genericsBasicSample() {
  type Reduce<T> = {
    (array: T[], initialValue: T): T
  }

  const stringReduce: Reduce<string> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  const numberReduce: Reduce<number> = (array, initialValue) => {
    let result = initialValue
    for (let i = 0; i < array.length; i++) {
      result += array[i]
    }
    return result
  }

  console.log(stringReduce(['お', 'も', 'て', 'な', 'し'], ''))
  console.log(numberReduce([1, 2, 3, 4, 5], 0))
}
