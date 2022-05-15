function spinWords(string) {
  const array = string.split(' ');
  const snippingArray = array.map((word) => {
    if (word.length > 4) {
      return word.split('').reverse().join('')
    } else {
      return word
    }
  });
  return snippingArray.join(' ')
}


spinWords("Welcome")//, "emocleW");
spinWords("Hey fellow warriors")//, "Hey wollef sroirraw");
spinWords("This is a test")//, "This is a test");
spinWords("This is another test")//, "This is rehtona test");
spinWords("You are almost to the last test")//, "You are tsomla to the last test");
spinWords("Just kidding there is still one more")//, "Just gniddik ereht is llits one more");
spinWords("Seriously this is the last one")//, "ylsuoireS this is the last one");