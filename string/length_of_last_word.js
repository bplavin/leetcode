// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function (s) {
  let length = 0;
  let max;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      length++;
      max = length;
    } else {
      length = 0;
    }
  }
  return max;
};
