function high(x) {
  const en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const arr = x.split(' ');
  let sum = 0;
  let resultName = '';
  const arrMap = arr.map((i) => {
    let sumI = 0;
    for (const a of i) {
      const index = en.indexOf(a) + 1;
      sumI += index;
    }

    if (sumI > sum) {
      sum = sumI;
      resultName = i;
    }
  })
  return resultName
}


high('what time are we climbing up the volcano')//, 'volcano')
high('take me to semynak')//, 'semynak'
high('aa b')//, 'aa'
high('b aa')//, 'b'