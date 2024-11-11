// javascript operators
// 1. assignment -> =
let hello = 82; //number

// 2. aritmatic operator
let x = 4;
let y = 2;

console.log(x + y); // addition
console.log(x - y); // addition
console.log(x * y); // addition
console.log(x / y); // addition
console.log(x % y); // remainder or modulus
console.log(x ** y); // x to the power y -> 20*10

// increment or decrement operators
let a = 9;
let b = 5;
// pre increment and post increment
console.log(a++); //9 post increment
// 10
console.log("Result->", ++a); // 11 preincremnt
//11
function first() {
  a++; // 11
  return a; //12
}
function second() {}
console.log(first());

// 3. comparison
let q = 1;

// relational operators
console.log(q > 1); // false
console.log(q >= 1); // True
console.log(q < 1); // False
console.log(q <= 1); // True

// equality operator
// (===) => strictly equal to, checks the type and value both
console.log(q === 1); // true

// loose equility operator => (==) doesnt check the type
console.log(1 == 1); // true
console.log("1" == 1); // true
console.log(1 == "1"); // true
console.log(true == 1); // true

// 4. logical
// logical and => &&

console.log(true && true); // true
console.log(0 && "false"); //0

// logical OR => ||
console.log(true || true); // true
console.log(false || true); // true

// 5. Conditional or Ternary operator
let points = 110;
//
// (condition)  ? "if the condition true then this execute"
//   : "condition false then this part executes";
let result = points > 100 ? "gold" : "silver";
console.log(result); // gold
