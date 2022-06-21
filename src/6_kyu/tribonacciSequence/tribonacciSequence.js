function tribonacci(signature, n) {
  if (n < 3) {
    const smallResult = [];
    let count = 0;
    while (smallResult.length < n) {
      smallResult.push(signature[count]);
      count += 1;
    }
    return smallResult
  }

  const result = [...signature];
  for (let i = 3; i < n; i += 1) {
    const c = result[result.length - 1];
    const b = result[result.length - 2];
    const a = result[result.length - 3];

    const sum = a + b + c;
    result.push(sum)
  }
  return result
}


console.log(tribonacci([0, 0, 0], 10))//,[0,0,0,0,0,0,0,0,0,0])
console.log(tribonacci([1, 2, 3], 10))//,[1,2,3,6,11,20,37,68,125,230])
console.log(tribonacci([3, 2, 1], 10))//,[3,2,1,6,9,16,31,56,103,190])
console.log(tribonacci([1, 1, 1], 1))//,[1])