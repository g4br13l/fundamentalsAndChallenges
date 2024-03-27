/* Giving the String "ABCDBA", return the first recurring character in it */

const searchText = 'DBABCBA'



const firstCharImperative = (text: string): string => { // O(n²)

  const chars: string[] = Array.from(text.toLowerCase().trim())
  let repeated = null

  repeated = chars.find((baseChar: string, baseIdx: number) => { // O(n)
    console.log('baseChar:', baseChar, ' baseIdx:', baseIdx)

    return chars.find((char: string, idx: number) => { // O(n)

      console.log(`${baseChar} === ${char} && ${baseIdx} !== ${idx}`)
      return (baseChar === char && baseIdx !== idx)
    })
  })
  return repeated || null
}

console.log('firstCharImperative result:', firstCharImperative(searchText))



const firstCharImperativeOther = (text: string): string => { // O(n²)

  const chars: string[] = Array.from(text.toLowerCase().trim())
  let repeated = null

  repeated = chars.find((baseChar: string, baseIdx: number, baseChars: string[]) => { // O(n)

    console.log('baseChars:', baseChars, 'baseIdx:', baseIdx)
    let currChars: string[] = baseChars.slice(baseIdx+1) // slice O(n)

    return currChars.find((char: string) => { // O(n)
      console.log(`(${baseChar} === ${char})`)
      return (baseChar === char)
    })
  })
  return repeated || null
}

console.log('firstCharImperativeImproved result:', firstCharImperativeOther(searchText))



const firstCharDeclarative = (text: string): string => { // O(n²)

  const chars: string[] = Array.from(text.toLowerCase().trim())
  let repeated = null
  let loop: boolean = true

  for(let baseIdx = 0; baseIdx < chars.length && loop; baseIdx++) {
    for(let idx = baseIdx; idx < chars.length && loop; idx++) {
      if(baseIdx !== idx && chars[baseIdx] === chars[idx]) {
        repeated = chars[idx]
        loop = false
      }
    }
  }

  return repeated || null
}

console.log('firstCharDeclarative result:', firstCharDeclarative(searchText))




const firstCharMap = (text: string): string => { // O(n)

  const chars: string[] = Array.from(text.toLowerCase().trim())
  let charMap = new Map<string,number>()

  return chars.find((char: string, idx: number) => {
    if (charMap.get(char) === 1) return true
    charMap.set(char, 1)
    return false
  })
}

console.log('firstCharHash returns:', firstCharMap(searchText))









