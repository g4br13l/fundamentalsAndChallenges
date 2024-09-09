






const buildSandwich = (ingredient1: string) => {
  return (ingredient2: string) => {
    return (ingredient3: string) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`
    }
  }
}

const mySandwich = buildSandwich('Bacon')('Lettuce')('Tomato')
console.log('mySandwich:', mySandwich)


const buildSOther = (ingred1) => (ingred2) => (ingred3) => `${ingred1}, ${ingred2}, ${ingred3}`;
const myOther = buildSOther('turkey')('cheese')('bread')
console.log('myOther:', myOther)





