
let reversedWord

function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length /2; i++) {
    if (word[i] != word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
check if first and last letter match 
move inwards until complete
return false if not a match
return true if all letters match
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
