

namespace deleteMiddle {


  //Definition for singly-linked list.
  class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
      this.val = (val === undefined ? 0 : val)
      this.next = (next === undefined ? null : next)
    }
  }


  function deleteMiddle(head: ListNode | null): ListNode | null {

    if(!head.next) return null
    let rightP: ListNode|null = head?.next?.next
    let leftP: ListNode|null = head

    while(rightP?.next) {
      rightP = rightP.next.next
      leftP = leftP.next
    }
    leftP.next = leftP.next?.next
    return head
  }



//console.log('expect: [] - result:', deleteMiddle( {val: 1, next: null} ))
  console.log('expect: [1, 1, 1] - deleteMiddle([1, 1, 1, 1]):', JSON.stringify(deleteMiddle(
    {val: 1, next:
        {val: 1, next:
            {val: 1, next:
                {val:1 , next: null}
            }
        }
    }
  )))

  console.log('expect: [1,2,4] - deleteMiddle([1, 2, 3, 4]):', JSON.stringify(deleteMiddle(
    {val: 1, next: {
        val: 2, next: {
          val: 3, next: {
            val: 4, next: null
          }
        }
      }}
  )))


//[1,3,4,7,1,2,6]
  console.log('expect: [1,3,4,1,2,6] - deleteMiddle([1,3,4,7,1,2,6]):', JSON.stringify(deleteMiddle(
    {val: 1, next:
        {val: 3, next:
            {val: 4, next:
                {val: 7, next:
                    {val: 1, next:
                        {val: 2, next:
                            {val: 6, next: null}
                        }
                    }
                }
            }
        }
    }
  )))

}




