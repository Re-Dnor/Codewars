const binaryArrayToNumber = arr => {
  const num = arr.join('');
  return parseInt(num, 2)
};