// Given a sequence of words, print all anagrams together

const printAnagram = (arr) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let newWord = arr[i].split("").sort().join("");

    if (map[newWord]) map[newWord].push(arr[i]);
    else {
      let words = [];
      words.push(arr[i]);
      map[newWord] = words;
    }
  }

  for (let key in map) {
    if (map[key].length > 1) console.log(map[key]);
  }
};

printAnagram(["cat", "dog", "tac", "god", "act"]);
