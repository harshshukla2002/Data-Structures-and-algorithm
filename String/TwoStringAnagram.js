// Check whether two Strings are anagram of each other

const TwoStringAnagram = (str1, str2) => {
  if (str1.length < str2.length) return false;

  const count1 = new Array(256).fill(0);
  const count2 = new Array(256).fill(0);

  for (let i = 0; i < str1.length && i < str2.length; i++) {
    count1[str1[i].charCodeAt(0)]++;
    count2[str2[i].charCodeAt(0)]++;
  }

  for (let i = 0; i < 256; i++) {
    if (count1[i] !== count2[i]) return false;
  }

  return true;
};

let str1 = "gram".split("");
let str2 = "arm".split("");

console.log(TwoStringAnagram(str1, str2) ? "Anagram" : "Not Anagram");
