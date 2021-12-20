// 242. Valid Anagram

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let k = s.split("").sort().join("");
  let l = t.split("").sort().join("");

  for (let i = 0; i < k.length; i++) {
    if (k[i] !== l[i]) return false;
  }
  return true;
};

console.log(isAnagram("rat", "car"));
