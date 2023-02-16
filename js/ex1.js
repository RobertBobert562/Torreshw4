/* HW 4
   Example 1 JavaScript code
*/

console.log("Torres Output from HW 4 Example 1");

function calculator() {
    const number1 = Number(prompt("Enter the first number: "));
    const number2 = Number(prompt("Enter the second number: "));
    const operator = prompt("Enter the mathematical operator (+, -, *, /): ");
  
    let result;
  
    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      case "/":
        result = number1 / number2;
        break;
      default:
        console.log("Invalid operator");
        return;
    }
  
    console.log(`${number1} ${operator} ${number2} = ${result}`);
  }
  
  calculator();
  