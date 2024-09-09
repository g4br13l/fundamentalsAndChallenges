

export type NodeT<T> = Node<T> | undefined

class Node<T> {

  public value: T | null = null
  public next: Node<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}



export class LinkedList<T> {

  public head: Node<T>|null = null
  public tail: Node<T>|null = null
  public length: number = 0

  public constructor(value: T) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  //O(1) creates a new node in the end
  public push(value: T): LinkedList<T> {
    let newNode = new Node(value)
    if(!this.head) this.head = this.tail = new Node(value)
    else {
      this.tail.next = newNode
      this.tail = this.tail.next
    }
    this.length++
    return this
  }

  //O(n) remove the last node from the list, change the length, and returns the node removed.
  public pop(): NodeT<T> {
    let temp: NodeT<T> = this.head
    let removed: NodeT<T> = this.tail
    if(!this.head) return undefined
    if(this.length === 1) this.head = this.tail = null
    else {
      while (temp.next.next) {
        temp = temp.next
      }
      this.tail = temp
      temp.next = null
    }
    this.length--
    return removed
  }

  //O(1) creates a new node in the beginning
  public unshift(value: T): LinkedList<T> {
    const newNode = new Node(value)
    if(!this.head) this.head = this.tail = newNode
    else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  //O(1) exclude the fist node
  public shift() {
    if(!this.head) return undefined
    let temp: NodeT<T> = undefined
    if(this.length === 1) this.head = this.tail = null
    else {
      temp = this.head
      this.head = this.head.next
    }
    this.length--
    return temp
  }

  //O(n) returns the value in the index
  public get(index: number): NodeT<T> {
    if(index < 0 || index >= this.length) return undefined
    let temp = this.head
    for(let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  //O(n) creates a new node in the index and return the node created or undefined
  public set(index: number, value: T) {
    let temp = this.get(index)
    if(temp) {
      temp.value = value
      return true
    }
    return false
  }

  //O(n) creates a new node in the determined index
  public insert(index: number, value: T): LinkedList<T> | boolean {
    if(index < 0 || index > this.length) return false
    if(index === 0) return this.unshift(value)
    if(index === this.length) return this.push(value)
    let temp = this.get(index-1)
    let newNode = new Node(value)
    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return true
  }

  //O(n) remove the node at index passed as parameter
  public remove(index: number) {
    if(index < 0 || index >= this.length) return undefined
    if(index === 0) return this.shift()
    if(index === this.length-1) return this.pop()
    let temp = this.get(index-1)
    const removed = temp.next
    temp.next = temp.next.next
    this.length--
    return removed
  }

  //O(n)
  public reverse(): LinkedList<T> {
    if(!this.head) return undefined
    let currP = this.head
    let nextP = currP.next
    let prevP = null
    this.head = this.tail
    this.tail = currP
    for(let i = 0; i < this.length; i++) {
      nextP = currP.next
      currP.next = prevP
      prevP = currP
      currP = nextP
    }
    return this
  }

}





