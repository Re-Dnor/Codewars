function firstNonRepeatingLetter(str) {
  const arr = str.toLowerCase().split('');

  const filteredArr = arr.reduce((acc, value, index) => {
    if (arr.indexOf(value) === arr.lastIndexOf(value)) {
      acc.push(index);
    }
    return acc;
  }, [])

  const index = filteredArr[0];

  return filteredArr.length === 0 ? '' : str.split('')[index];
}

firstNonRepeatingLetter('a')//, 'a');
firstNonRepeatingLetter('stress')//, 't');
firstNonRepeatingLetter('sTretss')//, 'r');
firstNonRepeatingLetter('abba')//, 'e');
