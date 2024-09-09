//importing from modules
import { myArray, triangleArea } from "./script2.js";
import areaOfCircle from "./script3.js";
//Variable Declaration
const amount = 25;
const buyer = "Gerald";
const item = "Garri";
//Template literals
const sentES5 = buyer + " bought " + item + " for " + "$" + amount;

const sentES6 = `${buyer} bought ${item} for $${amount}`;
console.log(sentES5);
console.log(sentES6);

//Tenary operators
if (amount < 20) {
  console.log("Product is cheap");
} else {
  console.log("Product is Expensive");
}

amount > 20
  ? console.log("Product is cheap")
  : console.log("Product is expensive");

//Function
function sumNumES5(a, b) {
  return a + b;
}

const sumNumES6 = (a, b) => {
  return a + b;
};
console.log(sumNumES5(2, 4));
console.log(sumNumES6(2, 3));

console.log(triangleArea(23, 15));
console.log(myArray[1]);
console.log(areaOfCircle(10));
//Object destructuring

const car = {
  name: "lamba",
  price: "$200",
  color: "red",
  year: "2023",
  model: "LM235",
};
//ES5

// const name = car.name;
// const price = car.price;
// const color = car.color;
// const year = car.year;
// const model = car.model;

//ES6
const { name, color, year, model, price } = car;

console.log(
  `${name} with model no ${model} is a car manufactured in ${year}. The ${color} color is the most purchased one under these price ${price}`
);

//Array destructuring

const [food1, food2, food3] = ["garri", "amala", "semo"];
console.log(food1, food2, food3);
//destructuring and spreading

const person = {
  personName: "Gabriel",
  className: 2,
  height: 1.6,
  complexion: "dark",
};
const { personName, className, ...others } = person;
console.log(others);

//spreading
let array1 = [1, 5, 7];
let array2 = [10, 20, 30];

array1 = [...array1, ...array2];
console.log(array1);
const combineObj = { ...car, ...person };
console.log(combineObj);

//RECURSION
//5! = 5*4*3*2*1

function calculateFactorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * calculateFactorial(num - 1);
}
console.log(calculateFactorial(6));

calculateFactorial(6);
