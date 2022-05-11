function isPangram(string) {
  let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const arr = [];

  for (const i of string) {
    if (arr_en.includes(i.toLowerCase())) {
      arr.push(i.toLowerCase())
    }
  }
  const set = new Set(arr);

  return [...set].length === 26;
}


isPangram("The quick brown fox jumps over the lazy dog.")//, true
isPangram("The quick brown fox jumps over the lazy dog.")//, false