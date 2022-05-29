function wave(str) {
  const result = [];

  for (let i = 0; i < str.length; i += 1) {
    const bigW = str[i].toUpperCase();
    if (bigW !== ' ') {
      const fW = str.slice(0, i);
      const lW = str.slice(i + 1);
      result.push(fW + bigW + lW)
    }
  }
  console.log(result);
}


wave("two words")
// result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
wave("codewars")
// result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
wave("")
// result = [];