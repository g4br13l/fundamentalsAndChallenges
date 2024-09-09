/*
  O que é uma closure?
    São funções que podem acessar valores da função pai, mesmo depois dela ser terminada.
*/




/*******************************************************************************************/
// Isso não explica totalmente o que é Closure
// porque no momento do acesso à variável da função pai, ela ainda não foi terminada.

let x = 100

function logThis() {
  console.log(x)
}
//logThis()





/*******************************************************************************************/
// Isso explica totalmente uma função closure

let globalValue = 'global'

const parentFunc = () => {

  let funcValue = 'func'
  console.log( 'parentFunc() =>', { 'funcValue': funcValue, 'globalValue': globalValue } )

  const childFunc = () => {
    console.log( 'childFunc() =>', {
      'funcValue': funcValue = funcValue.concat('-F'),
      'globalValue': globalValue = globalValue.concat('-G')
    })
  }

  return childFunc
}

const result = parentFunc()
console.info(' \n => ParentFunc was returned (closed)')
console.log( 'global =>', { 'result:': result } )

// Call a childFunc and access values from the parentFunc after it was closed. (CLOSURE)
result()

// We still have access to the function and its values. We can modify it.
result()
result()
console.log( 'global =>', { 'funcValue': 'not defined', 'globalValue': globalValue })



// we can call the childFunc immediately
console.info('\n',  '=> Calling ChildFunc immediately')
parentFunc()()




/*******************************************************************************************/
// IIFE - Immediately Invoked Function Expression

console.info('\n',  '=> Defining and Calling parentCounter immediately')

const parentCounter = (() => {

  let privCount = 0
  console.log( 'parentCounter() =>', { 'privCount': privCount } )

  return () => {
    privCount += 1
    console.log( 'childCounter() =>', { 'privCount': privCount } )
  }
})()

console.info('=> calling childCounter function 2 times')
parentCounter()
parentCounter()





/*******************************************************************************************/
console.info('\n',  '=> Defining and Calling classCredit immediately')

const classCredit = (( creditNum: number ) => {

  let privCredits = creditNum;
  console.log( 'classCredit =>', { 'privCredits': privCredits } )

  const decrement = () => {
    privCredits--
    console.log( 'classCredit.decrement =>', { 'privCredits': privCredits } )
  }
  return decrement
})(3)

console.log('calling classCredit.decrement()')
classCredit()
classCredit()





/*******************************************************************************************/
console.info('\n',  '=> useState like function')

const useState = <DataT>( val: DataT ):
  [ () => DataT, (newVal: DataT) => void ] => {

    let value: DataT = val
    console.log( 'useState =>', { 'value': value } )

    return [
      (): DataT  => {
        console.log('useState_return1 =>', { 'value': value } )
        let localVal: DataT = value
        return localVal
      },
      (newVal: DataT) => {
        console.log('useState_return2 =>', { 'newVal': newVal } )
        value = newVal
        console.log('useState_return2 =>', { 'value': value } )
      }
    ]

}


let a = new Set<string>('a')

console.log('useState call')

const [ name, setName ] = useState<string>('Gabriel')
console.log( 'global_useState =>', { 'setName': setName } )
console.log( 'global_useState =>', { 'name': name() } )


setName('Rodrigo')
console.log( 'global_useState =>', { 'name': name() } )











