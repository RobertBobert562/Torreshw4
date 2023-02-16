/* HW 4
   Example 3 JavaScript code
*/

console.log("Torres Output from HW 4 Example 3");

//the line below gets circle radius 'r' as input using a prompt
const r = Number(prompt("Enter the circle radius:"));

//circle object is below
//circumfrence and area are methods(functions) of circle
const circle = {
  radius: r,
  circumference: function() {
    return 2 * Math.PI * this.radius;
  },
  area: function() {
    return Math.PI * this.radius ** 2;
  }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
