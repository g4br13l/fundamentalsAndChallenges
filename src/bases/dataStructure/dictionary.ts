/*
    A dictionary has a key and a value, but it hasn't an index.
    The operations of read, insert and delete has the complexity of O(n).
 */

const letters = 'abcdefghijklmnopqrstuvwxyz';
const startPos = 97;

function alphabeticCharCodeAt(text: string, index: number): number {
  return text.toLowerCase().charCodeAt(index) - 97;
}

const charCodeP = 'p'.charCodeAt(0) - startPos;
const charCodeA = 'a'.charCodeAt(0) - startPos;
console.log('charCodeP:', charCodeP, 'charCodeA:', charCodeA);


console.log( 'charAt: ', alphabeticCharCodeAt(letters, 2), ' - charCode: ', letters.charAt(2));
console.log( 'p - a =', (charCodeP - charCodeA) % 8 );


