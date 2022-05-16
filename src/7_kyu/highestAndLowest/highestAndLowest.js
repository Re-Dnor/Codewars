// function highAndLow(numbers) {
//   const arr = numbers.split(' ')
//   const numbersArr = arr.map((n) => +n)
//   const max = Math.max(...numbersArr);
//   const min = Math.min(...numbersArr);
//   return `${max} ${min}`
// }
function highAndLow(numbers) {
  const arr = numbers.split(' ').map((n) => +n);
  const [max, min] = [Math.max(...arr), Math.min(...arr)]
  return `${max} ${min}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))//, "42 -9");
highAndLow("1 2 3")//, "3 1");