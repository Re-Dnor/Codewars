function DNAStrand(dna) {
  const transcription = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  }

  return [...dna].map((i) => transcription[i]).join('')
}

console.log(DNAStrand("AAAA"))//,"TTTT","String AAAA is")
console.log(DNAStrand("ATTGC"))//,"TAACG","String ATTGC is")
console.log(DNAStrand("GTAT"))//,"CATA","String GTAT is")   