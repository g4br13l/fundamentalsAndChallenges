
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
    else { //this.tail points to the same object as head
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined
    if (this.head.length === 1) return this.head = this.tail = null

    let temp = this.head
    let pre = this.head

    while(temp.next) {
      pre = temp
      temp = temp.next
    }
    this.tail = pre
    this.tail.next = null
    this.length--
    return temp
  }

  unshift(value) {
    this.#printList('before')
    const newNode = new Node(value)

    if (!this.head) {
      this.head = this.tail = newNode
    }
    else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    this.#printList('after')
    return this
  }

  shift() {
    if(!this.head) return undefined
    if(this.length === 1) {
      this.head = this.tail = null
    }
    else {
      this.head = this.head.next
    }
    this.length--
    return this
  }


  // ===== Auxiliary =====
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
//console.log('myLinkedList:', myLinkedList)

/*console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())
console.log(myLinkedList.pop())*/

myLinkedList.unshift(4)











