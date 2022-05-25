function encode(str, num) {
  const eng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  const myNum = str.split('').map((i) => eng.indexOf(i) + 1);
  console.log(myNum)
  let count = 0;
  const result = myNum.map((i) => {
    const sumNum = num.toString().split('');

    if (sumNum[count] === undefined) {
      count = 0;
    }
    i = +i + +sumNum[count];
    count++
    return i
  })
  return result;
}




encode("scout", 1939)// , [ 20, 12, 18, 30, 21] );
encode("masterpiece", 1939) //, [ 14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]);
