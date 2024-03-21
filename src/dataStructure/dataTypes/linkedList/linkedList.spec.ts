import {test, describe, expect} from 'vitest'
import {Node, LinkedList} from './linkedList'

const myLinkedList = null


describe('LinkedList', () => {
  
  test('create myLinkedList with 10', () => {
    myLinkedList = new LinkedList(10)
    const firstNode = { valeu: 10, next: null }
    expect(myLinkedList).toEqual(firstNode)
  })
  
})

//const myLinkedList = new LinkedList(1)


//test('get index 2 from myLinkedList', 
// () => {})