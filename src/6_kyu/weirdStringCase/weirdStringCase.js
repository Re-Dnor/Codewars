function toWeirdCase(string) {
  const arr = string.split(' ');

  return arr.map(word => {
    const weird = word.split('');
    return weird.map((i, index) => {
      if (index % 2 === 0) {
        return i.toUpperCase()
      } else {
        return i.toLowerCase();
      }
    }).join('')
  }).join(' ')
}