function range(start, end, step = 1,) {
  arguments.length === 1 ? (end = start) && (start = 0) : null;

  if (step === 0) {
    const result = []
    for (let i = start; i < end; i += 1) {
      result.push(start)
    }
    return result
  }

  const cicle = () => {
    const result = [];
    for (let i = start; i < end; i += step) {
      result.push(i)
    }
    return result;
  }

  return start > end ? [] : cicle();
}

console.log(range(10))//, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(range(1, 11))//, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(range(0, 30, 5))//, [0, 5, 10, 15, 20, 25]);
console.log(range(1, 4, 0))//, [1, 1, 1]);
console.log(range(0))//, []);
console.log(range(10, 0))//, []);