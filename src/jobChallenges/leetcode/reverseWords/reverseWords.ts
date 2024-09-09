


function reverseWords(s: string): string {

  //let words = s.trim().split(' ').filter(w => w != '').reverse().join(' ')
  //let words = s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
  let strArr: string[] = s.split(' ')
  let strResult: string = ''

  for(let i = strArr.length -1; i >= 0; i--) {
    if(strArr[i] === '') continue;
    if(strResult.length > 0) strResult += ' '
    strResult += strArr[i]
  }
  return strResult
}



console.log('result1:', reverseWords('the sky is blue'))
console.log('result1:', reverseWords('  hello world  '))
console.log('result1:', reverseWords('a good   example'))








