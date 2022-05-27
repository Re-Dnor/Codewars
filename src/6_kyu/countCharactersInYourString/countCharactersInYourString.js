function count(string) {
  const result = {};
  [...string].forEach((i) => Object.hasOwn(result, i) ? result[i] += 1 : result[i] = 1);
  return result
}

console.log(count("aba"))//, { a: 2, b: 1 }); 
console.log(count(""))//, {}); 