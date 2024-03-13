console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}

// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
return `Hello, ${name}!`;
}

// Remember to call the function to test
console.log(helloName('janet'));
 
// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let answer = firstNumber + secondNumber;
  return answer; // return firstNumber + secondNumber;
}

console.log('This is the addNumbers function with 4, 6', addNumbers(4,6));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  let answer = num1 * num2 * num3 
  return answer;
}

console.log('This is the multiplyThree fuction with 3, 8, 4', multiplyThree(3,8,4));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else{
  return false;
}
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive test with 4', isPositive(4));
console.log('isPositive test with -24', isPositive(-24));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

function getLast(array) {
let last = array[array.length-1];
return last;

}

console.log('the array is [1,2,3,6], the last value of the array is', getLast([1,2,3,6]),);
console.log('the array is [300,4,79,355], the last value of the array is', getLast([300,4,79,355]),);
console.log('the array is empty', getLast([]));


// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
//for integer of array 
//if integer === value 
//return true
// else return false 

function find(value, array){
  for(let int of array){
  if(int === value){
    return true;
    }
  }
  return false;
}

console.log('the searched value is 3, the array is [1,4,5,3]', find(3,[1,4,5,3]));
console.log('the searched value is 3094, the array is [1,4,5,3]', find(3,[2,4, 3094,3]));
console.log('the searched value is 66, the array is [1,4,5,3]', find(3,[13,88,76,66]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if(letter === string.charAt(0)){
    return true;
  }
  return false;
}

console.log('this is a test for isFirstLetter function the letter is a and the word is angel', isFirstLetter('a', 'angle'));
console.log('this is a test for isFirstLetter function the letter is b and the word is cat', isFirstLetter('b', 'cat'));
console.log('this is a test for isFirstLetter function the letter is b and the word is cab', isFirstLetter('b', 'cab'));


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for(let integer of array){
    sum = integer + integer
  } 
  // TODO: return the sum
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
