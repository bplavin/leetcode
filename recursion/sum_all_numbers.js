// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// Make 3 solution variants:

// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.
// An example of the result:

// function sumTo(n) { /*... your code ... */ }

// alert( sumTo(100) ); // 5050

// ---- For loop:
// function sumTo(n) {
//   let sum = 0;
//   for (let i = 0; i < n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// !!!!!! -------- !!!!!!!!

// ---- Recursion:
// function sumTo(n) {
//   let sum = 0;
//   if (n === 1) {
//     return n;
//   } else {
//     sum = n + sumTo(n - 1);
//   }
//   return sum;
// }

// !!!!!! -------- !!!!!!!!

// -----Arithmetic progression:
// function sumTo(n) {
//   return n * ((n + 1) / 2);
// }

//console.log(sumTo(100));

// !!!!!! -------- !!!!!!!!

// ----- Calculate factorial:

// function factorial(n) {
//   if (n === 1) return n;
//   return n * factorial(n - 1);
// }

// console.log(factorial(3));

// !!!!!! -------- !!!!!!!!

// Output a single-linked list
// Let’s say we have a single-linked list:

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// Write a function printList(list) that outputs list items one-by-one.
// Make two variants of the solution: using a loop and using recursion.

// function printList(list) {
//   while(list) {
//     alert(list.val);
//     list = list.next;
//   }
// }

// function printList(list) {

//     alert(list.value); // output the current item

//     if (list.next) {
//       printList(list.next); // do the same for the rest of the list
//     }

//   }

//   printList(list);

//Output a single-linked list from the previous task Output a single-linked list in the reverse order.

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function printReverseList(list) {
  if (list.next) {
    printReverseList(list.next);
  }

  alert(list.value);
}

console.log(printReverseList(list));
