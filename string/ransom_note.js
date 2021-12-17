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
