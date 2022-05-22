function findUniq(arr) {
  return arr.find((i) => arr.indexOf(i) === arr.lastIndexOf(i))
}

findUniq([1, 0, 0])//, 1);
findUniq([0, 1, 0])//, 1);
findUniq([0, 0, 1])//, 1);
findUniq([1, 1, 1, 2, 1, 1])//, 2);
findUniq([1, 1, 2, 1, 1])//, 2);
findUniq([3, 10, 3, 3, 3])//, 10);