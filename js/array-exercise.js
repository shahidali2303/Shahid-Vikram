// array exercise
// 1. Find the maximum and minimum number from a given range we input
// and store it in array

const range = arrayFromNumbers(-10, 5);
console.log(range);

function arrayFromNumbers(min, max) {
  // code
  let arr = [];
  for (let i = min; i <= max; i++) {
    // here min= -10
    arr.push(i);
  }
  return arr;
}

// 2. filter array

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// give me the output according to the condition below
// 1. all movies in year 2018
// 2. sort them by rating
// 3. reverse the order [] bac, cab
// 4. pick the title
const movies2 = movies
  .filter((m) => m.year === 2018)
  .sort((a, b) => a.rating - b.rating) //
  .reverse()
  .map((m) => m.title);

console.log(movies2);
