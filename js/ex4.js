/* HW 4
   Example 4 JavaScript code
*/

console.log("Torres Output from HW 4 Example 4");

const values = [3, 11, 7, 2, 9, 10];
let sum = 0;
let min = values[0];
let max = values[0];

//this for loop iterates through all elements of the values array. 
for (let i = 0; i < values.length; i++) {
  //it adds every element of the array into 'sum'
  sum += values[i];
  //initializes min as the first element in the array and checks if the next element is less than the min.
  if (values[i] < min) {
    min = values[i];
  }
  //initializes max as the first element and checks if every iterated element is larger than max
  if (values[i] > max) {
    max = values[i];
  }
}

//displays the values after program has run
console.log(`Sum of all array values: ${sum}`);
console.log(`Minimum value: ${min}`);
console.log(`Maximum value: ${max}`);
