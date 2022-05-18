function duplicateCount(text) {
  const lower = text.toLowerCase();
  const obj = {};
  let result = 0;

  lower.split('').map((i) => {
    obj[i] === undefined ? obj[i] = 1 : obj[i] += 1;
  })

  for (const i in obj) {
    obj[i] > 1 ? result++ : null;
  }

  return result;
}


duplicateCount("")//, 0);
duplicateCount("abcde")//, 0);
duplicateCount("aabbcde")//, 2);
duplicateCount("aabBcde")//, 2,"should ignore case");
duplicateCount("Indivisibility")// 1)
duplicateCount("Indivisibilities")//, 2,