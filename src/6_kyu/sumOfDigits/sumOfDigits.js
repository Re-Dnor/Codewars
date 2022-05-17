function digitalRoot(n) {
  const rec = (num) => {
    const arr = n.toString().split('')
    const sum = arr.reduce((acc, val) => acc += +val, 0)
    return sum;
  }

  let res = rec(n);
  return res > 9 ? digitalRoot(res) : res;
}


digitalRoot(16)//, 7 )
digitalRoot(456)//, 6 )
digitalRoot(942)//, 6 )