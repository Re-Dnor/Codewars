var number = function (busStops) {
  const inBus = busStops.reduce((acc, val) => acc += val[0], 0);
  const outBus = busStops.reduce((acc, val) => acc += val[1], 0);
  return inBus - outBus
}