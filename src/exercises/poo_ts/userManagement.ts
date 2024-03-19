import {Employee} from "./employee.js"
import {Manager} from "./manager.js"
import {Address} from "./address.js"
import {Skill} from "./skill.js"


const gabrielAddress = new Address('av. pres Jose Alencar', 1500)
const rodrigoAddress = new Address('trav. Teodomiro Pereira')


const gabriel = new Employee('Gabriel', 'gabriel@empresa.com', gabrielAddress)
gabriel.setSkills(new Skill('Comunicacao', 5))
gabriel.setSkills(new Skill('programacao', 4))

const rodrigo = new Employee('Rodrigo', 'rodrigo@empresa.com', rodrigoAddress)
rodrigo.setSkills(new Skill('programacao', 1))
rodrigo.setSkills(new Skill('forca', 4))

const rafael = new Manager('Rafael', 'rafael@empresa.com', rodrigoAddress)

console.log('\n \n \n')

console.log(gabriel.name)
console.log(gabriel.email)
console.log(gabriel.address.streeet)
console.log('- ', gabriel.getSkills().at(0).skillName)
console.log('- ', gabriel.getSkills().at(1).skillName)
console.log(gabriel ,'\n \n \n')

console.log(rodrigo.name)
console.log(rodrigo.email)
console.log(rodrigo.address.streeet)
/*rodrigo.address.streeet = 'rua diferente';*/
console.log(rodrigo)

console.log('\n')

console.log(rafael);