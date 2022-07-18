function solution(string) {
  let res = '';
  for (let i = 0; i < string.length; i++) {
    const upperCase = string[i].toUpperCase();
    if (string[i] === upperCase) {
      res += ` ${string[i]}`
    } else {
      res += string[i]
    }
  }
  return res;
}