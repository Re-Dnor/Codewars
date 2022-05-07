const uniqueInOrder = function (iterable) {
  const result = []
  let temp;

  for (const i of iterable) {
    if (temp != i) {
      result.push(i);
      temp = i;
    }
  }
  return result;
}

uniqueInOrder('AAAABBBCCDAABBB')// == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')    //     == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1, 2, 2, 3, 3])   //    == [1,2,3]