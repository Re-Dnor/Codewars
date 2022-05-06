function findOutlier(arr) {
  const result = arr.filter((i) => Math.abs(i % 2) === 0);

  if (result.length === 1) {
    return result[0];
  }
  const result2 = arr.filter((i) => Math.abs(i % 2) === 1);
  console.log(result2)
  return result2[0]
}

console.log(findOutlier([1, 2, 3]))//, 2)
console.log(findOutlier([85839304, 148878918, 37295512, -134608290, 31495046, -1415532, 160510302, -22507618, 174951242, -111854184, -31530721, -181415268, 149264612, -109539444, 110061570, -14410994, 63163190, 122216566, -38953144, -138529322, 80784174, 20666312, -150602354, 83530124, -13952798, -57693220]))//, -31530721)

console.log(-174951242 % 2)