// Sentence Palindrome (Palindrome after removing spaces, dots, .. etc)

const PalindromeString = (str) => {
  let str1 = str.split(" ").join("").toLowerCase();
  let str2 = str1.split("").reverse().join("");

  console.log(str1 === str2 ? "Palindrome" : "Not Palindorme");
};

PalindromeString("Too hot to hoot");
