function duplicateEncode(word) {
  return word.toLowerCase()
    .split('')
    .map((a, i, w) => {
      return w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
}


duplicateEncode("din")//,"(((");
duplicateEncode("recede")//,"()()()");
duplicateEncode("Success")//,")())())","should ignore case");
duplicateEncode("(( @")//,"))((");
console.log(duplicateEncode("dwJ(Oaxylnw"))