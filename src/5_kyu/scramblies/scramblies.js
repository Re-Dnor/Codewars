const scramble = (str1, str2) => {
  return [...str2].every((item) => str2.split(item).length <= str1.split(item).length)
}


console.log(scramble('rkqodlw', 'world'))// ==> True
console.log(scramble('cedewaraaossoqqyt', 'codewars'))// ==> True
console.log(scramble('katas', 'steak')) //==> False
console.log(scramble('javscripts', 'javascript')) //,false);