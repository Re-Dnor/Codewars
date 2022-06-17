function alternate(n, firstValue, secondValue) {
  const res = [];

  const pushingItem = () => {
    res.push(firstValue);
    if (res.length < n) {
      res.push(secondValue);
    }
  }
  while (res.length < n) {
    pushingItem()
  }
  return res
}



console.log(alternate(5, true, false))
// [true, false, true, false, true])

console.log(alternate(20, 'blue', 'red'));
  // ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red'])
