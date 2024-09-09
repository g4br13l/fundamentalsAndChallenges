


function maxVowels(s: string, k: number): number {

  let countVowels = 0
  let maxVowels = 0

  function isVowel(s: string): boolean {
    return s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u'
  }

  for(let i = 0; i < s.length; i++) {
    if(isVowel(s[i])) countVowels++
    if(i >= k-1) {
      maxVowels = countVowels > maxVowels ? countVowels : maxVowels
      if( isVowel(s[i-(k-1)]) ) countVowels--
    }
  }

  return maxVowels
}


console.log('result: ', maxVowels("abciiidef", 3)) //expect 3
console.log('result: ', maxVowels("aeiou", 2)) //expect 2
console.log('result: ', maxVowels("leetcode", 3)) //expect 2



