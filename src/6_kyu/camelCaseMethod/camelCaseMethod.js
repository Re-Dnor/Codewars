String.prototype.camelCase = function () {
  if (this.length === 0) return ''
  const arrStr = this.trim().split(' ');
  return arrStr.reduce((acc, val) => {
    return acc += `${val[0].toUpperCase()}${val.slice(1)}`;
  }, '')
}

const newStr = "asd dsa".camelCase();
console.log(newStr)