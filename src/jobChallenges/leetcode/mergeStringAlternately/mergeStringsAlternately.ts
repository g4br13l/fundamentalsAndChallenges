

function mergeAlternately(word1: string, word2: string): string {

  const cleanWord1: string = word1.replace(/\s+/g, '')
  const cleanWord2: string = word2.replace(/\s+/g, '')
  let mergedText: string = ''

  for(let i = 0; i < cleanWord1.length || i < cleanWord2.length; i++) {
    if(cleanWord1[i]) mergedText = mergedText + cleanWord1[i]
    if(cleanWord2[i]) mergedText = mergedText + cleanWord2[i]
  }

  return mergedText
}


console.log("slice:", 'abc'.slice(1))

console.log('result:', mergeAlternately('abc', 'pqr'))
console.log('result:', mergeAlternately(' a b c ', 'p  q  r  st'))
console.log('result:', mergeAlternately('ab', 'pqrs'))
console.log('result:', mergeAlternately('abcd', 'pq'))















