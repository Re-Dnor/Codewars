function nbYear(start, percent, aug, finish) {
  let result = 0;
  for (let i = 1; start < finish; i += 1) {
    start = Math.floor(start + (start * percent / 100) + aug)
    result = i
  }
  return result;
}

console.log(nbYear(1500, 5, 100, 5000))//, 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000))//, 10);
console.log(nbYear(1000, 2, 50, 1214))// 94