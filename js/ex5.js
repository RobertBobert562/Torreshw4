 /* HW 4
   Example 5 JavaScript code
*/

console.log("Torres Output from HW 4 Example 5");

const words = [];

while (true) {
  const word = prompt("Enter a word (type 'stop' to finish):").toLowerCase();

  if (word === "stop") {
    if (words.length === 0) {
      console.log("No words to display, 'stop' was the first word entered.");
    } else {
      console.log("You entered the following words:");
      for (const w of words) {
        console.log(w);
      }
    }
    break;
  } else {
    words.push(word);
  }
}
