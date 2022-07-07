function maxMultiple(divisor, bound) {
  let res = null;
  for (let i = bound; i > 0; i--) {
    if (i % divisor === 0) {
      res = i;
      break;
    }
  }
  return res;
}