function XO(str) {
  const xxx = []
  const ooo = []

  str.toLowerCase().split('').forEach((i) => {
    i === 'x' ? xxx.push(i) : null;
    i === 'o' ? ooo.push(i) : null;
  });

  return xxx.length === ooo.length
}


console.log(XO('xo'))//,true);
console.log(XO("xxOo"))//,true);
console.log(XO("xxxm"))//,false);
console.log(XO("Oo"))//,false);
console.log(XO("ooom"))//,false);