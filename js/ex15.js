const foods = ["Pizza", "Burger", "Hot Dog", "Taco"];

console.log(foods.length);
console.log(foods[2]);
console.log(foods[4]);

foods.push("Lasagna");
console.log(foods[4]);

foods.unshift("Chicken");
console.log(foods[0]);

foods.pop();

foods.splice(1,3);
console.log(foods.length);
console.log(foods[1]);
