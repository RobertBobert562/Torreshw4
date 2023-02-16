 /* HW 4
   Example 9 JavaScript code
*/

console.log("Torres Output from HW 4 Example 9");

// Function to determine if a number entered is odd or even
//this uses the arrow function syntax
const isEven = (n1) => {
    if (n1 % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Test the number with the number from 1 to 10
  for (let i = 1; i < 11; i++) {
    console.log(`${i} - ${isEven(i)}`);
  }
  