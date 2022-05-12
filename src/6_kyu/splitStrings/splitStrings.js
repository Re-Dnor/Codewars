function solution(str) {
  const arr = str.split('')
  const result = [];
  for (let i = 0; i < str.length; i += 2) {
    const removed = arr.splice(0, 2)
    if (removed.length === 1) {
      removed.push('_')
    }
    result.push(removed.join(''))
  }
  return result
}


solution("abcdef")//, ["ab", "cd", "ef"]
solution("abcdefg")//, ["ab", "cd", "ef", "g_"]
solution("")//, []