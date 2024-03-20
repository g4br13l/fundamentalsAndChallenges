
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  
  constructor(value) {
    const node = new Node(value)
    this.head = node
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
    else {
      console.log('else-> tail:', this.tail)
      this.tail.next = newNode
      console.log('else-> tail:', this.tail)
      this.tail = newNode
      console.log('else-> tail:', this.tail)
    }
    this.length++
    return this
  }
}


//const node1 = new Node(10)
//console.log('node1:', node1)

const myLinkedList = new LinkedList(10)
console.log(myLinkedList)
myLinkedList.push(20)








