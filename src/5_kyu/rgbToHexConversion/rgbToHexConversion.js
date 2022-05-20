function rgb(r, g, b) {
  const arr = [r, g, b].map((i) => {
    if (i <= 0) {
      return '00'
    }
    if (i < 16) {
      return `0${i.toString(16).toUpperCase()}`
    }
    return i > 255 ? 'FF' : i.toString(16).toUpperCase()
  })
  return arr.join('')
}

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(15, 0, 0) // returns 000000
rgb(11, 113, 216) // returns 9400D3
