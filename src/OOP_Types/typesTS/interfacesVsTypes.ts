/* ------------------------------------------------------- */
/* Merge Declaration-------------------------------------- */

interface Profession {
  name: string
}

interface Profession {
  salary: number
}

const dev: Profession = {  //It works with interface, but it doesn't work with type
  name: 'John',
  salary: 5500      // required
}




/* Maped Types ------------------------------------------- */

type Stringfy<T> = {
  [P in keyof T]: string  // It works with type, but doesn't work with interface
}





