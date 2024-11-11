// array
// 1. insert values in array

const numbers = [3, 4];

// beginning => unshift()
numbers.unshift(1, 2); //4

// end => push()
numbers.push(5, 6);

// in between anywhere
// [1,2,3,4,5,6]

numbers.splice(2, 0, "a", "b");
console.log(numbers);

// 2. remove elements from an array
const count = [1, 2, 3, 4, 5, 6, 7, 8];

// beginning
count.shift(); // deleted elemnts

// end
count.pop();

// in between anywhere
console.log(count);

count.splice(2, 2);
console.log(count);

// 3. finding elements

const num = [1, 2, 3, 1, 4];
const usernames = ["shahid", "vikram"];
// find elements

console.log(num.indexOf(1)); // return indexof element from the starting of the array
console.log(num.indexOf(1, 2)); // find index of value = 1, from the given stating index value , here it is 2
// indexOf(value-want-to-search, from the index the search starts)

console.log(num.lastIndexOf(1));
console.log(num.indexOf(5)); // this gives "-1"
console.log(num.includes(4)); // true

console.log(usernames.includes("afbjsdjf"));

// 4. empty an array
let abc = [1, 2, 3, 4];

// solution 1
abc = [];

// solution 2
abc.length = 0;

// solution 3

abc.splice(0, abc.length);

// solution 4
while (abc.length > 0) {
  abc.pop();
}
console.log(abc);

// 5. combining 2 array

const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
console.log(combined);

const result = combined.slice(2, 4);
console.log(result);

// spread operator
const joinedArray = [...first, ...second];

//conversions
// 1. array to string
console.log(joinedArray.join(","));

// 2. string to array
const message = "this, is, a, string";
const parts = message.split(",");
console.log(parts);

// 6. filtering an array based on criteria or condition
const colors = [1, 2, 3, -2];

const filtered = colors.filter(function (num) {
  return num >= 0; // [1,2,3]
});
console.log(filtered);
[1, 2, 3];

// 7. mapping an array
const items = filtered.map(function (n) {
  return `hello ${n}`;
});
console.log(items);
