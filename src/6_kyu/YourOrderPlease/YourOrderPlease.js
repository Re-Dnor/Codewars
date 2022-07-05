function order(words) {
  const arr = words.split(' ');
  const sorted = arr.sort((a, b) => {
    const numA = a.split('').filter((i) => !isNaN(i)).join('');
    const numB = b.split('').filter((i) => !isNaN(i)).join('');
    return numA - numB;
  })
  return sorted.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"))//, "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))//, "Fo1r the2 g3ood 4of th5e pe6ople")
