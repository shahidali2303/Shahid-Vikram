console.log("connected");

// 1. varible
// 1st way to declare variable -> with "var" keyword
var hello = 3;
console.log(typeof hello);

// valid variable declaration
var _kjsd;
var Shksf;
var shksd;
var firstName = 3;
var SecondName;
// console.log(SecondName);
// var Seconf jskdfh -> not valid

// ES6 introduced new variable declaration
// 1- let
// 2- const

let interestRate = 8;
interestRate = 10;

console.log(interestRate);

const interestRate2 = 8;
// interestRate2 = 10;
console.log(interestRate2);

// 2 - datatypes
// 2.1 -> primitive type
// 2.2 -> Reference type

// primitive datatypes ->
// String
// Number
// Boolean
// undefined
// null

// Refrence Types ->
// Object
// Array
// Function

// examples of primitive dataTypes->

let user = "shahid"; // string
let age = 30; // number
let isApproved = true; // boolean
let userName; // undefined
let lastName = null; // null

lastName = "Ali"; // String

// 3. object {} -> collection of related data in format of key value pairs
const person = {
  name: "Vikram", //string
  age: 30,
  gender: "male",
}; // syntax

console.log(person);

// how to access values of an object
// 1-> dot operator
console.log(person.name);

// 2-> bracket operator
person["gender"]; // male

// 4. Array [] -> data structure that we use to store a list of itmes
const selectedColors = ["red", "pink", "blue"]; // syntax

console.log(selectedColors);
let abc = selectedColors[0];
console.log(abc);

// 5. Function
// syntax

// 1. way to declare ->
function functionName() {
  // return()
}

// 2. arrow function - 2nd way to declare a  function
const output = () => {
  // return()
};
