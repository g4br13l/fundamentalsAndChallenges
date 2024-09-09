
 // Definition for singly-linked list.
// @ts-ignore
 class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}


function reverseList(head: ListNode | null): ListNode | null {

  if(!head?.next) return head
  let currP: ListNode|null = head
  let leftP: ListNode|null = null
  let rightP: ListNode|null = head.next

  while(currP) {
    currP.next = leftP
    leftP = currP
    currP = rightP
    rightP = rightP?.next
  }
  head = leftP
  return head
}


