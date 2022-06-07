function sum() {
  return [...arguments].reduce((acc, val) => acc += val, 0)
}