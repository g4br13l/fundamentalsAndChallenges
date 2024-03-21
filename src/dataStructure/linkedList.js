
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {

  constructor(value) {
    const newNode = new Node(value)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  push(value) {
    const newNode = new Node(value)
    if (this.head === null) {
      console.log('if runs')
      this.head = newNode
      this.tail = newNode
    }
    else { //this.tail points to the same object as head.
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    if (this.head.length === 1) 
      return this.head = this.tail = null

    let temp = this.head
    let pre = this.head

    while(temp.next) {
      pre = temp
      temp = temp.next
    }
    //In lists with one element tail points to the same object as head
    //this.tail = {...pre, next: null} //Not the sema object pointed by last element
    this.tail = pre
    this.tail.next = null
    this.length--
    return temp
  }


  // Auxiliary
  #printList(message) {
    console.log(message, myLinkedList)
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

}


//const node1 = new Node(10)
//console.log('node1:', node1)

const myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
myLinkedList.push(4)

console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())











