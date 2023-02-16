 /* HW 4
   Example 6 JavaScript code
*/

console.log("Torres Output from HW 4 Example 6");

// Function to count the number of vowels in a word
function countVowels(word) {
    // Make the word lowercase to make the function case-insensitive
    word = word.toLowerCase();
    //initialize vowel count as 0
    let count = 0;
    //iterates through the words length to check if it has vowels.
    for (let i = 0; i < word.length; i++) {
      if (word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' || word[i] === 'u' || word[i] === 'y') {
        count++;
      }
    }
    //returns vowel count
    return count;
  }
  
  // Function to check if a word is a palindrome
  function isPalindrome(word) {
    // Make the word lowercase to make the function case-insensitive
    word = word.toLowerCase();
    
    // Reverse the word using split, reverse, and join
    let reversedWord = word.split('').reverse().join('');
    
    // Compare the original word and the reversed word
    if (word === reversedWord) {
      return true;
    } else {
      return false;
    }
  }
  
  // Ask the user for a word
  let word = prompt('Enter a word:');
  
  // Get the number of vowels in the word using the countVowels function
  let vowelCount = countVowels(word);
  
  // Check if the word is a palindrome using the isPalindrome function
  let palindrome = isPalindrome(word);
  
  // Display the results
  //can this be implemented using boolean for palindrome identification?
  console.log(`${word} contains ${vowelCount} vowels and is ${palindrome ? 'a palindrome' : 'not a palindrome'}.`);
  