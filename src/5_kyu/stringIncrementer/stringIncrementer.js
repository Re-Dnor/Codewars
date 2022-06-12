function incrementString(strng) {
  const num = [];
  const str = strng.split('').reduce((acc, val) => {
    if (!isNaN(val)) {
      num.push(val)
    } else {
      acc.push(val)
    }
    return acc
  }, [])

  if (num.length === 0) {
    num.push(1)
    return [...str, ...num].join('')
  }

  let sumStr = +num.join('') + 1;

  if (sumStr.toString().length >= num.length) {
    return str.join('') + sumStr
  }

  while (sumStr.toString().length < num.length) {
    sumStr = `0${sumStr}`
  }
  return str.join('') + sumStr
}

console.log(incrementString("foobar000"))//, "foobar001");
console.log(incrementString("foo"))//, "foo1");
console.log(incrementString("foobar001"))//, "foobar002");
console.log(incrementString("foobar99"))//, "foobar100");
console.log(incrementString("foobar099"))//, "foobar100");
console.log(incrementString(""))//, "1");