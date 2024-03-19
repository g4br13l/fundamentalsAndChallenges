

const randomNumbers = (positions: number, maxNumber: number): number[] => {
  return Array.from({length: positions}, () => Math.floor(Math.random() * maxNumber));
}

const randomLetters = (): string[] => {
  const letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
                   'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return letters.sort( () => Math.random() - 0.5 );
}


const numbers: number[] = randomNumbers(20, 100);
const letters: string[] = randomLetters();
console.log('numbers => '+ numbers);
console.log('randomLetters => '+ letters);



