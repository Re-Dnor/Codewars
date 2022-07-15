function sumDigits(number) {
  return number
    .toString()
    .split('')
    .filter(num => !isNaN(num))
    .reduce((acc, val) => acc += +val, 0)
}




console.log(sumDigits(10))//, 1);
console.log(sumDigits(-32))//, 18);