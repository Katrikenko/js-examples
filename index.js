/* const userIdList = new Set([56237, 25478, 92274, 15436]);
// console.log(userIdList);

// for (const value of userIdList) {
//   console.log(value);
// }

// userIdList.forEach((value, value2, set) => console.log(value));

// console.log(userIdList.size);

// userIdList.add(78954);

// userIdList.add(65287);
// console.log(userIdList);
// console.log(userIdList.size);

// const result = userIdList.delete(65287);
// console.log(userIdList);
// console.log(userIdList.size);

// // console.log(result);

//===

// console.log(userIdList.has(65287));
// console.log(userIdList.has(56237));

//===============

// userIdList.clear();
// console.log(userIdList);

//======

// const key = userIdList.keys();
// console.log(key);

// const value = userIdList.values();
// console.log(value);

//=====================

const entry = userIdList.entries();

const obj = Object.fromEntries(entry);

console.log(obj);

//=====================

const valueList = userIdList.values();

const arr = Array.from(valueList);

console.log(arr);
*/
//============================================

// const arr = [1, 2, 3, 4, 5, 6, 5, 4, 2, 3, 1, 6];

// const set = new Set(arr);

// const arr2 = [...set];

// console.log(arr2);

//=====

const arr = [1, 2, 3, 4, 5, 6, 5, 4, 2, 3, 1, 6];

const set = new Set(arr);

const arr2 = Array.from(set.values());

console.log(arr2);

//========================================

const categoryList = new Set();

function addCategory(category) {
  if (categoryList.has(category)) {
    console.log("The category already exist");
    return false;
  } else {
    categoryList.add(category);
    return true;
  }
}

console.log(addCategory("Sport"));
console.log(addCategory("Sport"));
console.log(addCategory("Food"));

//==================================================================

const students = [
  { id: 1, name: "John", course: "Math" },
  { id: 2, name: "Jane", course: "Science" },
  { id: 3, name: "Adam", course: "Math" },
  { id: 4, name: "Eve", course: "English" },
  { id: 5, name: "Kate", course: "Science" },
];

const course = students.map((student) => student.course);

console.log(course);

const courseList = new Set(course);

console.log(Array.from(courseList));
