/*
    A dictionary has a key and a value, but it hasn't an index.
    The operations of read, insert and delete has the complexity of O(n).
 */



class Dictionary {

  constructor() {}

  public letters = 'abcdefghijklmnopqrstuvwxyz'
  public startPos = 97
  public charCodeP = 'p'.charCodeAt(0) - this.startPos
  public charCodeA = 'a'.charCodeAt(0) - this.startPos


  alphabeticCharCodeAt(text: string, index: number): number {

    const charCodeP = 'p'.charCodeAt(0) - this.startPos
    const charCodeA = 'a'.charCodeAt(0) - this.startPos
    console.log('charCodeP:', charCodeP , 'charCodeA:', charCodeA)

    return text.toLowerCase().charCodeAt(index) - 97
  }
}



const dictionary = new Dictionary

console.log(
  'charAt: ', dictionary.alphabeticCharCodeAt(dictionary.letters, 2),
  ' - charCode: ', dictionary.letters.charAt(2)
)

console.log( 'p - a =', (dictionary.charCodeP - dictionary.charCodeA) % 8 );


