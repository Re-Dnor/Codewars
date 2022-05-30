function sumTwoSmallestNumbers(nums) {
  const [a, b] = nums.sort((a, b) => a - b);
  return a + b;
}

console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))//, 10 , "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))//, 24 , "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]))//, 16 , "Sum should be 16");
