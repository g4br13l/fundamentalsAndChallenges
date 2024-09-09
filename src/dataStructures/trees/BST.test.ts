import {beforeEach, describe, expect, it} from "vitest";
import {BST, NodeTreeT} from "./BST.ts";




const emptyBST = { root: null }




type BSTContextT<T> = {
  BST_empty: BST<T>,
  BST_50: BST<T>,
}



beforeEach<BSTContextT<number>>( async (context) => {
  context.BST_empty = new BST<number>()
  context.BST_50 = new BST<number>().insert(50)
})



describe('BST creation', () => {

  it<BSTContextT<number>>('should create a null BST', ({ BST_empty }) => {
    //console.log('(after) create null BST:', BST_empty)
    expect(BST_empty).toEqual({ root: null })
  })

})



describe('BST insertion', () => {


  it<BSTContextT<number>>('should insert a BST with Node 1', ({ BST_empty }) => {
    //console.log('(before) insert Node 10:', BST_empty)
    expect(BST_empty.insert(10)).toEqual({ root: { value: 10 } })
    //console.log('(after) insert Node 10:', BST_empty)
  })

  it<BSTContextT<number>>('should insert Nodes 20 and 80 in a BST_50', ({ BST_50 }) => {

    //console.log('(before) insert Node 20 and 30 in BST_50:', BST_50)
    BST_50.insert(20).insert(80)

    const BST_res = {
      root: {
        value: 50,
        left: { value: 20 },
        right: { value: 80 }
      }
    }

    expect(BST_50).toEqual(BST_res)
    //console.log('(after) insert Node 20 and 30 in BST_50:', BST_50)
  })

  it<BSTContextT<number>>('should insert Nodes 20, 80, 10, 60, 30, 90 in a BST_50', ({ BST_50 }) => {

    //console.log('(before) insert Node 20 and 30 in BST_50:', BST_50)
    BST_50.insert(20).insert(80).insert(10).insert(60).insert(30).insert(90)
    const BST_res = {
      root: {
        value: 50,
        left: {
          value: 20,
          left: { value: 10 },
          right: { value: 30 }
        },
        right: {
          value: 80,
          left: { value: 60 },
          right: { value: 90 }
        },
      }
    }
    expect(BST_50).toEqual(BST_res)
    //console.log('(after) insert Node 20 and 30 in BST_50:', BST_50)
  })

})







