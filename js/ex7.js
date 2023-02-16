 /* HW 4
   Example 7 JavaScript code
*/

console.log("Torres Output from HW 4 Example 7");

//gets random number between 1-100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

//while loop is false when number is correctly guessed
while (true) {
  const guess = Number(prompt("Guess a number between 1 and 100"));
//correct guess
  if (guess === randomNumber) {
    attempts++;
    alert(`Correct! It took you ${attempts} attempts to guess the correct number.`);
    break;
    //informs wether guess was lower or hugher than the random number
  } else if (guess < randomNumber) {
    attempts++;
    alert("Too low, guess again");
  } else if (guess > randomNumber) {
    attempts++;
    alert("Too high, guess again");
  }
}
