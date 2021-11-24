/**
 * 9. Palindrome Number
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome
 * while 123 is not.
 *
 * Input: x = 121
 * Output: true
 *
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let reverse = `${x}`.split("").reverse().join("");
  return x == reverse;
};
