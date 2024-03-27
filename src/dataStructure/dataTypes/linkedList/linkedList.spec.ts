import {beforeEach, afterEach, it, describe, expect} from 'vitest'
import {LinkedList} from '././linkedList.js'




type ContextLinkedListT = {
  undefinedList: undefined|LinkedList,
  emptyList: LinkedList,
  twoItemsList: LinkedList
}


beforeEach<ContextLinkedListT>(async(context) => {
  context.undefinedList = undefined
  context.emptyList = new LinkedList(null)
  context.twoItemsList = new LinkedList(10).push(20)
})

afterEach<ContextLinkedListT>(async(context) => {
  context.undefinedList = undefined
  context.emptyList = new LinkedList(null)
  context.twoItemsList = new LinkedList(10).push(20)
})


const twoItemsListScheme = {
  head: {value: 10, next: {value: 20, next: null}},
  tail: {value: 20, next: null},
  length: 2
}

const firstItemListScheme = {
  head: {value: 10, next: null},
  tail: {value: 10, next: null},
  length: 1
}

const secondItemListScheme = {
  head: {value: 20, next: null},
  tail: {value: 20, next: null},
  length: 1
}

const emptyListScheme = {head: null, tail: null, length: 0}




  describe('LinkedList', () => {

    it<ContextLinkedListT>('Should create a linkedList with value of 10',
      ({undefinedList: linkedList}) => {

      linkedList = new LinkedList(10)
      expect(linkedList.head).toEqual({value: 10, next: null})
      expect(linkedList.tail).toEqual({value: 10, next: null})
    })


    it<ContextLinkedListT>('Should push the values 10 and 20 into the linked list',
      ({emptyList: linkedList}) => {

      linkedList.push(10)
      expect(linkedList.head).toEqual({value: 10, next: null})
      expect(linkedList.tail).toEqual({value: 10, next: null})
      expect(linkedList.length).toEqual(1)

      linkedList.push(20)
      expect(linkedList.head).toEqual({value: 10, next: {value: 20, next: null}})
      expect(linkedList.tail).toEqual({value: 20, next: null})
      expect(linkedList.length).toEqual(2)
    })


    it<ContextLinkedListT>('Should pop each element in the linked list',
      ({twoItemsList: linkedList}) => {

        expect(linkedList.pop()).toEqual({value: 20, next: null})
        expect(linkedList.head).toEqual({value: 10, next: null})
        expect(linkedList.tail).toEqual({value: 10, next: null})
        expect(linkedList.length).toEqual(1)

        expect(linkedList.pop()).toEqual({value: 10, next: null})
        expect(linkedList.head).toEqual(null)
        expect(linkedList.tail).toEqual(null)
        expect(linkedList.length).toEqual(0)
    })


    it<ContextLinkedListT>('Should unshift the value 50 into the first position of the linked list with two items',
      ({twoItemsList: lList}) => {

        const unshiftedList = {
          head: {value: 50, next: {value: 10, next: {value: 20, next: null}}},
          tail: {value: 20, next: null},
          length: 3
        }
        expect(lList.unshift(50)).toEqual(unshiftedList)
        expect(lList).toEqual(unshiftedList)
    })

    it<ContextLinkedListT>('Should unshift the value 50 into a empty linked list',
      ({emptyList: lList}) => {

        const unshiftedlList = {
          head: {value: 50, next: null},
          tail: {value: 50, next: null},
          length: 1
        }
        expect(lList.unshift(50)).toEqual(unshiftedlList)
        expect(lList).toEqual(unshiftedlList)
    })


    it<ContextLinkedListT>('Should shift the first value of a linked list with two items',
      ({twoItemsList: lList}) => {

        expect(lList).toEqual(twoItemsListScheme)
        expect(lList.shift()).toEqual({value: 10, next: null})
        expect(lList).toEqual(secondItemListScheme)
    })


    it<ContextLinkedListT>('Should shift the first value of an empty linked list',
      ({emptyList: lList}) => {

        expect(lList).toEqual(emptyListScheme)
        expect(lList.shift()).toEqual(undefined)
        expect(lList).toEqual(emptyListScheme)
    })

    it<ContextLinkedListT>('Should get the node 1 in a linked list with two items',
      ({twoItemsList: lList}) => {

        expect(lList).toEqual(twoItemsListScheme)
        expect(lList.get(1)).toEqual({value: 20, next: null})
    })

    it<ContextLinkedListT>(
      'Should try to get the index 5 of a two-items linked list',
      ({twoItemsList, emptyList}) => {

        expect(twoItemsList).toEqual(twoItemsListScheme)
        expect(emptyList).toEqual(emptyListScheme)

        expect(twoItemsList.get(5)).toEqual(undefined)
        expect(emptyList.get(0)).toEqual(undefined)
      })

    it<ContextLinkedListT>(
      'Should set the value 50 in the index 1 of a two-items linked list',
      ({twoItemsList: lList}) => {

        const setedList = {
          head: { value: 50, next: { value: 20, next: null } },
          tail: { value: 20, next: null },
          length: 2
        }
        expect(lList).toEqual(twoItemsListScheme)
        expect(lList.set(0, 50)).toEqual(true)
        expect(lList).toEqual(setedList)
    })

    it<ContextLinkedListT>(
      'Should try to set a value in the index 3 of a two-items linked list',
      ({twoItemsList: lList}) => {

        expect(lList).toEqual(twoItemsListScheme)
        expect(lList.set(3, 50)).toEqual(false)
        expect(lList).toEqual(twoItemsListScheme)
      })

    it<ContextLinkedListT>('Should try to set a value 10 into a empty linked list',
      ({emptyList: lList}) => {

        expect(lList).toEqual(emptyListScheme)
        expect(lList.set(0, 10)).toEqual(false)
        expect(lList).toEqual(emptyListScheme)
      })

  
})




















