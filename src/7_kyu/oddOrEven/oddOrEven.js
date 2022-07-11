function oddOrEven(array) {
  const sum = array.reduce((acc, val) => acc += val, 0);
  return sum % 2 === 0 ? 'even' : 'odd';
}