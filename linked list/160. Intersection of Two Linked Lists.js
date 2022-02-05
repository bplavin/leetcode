// 160. Intersection of Two Linked Lists
// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// Example 1:
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'
// Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

// Example 2:
// Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
// Output: Intersected at '2'
// Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
// From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let curA = headA;
  let curB = headB;
  while (curA != curB) {
    curA = curA == null ? headB : curA.next;
    curB = curB == null ? headA : curB.next;
  }
  return curA;
};

let nodeA = new ListNode(1);
nodeA.next = new ListNode(3);
nodeA.next.next = new ListNode(8);
nodeA.next.next.next = new ListNode(4);

let nodeB = new ListNode(5);
nodeB.next = new ListNode(8);
nodeB.next.next = new ListNode(4);

console.log(getIntersectionNode(nodeA, nodeB));
