/* const counterLabel = "Timer";

console.time(counterLabel);
console.count(counterLabel);

//=====

{
  let a = 5;

  a = 10;

  console.error("Error: variable 'a' must be 5");
  //   console.expection("Error");

  console.info("Information");

  console.warn("Warning! Potential problems");

  console.debug("For testing and fixing bugs");
}
//=========
console.timeLog(counterLabel);

console.count(counterLabel);
//=========
console.group("Group 1");

console.log("Test");
console.debug("Test 2");

console.groupCollapsed("Group 2");

console.warn("Test 3");

console.groupEnd();

console.groupEnd();

//========

console.timeEnd(counterLabel);

console.countReset(counterLabel);

console.count(counterLabel);

*/

//=======================================================================

// const test1 = () => console.trace("Hello!");

// const test2 = () => test1();
// const test3 = () => test2();

// test3();
//=======================================================================

// const data = [
//   { name: "John", age: 25, city: "New York" },
//   { name: "Alice", age: 30, city: "London" },
// ];

// // console.table(data);
// console.table(data, ["name", "age"]);

//===========================================================

const a = 5;
const b = 10;

const result = a > b;

console.assert(result, "Info");
// if (a > b) {
//   //....
// } else {
//   console.warn("Info");
// }

//====

// console.clear(); // clear terminal

//===========

console.log(
  "%cHello World",
  "color: yellow; background-color: blue; font-size: 50px"
);
