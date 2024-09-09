// function fibbonacci(n) {
//   const fib = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fib[i] = fib[i - 1] + fib[i - 2];
//   }
//   return fib;
// }
// console.log(fibbonacci(1));
// console.log(fibbonacci(2));
// console.log(fibbonacci(3));
// console.log(fibbonacci(7));
// console.log(fibbonacci(5));

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result + i;
//   }
//   return result;
// }
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));

// function primeNumber(num) {
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(primeNumber(3));
// console.log(primeNumber(4));
// console.log(primeNumber(5));
// console.log(primeNumber(9));

// function powerOfTwo(n) {
//   if ((n = n % 2 === 0)) {
//     return "true";
//   }
//   return "false";
// }

// console.log(powerOfTwo(5));

// function bitwisePower(n) {
//   if (n < 1) {
//     return false;
//   }
//   return (n & (n - 1)) === 0;
// }
// console.log(bitwisePower(3));

//recursion

// function linearSearch(arr, t) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === t) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(linearSearch([1, 2, 4, 3, 10], 6));

// function binarySearch(arr, target) {
//   let leftIndex = 0;
//   let rightIndex = arr.length - 1;
//   while (leftIndex <= rightIndex) {
//     let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middleIndex]) {
//       return middleIndex;
//     }
//     if (target < arr[middleIndex]) {
//       rightIndex = middleIndex - 1;
//     } else {
//       leftIndex = middleIndex + 1;
//     }
//   }
//   return -1;
// }
// console.log(binarySearch([-5, 2, 4, 6, 10], 10));

//Recursive binary scearch

// function recursiveBinarySearch(arr, target) {
//   return search(arr, target, 0, arr.length - 1);
// }
// function search(arr, target, leftIndex, rightIndex) {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }
//   let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
//   if (target === arr[middleIndex]) {
//     return middleIndex;
//   }
//   if (target < arr[middleIndex]) {
//     return search(arr, target, leftIndex, middleIndex - 1);
//   } else {
//     return search(arr, target, middleIndex + 1, rightIndex);
//   }
// }

// console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));

//bubble sort

// function bubbleSort(arr) {
//   let swapped;

//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swapped = true;
//       }
//     }
//   } while (swapped);
// }
// const arr = [5, 3, 8, 4, 2];
// bubbleSort(arr);
// console.log(arr);

//insertion sort

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let current = arr[i];
//     let j = i - 1;
//     while (j >= 0 && current < arr[j]) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = current;
//   }
// }

//Quick sort
// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let pivot = arr[arr.length - 1];
//   left = [];
//   right = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return [...quickSort(left), pivot, ...quickSort(right)];
// }
// const arr = [5, 3, 8, 4, 2];
// console.log(quickSort(arr));

//Merge sort
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
const arr = [5, 3, 8, 4, 2];
console.log(mergeSort(arr));

//ES6

/*num1
let getValues = (a = 10, b = a * 0.1) => {
  console.log(a + b);
};
getValues(20, 30);
getValues();
getValues(30);*/

/*num2
//rest is declared in the function while spread is used in the function call
let displayColors = function (message, ...colors) {
  console.log(message);
  for (let i in colors) {
    console.log(colors[i]);
  }
};
let message = "List of colors";
let colorArray = ["Red", "Blue", "Green"];
displayColors(message, ...colorArray);*/

//object literals
// let firstName = "John";
// let lastName = "Doe";
// let person = {
//   firstName,
//   lastName,
// };
// function createPerson(firstName, lastName, age) {
//   let fullName = firstName + " " + lastName;
//   return {
//     firstName,
//     lastName,
//     fullName,
//     isSenior() {
//       return age > 60;
//     },
//   };
// }
// let p = createPerson("John", "Doe", 42);
// console.log(p.fullName + " is a senior: " + p.isSenior());

//destructuring
// let employee = ["sunny", "uche", "jane"];
// let [name1, name2, name3] = employee;
