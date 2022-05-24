function getMiddle(str) {
  const length = str.length;
  if (length % 2 === 1) {
    const n = Math.floor(length / 2)
    return str[n]
  } else {
    const n = Math.floor(length / 2) - 1;
    return `${str[n]}${str[n + 1]}`
  }
}


getMiddle("test")//,"es");
getMiddle("testing")//,"t");
getMiddle("middle")//,"dd");
getMiddle("A")//,"A");