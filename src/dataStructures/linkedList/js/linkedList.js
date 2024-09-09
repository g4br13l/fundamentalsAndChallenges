
export class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class LinkedList {

  constructor(value) {
    if(value === null) {
      this.head = this.tail = null
      this.length = 0
    }
    else {
      const newNode = new Node(value)
      this.head = newNode
      this.tail = this.head
      this.length = 1
    }
  }

  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    }
    else { //this.tail points to the same object as head
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    let temp = this.head
    let pre = this.head

    while(temp.next) {
      pre = temp
      temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
    if (this.length === 1) this.head = this.tail = null
    this.length--
    return temp
  }

  unshift(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = this.tail = newNode
    }
    else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  shift() {
    const temp = this.head
    if(!this.head) return undefined
    if(this.length === 1) {
      this.head = this.tail = null
    }
    else {
      this.head = this.head.next
      temp.next = null
    }
    this.length--
    return temp
  }
  
  get(index) {
    if(index < 0 || index > this.length-1)
      return undefined
    if(!this.head) return null
    let temp = this.head
    for (let i = 1; i <= index; i++) {
      temp = temp.next
    }
    return temp
  }

  set(index, value) {
    let temp = this.get(index)
    if(temp) {
      temp.value = value
      return true
    }
    return false
  }

  insert(value, index) {
    if(index < 0 || index >= this.length) return false
    if(index === 0) return this.unshift(value)
    if(index === this.length-1) return this.push(value)

    const newNode = new Node(value)
    let temp = this.get(index)
    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return this
  }

  //TODO: Insert(), remove(), reverse()

  // ===== Auxiliary =====
  /*#printList(message) {
    console.log(message, myLinkedList)
  }*/

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

}




/*
const myLinkedList = new LinkedList(1)
myLinkedList.push(2)
myLinkedList.push(3)
console.log('myLinkedList:', myLinkedList)
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
myLinkedList.unshift(4)
console.log(myLinkedList.shift())
console.log(myLinkedList.shift())
console.log(myLinkedList.shift())*/










