function descendingOrder(n) {
  return n.toString().split('').sort((a, b) => b - a).join('')
}

descendingOrder(1234)