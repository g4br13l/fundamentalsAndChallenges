import {beforeEach, describe, expect, it} from "vitest";
import {LinkedList} from "./LinkedList.ts";




const emptyListSchema = {head: null, tail: null, length: 0}

const oneItemListSchema = {
  head: {value: 10, next: null},
  tail: {value: 10, next: null},
  length: 1
}

const twoItemsListSchema = {
  head: {value: 10, next: {value: 20, next: null}},
  tail: {value: 20, next: null},
  length: 2
}

const threeItemsListSchema = {
  head: {value: 10, next: {value: 20, next: {value: 30, next: null}}},
  tail: {value: 30, next: null},
  length: 3
}

const secondItemListSchema = {
  head: {value: 20, next: null},
  tail: {value: 20, next: null},
  length: 1
}


type LinkedListContextT = {
  undefinedList: undefined | LinkedList<number>,
  emptyList: LinkedList<number>,
  oneItemList: LinkedList<number>
  twoItemsList: LinkedList<number>,
  threeItemsList: LinkedList<number>,
}

beforeEach<LinkedListContextT>( async (context) => {
  context.undefinedList = undefined;
  (context.emptyList = new LinkedList(10)).pop()
  context.oneItemList = new LinkedList(10)
  context.twoItemsList = new LinkedList(10).push(20)
  context.threeItemsList = new LinkedList(10).push(20).push(30)
})



describe('LinkedList Pop', () => {

  it<LinkedListContextT>('should remove the last node from oneItemList', ({ oneItemList }) => {
    expect(oneItemList.pop()).toEqual({value: 10, next: null})
    expect(oneItemList).toEqual({head: null, tail: null, length: 0})
  })

  it<LinkedListContextT>('should remove the last node from twoItemsList', ({ twoItemsList }) => {
    expect(twoItemsList.pop()).toEqual({value: 20, next: null})
    expect(twoItemsList).toEqual({
      head: { value: 10, next: null },
      tail: { value: 10, next: null },
      length: 1
    })
  })

  it<LinkedListContextT>('should remove the last node from threeItemsList', ({ threeItemsList }) => {
    expect(threeItemsList.pop()).toEqual({value: 30, next: null})
    expect(threeItemsList).toEqual({
      head: {value: 10, next: {value: 20, next: null}},
      tail: {value: 20, next: null},
      length: 2
    })
  })

  it<LinkedListContextT>('should fail when popping a node from emptyItemList', ({ oneItemList }) => {
    oneItemList.pop()
  })

})


describe('LinkedList Set', () => {

  it<LinkedListContextT>('should set a node at index 0 of a oneItemList', ({ oneItemList }) => {
    expect(oneItemList.set(0, 100)).toEqual(true)
    expect(oneItemList).toEqual({
      head: {value: 100, next: null},
      tail: {value: 100, next: null},
      length: 1
    })
  })

  it<LinkedListContextT>('should set a node at index 0 of a twoItemsList', ({ twoItemsList }) => {
    expect(twoItemsList.set(0, 100)).toEqual(true)
    expect(twoItemsList).toEqual({
      head: {value: 100, next: {value: 20, next: null}},
      tail: {value: 20, next: null},
      length: 2
    })
  })

  it<LinkedListContextT>('should set a node at index 1 of a twoItemsList', ({ twoItemsList }) => {
    expect(twoItemsList.set(1, 200)).toEqual(true)
    expect(twoItemsList).toEqual({
      head: {value: 10, next: {value: 200, next: null}},
      tail: {value: 200, next: null},
      length: 2
    })
  })

  it<LinkedListContextT>('should set a node at index 2 of threeItemsList', ({ threeItemsList }) => {
    expect(threeItemsList.set(2, 300)).toEqual(true)
    expect(threeItemsList).toEqual({
      head: {value: 10, next: {value: 20, next: {value: 300, next: null}}},
      tail: {value: 300, next: null},
      length: 3
    })
  })

  it<LinkedListContextT>('should fail when setting a node out of bound', ({ oneItemList }) => {
    const resultList = {
      head: {value: 10, next: null},
      tail: {value: 10, next: null},
      length: 1
    }
    expect(oneItemList.set(-1, 100)).toEqual(false)
    expect(oneItemList).toEqual(resultList)
    expect(oneItemList.set(2, 100)).toEqual(false)
    expect(oneItemList).toEqual(resultList)
  })

})


