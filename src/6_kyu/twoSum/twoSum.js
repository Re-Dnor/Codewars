function twoSum(numbers, target) {
  const res = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = numbers.length; j > i; j--) {
      if (
        numbers[i] + numbers[j] === target) {
        res.push(i, j);
      }
    }
  }
  return res;
}