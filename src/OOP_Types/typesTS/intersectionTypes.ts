/* ------------------------------------------------------- */
/* Intersection Types ------------------------------------ */

interface Person {
  name: string
  age: number
}

type Address = {
  street: string
  zipCode: string
}


const person: Person = {
  name: 'Gabriel',
  age: 33
}

const address: Address = {
  street: 'Gabriels strees',
  zipCode: '123.456.78-90'
}

const personWithAddress: Person & Address = { // intersection types
  ...person,
  ...address
}



















