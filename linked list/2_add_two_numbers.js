// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let sumHead = new ListNode(-1);
  let l3 = sumHead;
  let rest = 0;

  while (l1 != null && l2 != null) {
    let sum = l1.val + l2.val + rest;
    l3.next = new ListNode(sum >= 10 ? sum % 10 : sum);
    rest = sum >= 10 ? 1 : 0;
    l1 = l1.next;
    l2 = l2.next;
    l3 = l3.next;
  }

  while (l1 != null) {
    let sum = l1.val + rest;
    l3.next = new ListNode(sum >= 10 ? sum % 10 : sum);
    rest = sum >= 10 ? 1 : 0;
    l1 = l1.next;
    l3 = l3.next;
  }

  while (l2 != null) {
    let sum = l2.val + rest;
    l3.next = new ListNode(sum >= 10 ? sum % 10 : sum);
    rest = sum >= 10 ? 1 : 0;
    l2 = l2.next;
    l3 = l3.next;
  }

  if (rest > 0) {
    l3.next = new ListNode(1);
  }
  return sumHead.next;
};

// var addTwoNumbers2 = function (l1, l2) {
//   let sumHead = null;
//   let l3 = null;
//   let prev = null;
//   let rest = 0;

//   while (l1 != null && l2 != null) {
//     let sum = l1.val + l2.val + rest;
//     l3 = new ListNode(sum >= 10 ? sum % 10 : sum);
//     if (prev != null) {
//       prev.next = l3;
//     }
//     if (sumHead == null) {
//       sumHead = l3;
//     }
//     rest = sum >= 10 ? 1 : 0;
//     l1 = l1.next;
//     l2 = l2.next;
//     prev = l3;
//   }
//   return sumHead.next;
// };

// let l1 = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

let l2 = new ListNode(1);
l2.next = new ListNode(2);
l2.next.next = new ListNode(3);
l2.next.next.next = new ListNode(4);
