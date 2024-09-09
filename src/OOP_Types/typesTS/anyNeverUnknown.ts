

namespace anyNeverUnknown {

  console.log(' Any Never Unknown TS ')


  declare function tomorrow(day: Date) : Date;



  let age: any

  age = 33
  console.log('age:', age, ' - type:', typeof age)

  age++
//age.toUpperCase() // Error in run time but typescript doesn't capture this
//age.map(age)      // Error in run time but typescript doesn't capture this
//age.foot = true   // Error in run time but typescript doesn't capture this
//tomorrow(age)     // Error in run time but typescript doesn't capture this

  age = 'Gabriel'
  console.log('age:', age, ' - type:', typeof age)

  age = true
  console.log('age:', age, ' - type:', typeof age)

  console.log('')




  let name: unknown

  name = 'Gabriel'
  console.log('name:', name, ' - type:', typeof name)

// name++   // TS ERROR: n arithmetic operand must be of type any, number, bigint or an enum type.
  if(typeof name === 'number') console.log('name:', ++name, ' - type:', typeof name)

//name.toUpperCase()  // TS ERROR: Property toUpperCase does not exist on type unknown.
  if(typeof name === 'string') console.log('name:', name.toUpperCase(), ' - type:', typeof name)

  name = 33
  console.log('name:', name, ' - type:', typeof name)

// name++   // TS ERROR: n arithmetic operand must be of type any, number, bigint or an enum type.
  if(typeof name === 'number') console.log('name:', ++name, ' - type:', typeof name)

  console.log('')




  type User = 'standard' | 'admin'
//type User = 'standard' | 'admin'  // throws the error

  function login(user: User) {
    switch(user) {
      case 'standard': return true
      case 'admin': return true
      default:
        const _unreachable: never = user
        throw new Error('wrong user type')
    }
  }

}








