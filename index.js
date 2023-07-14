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

/* const arr = [1, 2, 3, 4, 5, 6, 5, 4, 2, 3, 1, 6];

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
*/

//=========================================================================

/* const button = new Map([
  ["color", "blue"],
  ["size", "32px"],
]);

console.log(button);

//===

const obj = {
  color: "green",
  size: 32 + "px",
};

const button2 = new Map(Object.entries(obj));

console.log(button2);

//===

const set = new Set(["red", "32px"]);

const button3 = new Map(set.entries());
console.log(button3);

//===

const set2 = new Set(button.values());

console.log(set2);
*/
//==================================

/* const button = new Map([
  ["color", "blue"],
  ["size", "32px"],
  ["number", 311],
  [123635],
]);

for (const [key, value] of button) {
  console.log(key, value);
}

// for (const value in Object.fromEntries(button.entries())) {
//   console.log(value);
// }

button.forEach((value, key, map) => console.log(value, key, map));

//===

button.set("word", "Hello");

console.log(button.size);
console.log(button);
console.log(button.get("word"));
console.log(button.delete(123635));
console.log(button);

console.log(button.has("word"));

// button.clear()
*/

//==========================

const LANG_LIST = {
  UA: "uk-UA",
  EA: "ea-US",
};

const activeLang = LANG_LIST.EA;

const product = {
  price: 100,
  amount: 3,
  info: new Map([
    [
      LANG_LIST.UA,
      {
        title: "Заголовок",
        info: "Інформація",
      },
    ],
    [
      LANG_LIST.EA,
      {
        title: "Title",
        info: "Information",
      },
    ],
  ]),
};

const info = product.info.get(activeLang);
console.log(info);

console.log(product.info.has(activeLang));

//============================================

const user1 = {
  id: 5463,
  name: "Pavlo",
};

const user2 = {
  id: 7654,
  name: "Olga",
};

const user3 = {
  id: 2764,
  name: "Hanna",
};

const product1 = {
  id: 89505,
  name: "Samsung",
};

const product2 = {
  id: 45689,
  name: "Apple",
};

// const userProduct = new Map();

// userProduct.set(user1, product1).set(user2, product2);
// console.log(userProduct);
// console.log(userProduct.has(user1));
// console.log(userProduct.get(user1));

const productClientList = new Map([[product1, new Set()]]);

productClientList.set(product1, productClientList.get(product1).add(user1));

console.log(productClientList);

productClientList.set(product1, productClientList.get(product1).add(user3));

console.log(productClientList);

//==

const has = productClientList.get(product1).has(user1);

console.log(has);
