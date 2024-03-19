


function howArraysWork() {
// ARRAY is a ??Static linked list??

  const names = ['Gabriel', 'Rafael', 'Maria'];
  console.log('New Array: ', names);

  const personObj = {0: 'Gabriel', 1: 'Rafael', length: 4};
  console.log('Array-like Object to Array: ', Array.from(personObj));

  const books = {
    itens: [ {name: 'Book A'}, {name: 'Book B'} ]
  };
  // object is not directly iterable.
  // for(let book of books) {
  for(let book of books.itens) {
    console.log('Iterated book: ', book);
  }
}





howArraysWork()










