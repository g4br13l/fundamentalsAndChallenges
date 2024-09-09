



/*function gcdOfStrings(str1: string, str2: string): string {

  let strGreatest: string = ''
  let leftP: number = 0
  let rightP: number = 2

  function compare(strCompare: string, strBase: string) {

    while(rightP < strBase.length) {
      const strPart = strBase.slice(leftP, rightP)
      if( (strPart.length % strBase.length === 0) && strBase.includes(strPart) )
    }

  }
  while(rightP < str1.length) {

    const strPart: string = str2.slice(leftP, rightP)
    if( strPart.length % str2.length === 0)

    if( str2.includes(strPart) ) {
      if(strPart.length > strGreatest.length) strGreatest = strPart
      rightP++
    }
    else {
      leftP++
      rightP = leftP + 2
    }
  }
  return strGreatest
}*/



function gcdOfStrings(str1: string, str2: string): string {

  if (str1 + str2 != str2 + str1) return ''

  function gcd(a: number, b: number) {
    if(b === 0) return a
    return gcd(b, a % b)
  }
  const resultGCD: number = gcd(str1.length, str2.length)
  return str1.slice(0, resultGCD)
}


console.log('result:', gcdOfStrings('ABCABC', 'ABC'))
console.log('result:', gcdOfStrings('ABABAB', 'ABAB'))
console.log('result:', gcdOfStrings('LEET', 'CODE'))
console.log('result:', gcdOfStrings('ABAB', 'ABABXXXAB'))






