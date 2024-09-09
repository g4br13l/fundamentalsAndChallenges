
const people = [
  {name: 'Gabriel', age: 33, sex: 'M', active: true},
  {name: 'Maria', age: 28, sex: 'W', active: true},
  {name: 'Rafael', age: 36, sex: 'M', active: false},
  {name: 'Matheus', age: 22, sex: 'M', active: true},
]


const foundUser = people.find(user => {
  return user.age >= 30
})
console.log('user: ', foundUser)


const filteredUsers = people.filter(user => {
  return user.active;
})
console.log('filteredUsers:', filteredUsers)


const indexUser = people.findIndex(user => {
  return user.age === 28;
})
console.log('indexUser:', indexUser)


const mappedUsers = people.map((user, index, array) => {
  user.name = 'my name is '+ user.name
  if(user.age <= 30) user.age++
  return user
})
console.log('mappedUsers:', mappedUsers)


console.log('Reversed:', people.reverse())

console.log('Some user is inactive?', people.some(user => user.active === false))

console.log('Every user is active?', people.every(user => user.active === true))

const totalAgeReduced = people.reduce((prevUser: any, currUser: any) => {
  return prevUser += currUser.age
}, 0)
console.log('totalAgeReduced:', totalAgeReduced)


// others...








