// condition
// 1. if else
// syntax
// let hour = parseInt(prompt("Enter a number"));
let hour = 6;
if (hour >= 6 && hour < 12) {
  console.log("Good Morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good Afternoon!");
} else {
  console.log("Good Night!");
}

// 2. switch case
//syntax
// let role = prompt("Enter ");
let role = "guest";
switch (role) {
  case "guest":
    console.log("Guest User");
    break;
  case "moderator":
    console.log("Moderator");
    break;
  default:
    console.log("Unnown User");
}

// break & continue
