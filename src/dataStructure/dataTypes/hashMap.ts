

function howMapWorks() {
// MAP is a HashMap

  const people = [
    {id: 0, name: 'Gabriel'},
    {id: 2, name: 'Rafael'},
    {id: 3, name: 'Maria'}
  ]

  const newPeopleMap = new Map([['brazilian', 'Gabriel'], ['American', 'Matheus']]);
  console.log('mappedPeople:', newPeopleMap)

  const peopleMap = new Map()

  for (const person of people) {
    peopleMap.set(person.id, person)
    console.log('person:', person)
  }

  console.log('peopleMap:', peopleMap)
}


function howSetsWork() {
// SET is a HashMap with of non-repeatable values uses your own values as key.

  const dataSetA = new Set([100, {name: 'Gabriel'}, 'hello', true])
  const dataSetB = new Set([100, {name: 'Gabriel'}, 'hello', false])

  console.log('dataSetA:', dataSetA)
  console.log('Set to Array:', Array.from(dataSetA))


  const UnionOfSets = new Set([...dataSetA, ...dataSetB])
  console.log('UnionOfSets:', UnionOfSets)

  console.log( 'Intersection:', Array.from(dataSetA).filter(item => dataSetB.has(item)) )

  console.log('diference:', [...dataSetA].filter( item => !dataSetB.has(item)) )

  //methods: add(), has(), delete(), clear(), values(), entries(), forEach() ...
}



howMapWorks()
howSetsWork()