describe('LinkedList Get', () => {

  it<LinkedListContextT>('should get the node at index 0 of twoItemsList', ({ twoItemsList }) => {
    expect(twoItemsList.get(0)).toEqual({value: 10, next: {value: 20, next: null}})
  })

  it<LinkedListContextT>('should get the node at index 1 of twoItemsList', ({ twoItemsList }) => {
    expect(twoItemsList.get(1)).toEqual({ value: 20, next: null })
  })

  it<LinkedListContextT>('should fail when getting a node out of bound', ({ twoItemsList }) => {
    expect(twoItemsList.get(-1)).toEqual(undefined)
    expect(twoItemsList.get(3)).toEqual(undefined)
  })

})


describe('LinkedList Insert', () => {

  it<LinkedListContextT>('should insert a new node at index 0 of twoItemsList', ({ twoItemsList }) => {
    expect(twoItemsList.insert(0, 100)).toEqual({
      head: { value: 100, next: {value: 10, next: {value: 20, next: null}}},
      tail: { value: 20, next: null },
      length: 3
    })
  })

  it<LinkedListContextT>('should insert a new node at index 1 of twoItemsList', ({ twoItemsList }) => {
    expect(twoItemsList.insert(1, 100)).toEqual(true)
    expect(twoItemsList).toEqual({
      head: { value: 10, next: {value: 100, next: {value: 20, next: null}}},
      tail: { value: 20, next: null },
      length: 3
    })
  })

  it<LinkedListContextT>('should insert a new node at index 2 of twoItemsList', ({ twoItemsList }) => {
    expect(twoItemsList.insert(2, 100)).toEqual({
      head: { value: 10, next: {value: 20, next: {value: 100, next: null}}},
      tail: { value: 100, next: null },
      length: 3
    })
  })

  it<LinkedListContextT>('should insert a new node at index 1 of threeItemsList', ({threeItemsList}) => {
    expect(threeItemsList.insert(1, 100)).toEqual(true)
    expect(threeItemsList).toEqual({
      head: { value: 10, next: {value: 100, next: {value: 20, next: {value: 30, next: null}}}},
      tail: { value: 30, next: null },
      length: 4
    })
  })

  it<LinkedListContextT>('should fail when inserting a new node out of bound', ({ twoItemsList }) => {
    expect(twoItemsList.insert(-1, 30)).toEqual(false)
    expect(twoItemsList.insert(3, 30)).toEqual(false)
  })

})


describe('LinkedList Remove', () => {

  it<LinkedListContextT>('should remove the first node of threeItemsList', ({ threeItemsList }) => {
    expect(threeItemsList.remove(0)).toEqual(
      {value: 10, next: {value: 20, next: {value: 30, next: null}}}
    )
    expect(threeItemsList).toEqual({
      head: {value: 20, next: {value: 30, next: null}},
      tail: {value: 30, next: null},
      length: 2
    })
  })

  it<LinkedListContextT>('should remove the node at index 1 of threeItemsList', ({ threeItemsList }) => {
    expect(threeItemsList.remove(1)).toEqual({value: 20, next: {value: 30, next: null}})
    expect(threeItemsList).toEqual({
      head: {value: 10, next: {value: 30, next: null}},
      tail: {value: 30, next: null},
      length: 2
    })
  })

  it<LinkedListContextT>('should remove the last node of threeItemsList', ({ threeItemsList }) => {
    expect(threeItemsList.remove(2)).toEqual({value: 30, next: null})
    expect(threeItemsList).toEqual({
      head: {value: 10, next: {value: 20, next: null}},
      tail: {value: 20, next: null},
      length: 2
    })
  })

  it<LinkedListContextT>('should fail trying remove a out of bound node', ({ oneItemList }) => {
    expect(oneItemList.remove(1)).toEqual(undefined)
    expect(oneItemList.remove(-1)).toEqual(undefined)
    expect(oneItemList).toEqual({
      head: {value: 10, next: null},
      tail: {value: 10, next: null},
      length: 1
    })
  })

})


describe('LinkedList Reverse', () => {

  it<LinkedListContextT>('should to revert a threeItemsList', ({ threeItemsList }) => {
    expect(threeItemsList.reverse()).toEqual({
      head: {value: 30, next: {value: 20, next: {value: 10, next: null}}},
      tail: {value: 10, next: null},
      length: 3
    })
  })

  it<LinkedListContextT>('should fail reverting a emptyItemsList', ({ emptyList }) => {
    expect(emptyList.reverse()).toEqual(undefined)
  })

})


