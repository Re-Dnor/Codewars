function getSum(a, b) {
  return a === b ? a : sum(a, b);
  function sum(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let res = 0;
    for (let i = min; i <= max; i += 1) {
      res += i;
    }
    return res
  }
}

console.log(getSum(5, -1));
console.log(getSum(533, 167));