function inArray(a1, a2) {
  const str = a2.join(' ');
  return a1.filter(item => str.indexOf(item) !== -1).sort();
}


a = ["lively", "alive", "harp", "sharp", "armstrong"]

a1 = ["xyz", "live", "strong"]
console.log(inArray(a1, a))//, ["live", "strong"])
a2 = ["live", "strong", "arp"]
console.log(inArray(a2, a))//, ["arp", "live", "strong"])
a3 = ["tarp", "mice", "bull"]
console.log(inArray(a3, a))//, [])