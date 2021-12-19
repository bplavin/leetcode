// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
  ransomNote.split("").sort().join("");
  magazine.split("").sort().join("");

  let str = "";

  for (let i = 0; i < magazine.length; i++) {
    if (magazine[i] === ransomNote[i]) {
      str += ransomNote[i];
    }
  }
  return str === ransomNote;
};

console.log(canConstruct("abc", "a"));
