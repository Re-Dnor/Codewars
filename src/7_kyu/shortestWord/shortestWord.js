function findShort(s) {
  const arr = s.split(' ')
  const numbers = arr.map((i) => i.length);
  return Math.min(...numbers)
}


console.log(findShort("bitcoin take over the world maybe who knows perhaps"))//, 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"))//, 3); 
console.log(findShort("Let's travel abroad shall we"))//, 2)