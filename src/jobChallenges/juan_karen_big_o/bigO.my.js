
const CHARS = 'abc123'.split('')
console.log(CHARS)


function indexOfAnyCharacterExceptThisOne(str, startIndex, count) {

  console.log('(str.length) => ', str.length)
  if (str.length === 0) return -1

  for (let i = startIndex; i < startIndex + count; i++) {

    console.log('str[i] => ' + str[i])

    if (!CHARS.includes(str[i])) {
      return i
    }
  }

  return -1
}

console.log('indexOfAnyCharacterExceptThisOne() => ', indexOfAnyCharacterExceptThisOne('a'))