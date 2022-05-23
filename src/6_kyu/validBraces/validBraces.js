function validBraces(braces) {
  const opened = ['(', '[', '{'];
  const closed = [')', ']', '}'];
  const lets = [];

  for (const i of braces) {
    const lastItem = lets[lets.length - 1];
    if (opened.includes(i)) {
      lets.push(i);
      continue
    }
    if (opened.indexOf(lastItem) === closed.indexOf(i)) {
      lets.pop();
      continue
    }
    else {
      lets.push(i)
    }
  }
  return lets.length === 0 ? true : false
}

console.log(validBraces("(}"))//, false);
console.log(validBraces("[(])"))//, false);
console.log(validBraces("({})[({})]"))//, true);
console.log(validBraces("(})"))//, false);
console.log(validBraces("(({{[[]]}}))"))//, true);