function range(start, end, step = 1,) {
  arguments.length === 1 ? (end = start) && (start = 0) : null;
  const res = [];
  switch (true) {
    case step > 0: {
      for (let i = start; i < end; i += step) {
        res.push(i);
      }
      break;
    }
    case step === 0: {
      for (let i = start; i < end; i++) {
        res.push(start);
      }
      break;
    }
  }
  return res;
}

console.log(range(10))//, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(range(1, 11))//, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(range(0, 30, 5))//, [0, 5, 10, 15, 20, 25]);
console.log(range(1, 4, 0))//, [1, 1, 1]);
console.log(range(0))//, []);
console.log(range(10, 0))//, []);
