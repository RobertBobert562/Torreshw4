/* HW 4
   Example 2 JavaScript code
*/

console.log("Torres Output from HW 4 Example 2");

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
  }

  console.log("To use this function, simply call the function 'fahrenheitToCelsius' then input fahrenheit value as the functions arguement.");

  let f1 = 32;
  let c1 = fahrenheitToCelsius(f1);
  console.log(`${f1} degrees Fahrenheit = ${c1} degrees Celsius`);
  
  let f2 = 98.7;
  let c2 = fahrenheitToCelsius(f2);
  console.log(`Temperature of ${f2} Fahrenheit is equivalent to ${c2} degrees Celsius`);
  
  let f3 = 212;
  let c3 = fahrenheitToCelsius(f3);
  console.log(`Water boiling temperature is ${f3} Fahrenheit or ${c3} Celsius`);
  