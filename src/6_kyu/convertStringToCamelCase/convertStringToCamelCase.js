function toCamelCase(str) {
  const sym = ['-', '_', ' '];
  if (str.length === 0) {
    return str;
  }
  const arr = str.split('');
  const newArr = arr.map((i) => {
    if (sym.includes(i)) {
      return i = ' ';
    }
    return i
  })
  const spaces = newArr.join('').split(' ');
  const result = spaces.map((i) => {
    if (spaces[0] === i) {
      return i
    }
    return `${i[0].toUpperCase()}${i.slice(1)}`
  })

  return result.join('')
}


toCamelCase('')//, '', "An empty string was provided but not returned")
toCamelCase("the_stealth_warrior")//, "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")
toCamelCase("The-Stealth-Warrior")//, "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")
toCamelCase("A-B-C")//, "ABC", "toCamelCase('A-B-C') did not return correct value")
