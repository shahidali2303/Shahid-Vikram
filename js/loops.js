//loops
// 1.  for loop
// syntax
// for(initialize;condition; increment or decrement){

// }

//print "Good MOrning" 10 times
let i = 1;
for (i; i <= 10; i++) {
  //
  console.log("Good Morning!");
}
// here
// document.getElementById("root").innerHTML("hi");

// 2. do while loop
let a = 8;
// do {
//   console.log("Hello");
//   a++;
// } while (a < 7);
// {
//   // this works
// }

// 3. while loop
let b = 1;
while (b <= 10) {
  // this works
  if (b % 2 === 0) {
    console.log("Even->", b);
  }
  b++;
}

// 4. infinite loop

// 5. for of -> array

// syntax
// for(initialize of array){
//     // this works
// }
const colors = ["red", "pink", "blue"];
for (let index of colors) {
  console.log(index);
}

// 6. for in -> objects
// syntax
// for(initialize in object){
// this works
// }

const cars = {
  name: colors,
  age: 58,
  model: 1987,
  accelerate: function () {
    console.log("move forward");
  },
};
for (let key in cars) {
  console.log(key, cars[key]);
}
// console.log(cars.name[1]);
