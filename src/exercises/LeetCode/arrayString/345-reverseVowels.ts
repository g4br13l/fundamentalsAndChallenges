

/*function reverseVowels(s: string): string {

  let vowelsOrder: string[] = []

  function isVowels(char: string): boolean {
    const c: string = char.toLowerCase()
    return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'
  }

  for(let i = 0; i < s.length; i++) {
    if(isVowels(s[i])) vowelsOrder.unshift(s[i])
  }

  for(let i = 0; i < s.length; i++) {
    if(isVowels(s[i])) {
      s = s.substring(0, i) + vowelsOrder[0] + s.substring(i+1)
      vowelsOrder.shift()
    }
  }

  return s
}

console.log('reverseVowels(\'hello\') expect(\'hello\'):', reverseVowels('hello'))
console.log('reverseVowels(\' \') expect(\' \'):', "'"+ reverseVowels(' ') +"'")*/




function reverseVowelsTwo(s: string): string {

  let left = 0
  let right = s.length - 1
  const vowels = new Set(["a", "i", "u", "e", "o","A", "I", "U", "E", "O"])
  let res: string[] = [...s]

  while(left < right) {
    if(!vowels.has(s[left])) left++
    if(!vowels.has(s[right])) right--
    if(vowels.has(s[left]) && vowels.has(s[right])) {
      const temp = res[left]
      res[left] = res[right]
      res[right] = temp
      left++
      right--
    }
  }
  return res.join('')
}


/*console.log('reverseVowelsTwo(\'hello\') expect(\'holle\'):', reverseVowelsTwo('hello'))
console.log('reverseVowelsTwo(\' \') expect(\' \'):', "'"+ reverseVowelsTwo(' ') +"'")
console.log('reverseVowelsTwo(\'.,\') expect(\'.,\'):', "'"+ reverseVowelsTwo('.,') +"'")*/
console.log('reverseVowelsTwo(\'A man, a plan, a canal: Panama\') expect(\'a man, a plan, a canal: PanamA\'):',
            "'"+ reverseVowelsTwo('A man, a plan, a canal: Panama') +"'")

