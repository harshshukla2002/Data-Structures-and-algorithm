// Maximum consecutive repeating character in string

const MaxRepeatingCharacter = (str) => {
  let res = str[0];
  let count = 0;
  let temp = 1;

  for (let i = 0; i < str.length; i++) {
    if (i < str.length - 1 && str[i] === str[i + 1]) temp++;
    else {
      if (count < temp) {
        count = temp;
        res = str[i];
      }
      temp = 1;
    }
  }
  console.log(res);
};
MaxRepeatingCharacter("aaaabbaaccde");
