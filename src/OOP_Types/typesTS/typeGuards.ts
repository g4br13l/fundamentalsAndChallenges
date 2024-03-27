
/* ------------------------------------------------------- */
/* Primitive Type Guard----------------------------------- */

function printType(value: number | string): string {

  // here TypeScript doesn't know what is the type of 'value'

  if(typeof value === 'string') {
    // here we see the functions of string type
    return 'value is a string'
  }
  else {
    // here we see the functions of number type
    return 'value is a number'
  }
}

console.log('printType:', printType(10))
console.log('printType:', printType('10'))




/* Object based Type Guard-------------------------------- */

interface Developer {
  name: string
  language: string
}

interface Designer {
  name: string
  software: string
}

const developer: Developer = { name: 'Gabriel', language: 'Typescript' }
const designer: Designer = { name: 'Rafael', software: 'Adobe Photoshop' }

function isDeveloper(person: Developer | Designer): person is Developer { //TS converts the return
  return 'language' in person //JS returns true if the property exists or false if it doesn't exist
}

function printSkill(person: Developer | Designer): void {

  if (isDeveloper(person)) { // ('language' in person) // person has the property 'language'
    // here we have the property of Developer
    console.log('person:', person.name, person.language)
  }
  else { // here we have the property of Designer
    console.log('person:', person.name, person.software)
  }
}


















