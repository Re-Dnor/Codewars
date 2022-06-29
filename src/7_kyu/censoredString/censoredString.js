function uncensor(infected, discovered) {
  const used = discovered.split('');
  return infected.split('').map((i) => {
    if (i === '*') {
      const a = used.splice(0, 1).flat(1);
      i = a[0]
    }
    return i;
  }).join('')
}

const word = 'MAIG';
console.log(uncensor("A**Z*N*", word))