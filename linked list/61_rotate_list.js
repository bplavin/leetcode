// 61. Rotate List
// #Medium

// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:
// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:
// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var rotateRight = function (head, k) {
  if (head == null) return head;

  let current = head;
  let len = 1;
  let count;

  //Find the length of the node
  while (current.next) {
    current = current.next;
    len++;
  }

  //Reset the head
  current.next = head;
  count = len - (k % len);

  while (count > 0) {
    head = head.next;
    current = current.next;
    count--;
  }
  //End the listnode
  current.next = null;

  return head;
};

let l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(3);
l2.next.next.next = new ListNode(4);

console.log(rotateRight(l2, 2));
