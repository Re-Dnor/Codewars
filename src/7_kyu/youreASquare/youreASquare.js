var isSquare = function (n) {
  return (n === 0) ? true : (n % Math.sqrt(n)) === 0
}