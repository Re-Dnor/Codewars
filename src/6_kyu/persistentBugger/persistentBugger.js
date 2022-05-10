function persistence(num) {
  if (num.toString().length === 1) {
    return 0;
  }
  let count = 0;
  const action = (number) => {
    let result = 1;
    for (const i of number.toString()) {
      result *= i;
    }
    count++;
    return result
  }

  let result = action(num);

  while (result.toString().length !== 1) {
    result = action(result)
  }
  return count
}

persistence(39)//,3);
persistence(4)//,0);
persistence(25)//,2);
persistence(999)//,4);