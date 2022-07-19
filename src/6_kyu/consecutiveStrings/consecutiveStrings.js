function longestConsec(strarr, k) {
  if (strarr.length < k || k < 0) {
    return ''
  }
  let res = '';
  let count = k;

  for (let i = 0; i <= strarr.length - k; i++) {
    let timeRes = '';

    for (let j = i; j < count; j++) {
      timeRes += strarr[j]
    }

    if (res.length < timeRes.length) {
      res = timeRes
    }

    count++
  }

  return res;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2))//, "")
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3))//, "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15))//, "")