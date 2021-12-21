// 290. Word Pattern

// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true

// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false

// Example 4:

// Input: pattern = "abba", s = "dog dog dog dog"
// Output: false

// Constraints:

// 1 <= pattern.length <= 300
// pattern contains only lower-case English letters.
// 1 <= s.length <= 3000
// s contains only lower-case English letters and spaces ' '.
// s does not contain any leading or trailing spaces.
// All the words in s are separated by a single space.

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  let pat = pattern.split("");
  let str = s.split(" ");
  let map = new Map();

  if (pat.length !== str.length) return false;
  if (new Set(pat).size !== new Set(str).size) return false;

  for (let i = 0; i < pat.length; i++) {
    if (map.has(pat[i]) && map.get(pat[i]) !== str[i]) return false;
    map.set(pat[i], str[i]);
  }
  return true;
};
