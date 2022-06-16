function firstNonRepeatingLetter(str) {
  const index = str.toLowerCase().split('').reduceRight((acc, val, index, arr) => {
    if (arr.indexOf(val) === arr.lastIndexOf(val)) {
      acc = index;
    }
    return acc;
  }, '')
  return str[index] === undefined ? '' : str[index];
}

console.log(firstNonRepeatingLetter('a'))//, 'a');
console.log(firstNonRepeatingLetter('stress'))//, 't');
console.log(firstNonRepeatingLetter('sTretss'))//, 'r');
console.log(firstNonRepeatingLetter('abba'))//);
console.log(firstNonRepeatingLetter('sTreSS'))//);
