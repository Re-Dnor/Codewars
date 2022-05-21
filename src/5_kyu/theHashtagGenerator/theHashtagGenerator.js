function generateHashtag(str) {
  const arr = str.split(' ')
  const newArr = arr.filter((i) => i !== '')
  const finalArr = newArr.map((i) => `${i[0].toUpperCase()}${i.slice(1)}`)
  const hash = (array) => {
    const string = array.join('');
    return `#${string[0].toUpperCase()}${string.slice(1)}`
  }

  if (finalArr.length === 0) {
    return false
  }

  return finalArr.join('').length >= 140 ? false : hash(finalArr);
}


generateHashtag("")//, false, "Expected an empty string to return false")
generateHashtag(" ".repeat(200))//, false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag"))//, "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")