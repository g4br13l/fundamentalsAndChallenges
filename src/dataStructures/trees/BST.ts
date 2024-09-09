

export type NodeTreeT<T> = NodeTree<T> | undefined

export class NodeTree<T> {

  public value: T | undefined = undefined
  public left: NodeTreeT<T>
  public right: NodeTreeT<T>

  constructor(value: T) {
    this.value = value
  }
}

// Binary Search Tree
export class BST<T> {

  public root: NodeTreeT<T>

  constructor() {
    this.root = null
  }


  public insert(value: T): BST<T> {

    const newNode = new NodeTree<T>(value)
    if(!this.root) { this.root = newNode; return this; }
    let currNode: NodeTreeT<T> = this.root

    while(currNode) {
      if(value >= currNode.value) {
        if(currNode.right) { currNode = currNode.right; continue; }
        currNode.right = newNode
        return this
      }
      if(value < currNode.value) {
        if(currNode.left !== undefined) { currNode = currNode.left; continue; }
        currNode.left = newNode
        return this
      }
    }
  }

}







