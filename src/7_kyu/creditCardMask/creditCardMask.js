function maskify(str) {
  const shortArr = (str.slice(0, -4)).split('');
  const hashted = shortArr.map((i) => i = '#').join('');
  return hashted + str.slice(-4);
}

console.log(maskify('4556364607935616'))//, '############5616');
console.log(maskify('1'))//, '1');
console.log(maskify('11111'))//, '#1111');
