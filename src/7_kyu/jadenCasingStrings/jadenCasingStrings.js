String.prototype.toJadenCase = function () {
  const arr = this.split(' ');
  const jadenArr = arr.map((i) => `${i[0].toUpperCase()}${i.slice(1)}`)
  return jadenArr.join(' ')
};

const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())//, "How Can Mirrors Be Real If Our Eyes Aren't Real"
