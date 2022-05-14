function comp(array1, array2) {
  if (array1 === null || array2 === null) {
    return false
  }
  for (const i of array1) {
    if (array2.includes(i * i)) {
      array2.splice(array2.indexOf(i * i), 1)
    }
  }
  return array2.length === 0 ? true : false
}

const a = [121, 144, 19, 161, 19, 144, 19, 11]
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b)