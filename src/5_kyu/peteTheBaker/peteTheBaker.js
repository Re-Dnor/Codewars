function cakes(recipe, available) {
  let result = null;
  for (const r in recipe) {
    if (!Object.hasOwn(available, r)) {
      return 0;
    }
    const number = (Math.floor(available[r] / recipe[r]))
    if (result === null) {
      result = number;
    }
    if (number < result) {
      result = number
    }
  }
  return result;
}


cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1300, sugar: 1200, eggs: 5, milk: 200 }); //2
cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }); //0