// console.log('Hello, World!')
// console.log('Test!')

// let name;
// let age;
// let name, age;

// age = name = "Viktor";

// const price = 100;

// let age = 26;
// name = "Kate";

// console.log("Log:", name, age);

/* let n = 9999999999999999n;

let b = NaN;

let c = Infinity; */

/*	console.log(n, b);

	console.log(1 / 0);

	console.log(99999999999999999 > Infinity); */

/* const t = "hello";
const l = "hello";
const p = `hello ${t} ${37 + 7}`;

console.log(p);

let yes = true;
let no = false;

let IsAdmin = false;

let none = null;

let age;

console.log(age);

console.log(typeof n);

console.log(isNaN(b));

console.log(isFinite(c)); */

/* const a = 1 + 3 + 7 - 5;
// const b = a + 2;

const b = `${a} Hello 10`;

const c = 1 + "";
const d = 1 - "10";

const e = a * d;
const f = 5 ** 4;
const g = 11 % 5; //Скільки разів 5 поміститься в 11, а те що залишилось і є відповідь

console.log(e); */

/* const personAge = 10;
const dogAge = 5;

console.log(personAge == dogAge);

//==================
NaN == NaN; // false

false == 0;
true == 1;
null == undefined;
1 == "1";
0 == -0; // }true
//==================

0 === "0"; // false

//======== Оператор нерівності ==========

5 != "4"; // true
5 != "5"; // false

//======================

5 !== "5"; // true
5 !== 5; // false

//======== Оператор менше ========

5 < "4"; // false
5 < 5; // false
5 < "6"; // true
//=======================

5 <= "4"; // false
5 <= 5; // true
5 <= "6"; // true

//======== Оператор більше, або дорівнює =========
// null стає 0, тоді як undefined стає NuN

null > 0; // false
null >= 0; // true

undefined > 0; // false
undefined >= 0; // false  */

/* const userRole = 1;
const adminRole = 2;

const productStockPrice = null;
const defaultProductPrice = 150;
const adminPrice = 0;

const productPrice =
  adminPrice ?? defaultProductPrice ?? productStockPrice ?? 100;

console.log("productPrice", productPrice);

const defaultUserName = null;
const ivanName = null;

const ivanRole = userRole;
const ivanBalance = 300;

// const isAdmin = ivanRole === adminRole;
// const canBuy = ivanBalance >= productPrice;

// const result1 = isAdmin === true;
// const result2 = canBuy === true;

// const isResultTrue = result1 === result2;

const result = ivanRole === adminRole && ivanBalance >= productPrice;
console.log(result);

const authorName = (ivanRole === adminRole && "Admin") || "User";
console.log("authorName", authorName);

console.log("productStockPrice", !!productStockPrice);

//=================

let productTitle = "Earphones";

productTitle ||= "Product name";

console.log("productTitle", productTitle);  */

//===============================================================

/* let a = 11;
let b = 12;

console.log(a, a.toString(2));
console.log(b, b.toString(2));

// let c = a & b;
// let c = a | b;
let c = a ^ b;
c = ~c;

console.log(c, c.toString(2)); */

//=========================================================

/* let freeTea = 0b00001;
freeTea <<= 1;

console.log(freeTea.toString(2));

freeTea <<= 1;

console.log(freeTea.toString(2));

freeTea <<= 1;

console.log(freeTea.toString(2));

freeTea <<= 1;

console.log(freeTea.toString(2));

console.log(freeTea === 0b10000); */

/* const a = 0b0001;
const b = 0b0010;
const c = 0b0100;

let settings = 0b0000;

settings |= a;
// 0001

settings |= b;
// 0011

isButtonOn = !((settings & c) === 0b0000);

console.log(isButtonOn); */

/* //==================================

// World

const productName = "Microphone";
const productDefault = "Product name";

const newProductName = "Microphone 3000";
const userRole = "admin";

const updateProductName =
  userRole === "admin" ? newProductName : productName || productDefault;

console.log(updateProductName);

// Ukraine
{
  let test = "test";
  test = productName;
  console.log(test);

  //Kyiv
  let info = "Hello, World!";
  info = `${info} ${test}`;
}

// USA
{
  const test2 = "Hello";
  console.log(test2);
}
*/

//==============================================

/* const CUSTOM_NAME = "My robot";
const MODE = 0;
const ROOM = "Living room";

const COMMAND = "Change name";

if (COMMAND === "Change name" && MODE !== 0) {
  const name = CUSTOM_NAME || "Robot vi345";
  console.log(`Start ${name}`);
}

if (MODE === 0) {
  console.log(`Robot is offline`);
}

if (COMMAND === "Work") {
  const room = ROOM;
  const mode = MODE;
  console.log(`Mode: ${mode}; Clean the room: ${room}`);
}  */

//============================================================

/* const login = "user";
const password = "2h5d9gs0";
const isAdmin = true;
const isLoggedin = true;

if (isLoggedin === true) {
  if (isAdmin) {
    console.log("Go to page /admin");
  } else if (login === "demo") {
    console.log("Go to page /demo");
  } else {
    console.log("Go to page /home");
  }
} else if (isLoggedin === false) {
  if (login && password) {
    console.log("Token:", 129887484949);

    if (isAdmin) {
      console.log("Go to page /admin");
    } else {
      console.log("Go to page /home");
    }
  }
} else if (isLoggedin === null) {
  console.log("Error");
}  */

//====================================================

/* const price = 100;
const useCashback = true;

let cashbackLevel = 4;
let cashbackAmount = null;
let totalPrice = null;

if (price < 100) {
  console.log(
    "The cashback system is avaible for products priced from UAH 100"
  );
  cashbackAmount = 0;
} else {
  if (cashbackLevel > 0) {
    cashbackAmount = price * (cashbackLevel * 0.01);
  }

  cashbackLevel++;

  if (cashbackLevel > 5) {
    cashbackLevel = 1;
  }

  if (useCashback > 0 && useCashback) {
    totalPrice = price - cashbackAmount;
  }
}

console.log(totalPrice); */

//======================================================

/* const buttonType = "main";

// if (buttonType === "primary") {
//   console.log("primary button");
// } else if (buttonType === "secondary") {
//   console.log("secondary button");
// } else if (buttonType === "basic") {
//   console.log("basic button");
// } else {
//   console.log("default button");
// }

switch (buttonType) {
  case "primary":
    console.log("primary button");
    break;

  case "secondary":
    console.log("secondary button");
    break;

  case "basic":
    console.log("basic button");
    break;

  default:
    console.log("default button");
}
*/

//=====================================================

/* let count = 0;
let isFast = true;

while (count < 5) {
  console.log("Hello, World!", count);

  if (isFast && count >= 3) {
    count = 5;
  } else {
    count++;
  }
} */

//=====================================================

/* const PRODUCT_AMOUNT = 6;
const DISCOUNT_ADDITIONAL = 2;

let discountAmount = 0;
let productCount = 0;

while (
  productCount < PRODUCT_AMOUNT &&
  DISCOUNT_ADDITIONAL <= 10 &&
  discountAmount <= 10
) {
  productCount++;

  if (productCount <= 0) {
    break;
  }

  if (productCount <= 3) {
    discountAmount += 1;
  } else if (productCount > 3 && productCount <= 5) {
    discountAmount += 1.5;
  } else if (productCount > 5 && productCount <= 8) {
    discountAmount += 2;
  } else if (productCount > 8) {
    discountAmount += 2.5;
  }

  if (DISCOUNT_ADDITIONAL) {
    discountAmount += DISCOUNT_ADDITIONAL;
  }

  console.log(productCount, discountAmount);
}

if (discountAmount > 10) {
  discountAmount = 10;
}

console.log("Discount", discountAmount, "%");
console.log("Discount for products", productCount);
console.log("Products without discount", PRODUCT_AMOUNT - productCount); */

/* let container = 5;
let storage = 20;
let car = 3;

do {
  car++;
  storage -= container;
  console.log(car, storage);
} while (car < 3);

if (car > 3) {
  console.log("We need a new car");
}
 */

//=======================================

/* let start = 40;
let goal = 100;
let step = 0;
let set = 8;
let rest = 10;

do {
  if (step === 0) {
    console.log("Start of training");
  }

  start++;
  step++;

  if (step === goal || start === goal) {
    console.log("End of training");
    break;
  }

  if (step % rest === 0) {
    console.log(`Take a break`);
    continue;
  }

  if (step % set === 0) {
    console.log(`You have complited ${step / set} set(s)`);
  }

  if (step === goal / 2) {
    console.log(`You are halfway there`);
  }

  console.log("Current progress", step);
} while (step < goal && start < goal);
*/

//=============================================

/* let q = 0;

main: for (let i = 0, j = 5; i <= j; i++) {
  console.log("Test", i, j);

  if (i === 3) {
    j++;
  }

  for (;;) {
    console.log("Q", q);

    q++;

    if (q >= i) {
      break main;
    }
  }
}
*/

//=============================================

/* let age = 25;
let hasExp = true;
let hasEdu = false;

form: {
  if (age >= 18) {
    if (hasExp) {
      if (hasEdu) {
        console.log("You're a perfect fit");
        break form;
      }

      if (!hasEdu) {
        console.log("You don't fit. No education");
      }
    }

    if (!hasExp) {
      console.log("You don't fit. No expierence");
    }
  }

  if (age < 18) {
    console.log("You don't fit. Young age");
  }
}
*/

//==============================================================

/* table: for (let i = 1; i < 10; i++) {
  if (i === 1) {
    continue;
  }

  console.log(`Numeric ${i} ====================`);
  for (let j = 1; j < 10; j++) {
    let result = i * j;

    if (j === 1) {
      continue;
    }

    console.log(`${i} * ${j} = ${result}`);
  }
} */

//=================================================================

/* function calcSpace(amount, unit) {
  if (unit !== undefined) {
    return `${amount * 4}${unit}`;
  } else {
    return "Error";
  }
}

console.log(calcSpace(5, "px")); */

//======================================

/* function calcSpace(amount, unit = "px") {
  return `${amount * 4}${unit}`;
}

console.log(calcSpace(5)); */

//=============================================================

/* function startTrackById(trackId) {
  /// get the song file and start it
}

function stopTrackById(trackId) {
  /// get the song file and pause it
  console.log(`get the song file with ID ${trackId} and pause it`);
}

function play(trackName, trackId) {
  console.log(`Start ${trackName}`);

  startTrackById(trackId);
}

function end(oldTrackName, newTrackName) {
  console.log(`End of ${oldTrackName}`);
  console.log(`Next track ${newTrackName}`);
}

function pauseStopByTrack(trackName, trackId) {
  //   return function pauseStop() {
  //     console.log(`The track ${originTrackName} is paused`);
  //   };

  let isPaused = null;
  return () => {
    if (isPaused == true) {
      return;
    }

    stopTrackById(trackId);
    console.log(`The track ${trackName} is paused`);
    isPaused = true;
  };
}

// const pauseStop123 = pauseStopByTrack("IT — Hello, World!");

// pauseStop123();

const pauseStop456 = pauseStopByTrack("IT — Console log", 10);

pauseStop456();
pauseStop456();
pauseStop456();

function pausePlay(currentTrackName) {
  console.log(`The track ${currentTrackName} is paused`);

  reloadDataTrack();

  play();
} */

// function reloadDataTrack(amount) {
//   if (amount <= 0) {
//     console.log("The data has been updated");
//   } else {
//     console.log("Re-updating");
//     // some code to update of the data
//     reloadDataTrack(amount - 1);
//   }
// }
// reloadDataTrack(5);

// const runCommand = function (command, errorFn) {
//   const result = command();

//   if (!result) {
//     return errorFn();
//   }
// };

// runCommand(
//   function () {
//     console.log("Launching the command");
//     return 1 - 1;
//   },
//   () => console.log("Error")
// );

//===================================================

/* const memoCalcSpace = (oldAmount = null, oldUnit = null, oldResult = null) => {
  return (amount, unit = "px") => {
    if (oldAmount === amount && unit === oldUnit) {
      console.log("Memo");
      return oldResult;
    }

    oldResult = `${amount * 4}${unit}`;
    oldAmount = amount;
    oldUnit = unit;

    return oldResult;
  };
};

const calcSpace = memoCalcSpace();

console.log(calcSpace(4));
console.log(calcSpace(4));

const getSpaceFromDesign = (componentName) => {
  switch (componentName) {
    case "button":
      return 4;
    case "card":
      return 3;
    default:
      return 2;
  }
};

const isMobile = true;

const amount = getSpaceFromDesign("button");
const amountMobile = isMobile ? amount / 2 : amount;
const amountInPx = calcSpace(amountMobile);

const calcSpaceFromDesign = (componentName) => {
  const result = getSpaceFromDesign(componentName);

  return calcSpace(isMobile ? result / 2 : result);
};

console.log("///////////////");

console.log(calcSpaceFromDesign("button")); */

//=============================

/* const code = "(5 + 5) % 5 === 0";

console.log(eval(code));

//=================================
console.log("===========================");

function calcScreenRation(w, h) {
  w = parseInt(w);
  h = parseInt(h);

  let result = w / h;

  if (isNaN(result)) {
    return "Error";
  } else if (!isFinite(result)) {
    return "is Infinity";
  } else {
    return result;
  }
}

console.log(calcScreenRation("1920px", "1000px"));

//=================================
console.log("===========================");

// const num = parseInt("0101", 2);
const num = parseFloat(1.561);

console.log(10.45 + num);

//=================================
console.log("===========================");

const domain = "it-brains.com.ua";

function redirectToPath(path) {
  //   path = encodeURIComponent(path);

  const link = encodeURI(`https://${domain}/${path}`);
  // go to the page
  console.log(link);

  return link;
}
const URI = "https://it-brains.com.ua/product/Product%20name/info";

function getUrl(urlInURI) {
  urlInURI = decodeURI(urlInURI);
  console.log(urlInURI);

  return urlInURI;
}

const path = "product/Product name/info";

const link = `https://${domain}/${path}`;

const link1 = redirectToPath(path); // URI

const link2 = getUrl(link1); // Decode URI

console.log(link === link2);
 */

//=================================================

/* const a = Number(10);
const b = 10;

console.log(a === b);  */

//=================================================
/* console.log("===========================");

const a = 0.1;
const b = 0.2;
const c = 0.3;
const d = a + b;

console.log(d - c < Number.EPSILON && c - d < Number.EPSILON);

//==========================================================
console.log("===========================");

console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

//=========================================================
console.log("===========================");

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

//=========================================================
console.log("==========================="); */

/* function reviewNumber(num) {
  if (isNaN(num)) {
    return console.log("is Not a Number", num);
  }

  if (!num && num !== 0) {
    return console.log("Bad number", num);
  } else if (!Number.isInteger(num)) {
    return console.log("Fractional number", num);
  }

  if (!Number.isSafeInteger(num)) {
    return console.log("Dangerous number", num);
  }
  return console.log(num);
}

reviewNumber(Number.MAX_SAFE_INTEGER + 1);
*/

//============================================================

/* const a1 = Number(12.46703);
const a2 = a1.toFixed(1);
const a3 = a2.charAt();

let num = 3.14159;
let num2 = 1500;

const num3 = a1.toExponential(2);

console.log(
  a2,
  "|",
  a3,
  "|",
  num.toPrecision(3),
  "|",
  parseFloat(num2.toPrecision(1)),
  "|",
  num3
);

//============================================

let example = (36.256).toString();
console.log(typeof example, example);
*/

//===============================================

/* let str = "Hello";

console.log(str.length);

//=========================================

console.log(String.fromCodePoint(128514)); // numerical codes Unicode (simbols)
console.log(String.fromCharCode(65));

let b = "♀";
console.log(b.codePointAt(0));

//============================================

console.log(String.raw`www.test.com/home/catalog/category/new`);
console.log(`www.test.com/home\ncatalog\category/new`);

//===================================================================

const str1 = "Hello,";
const str2 = "World!";
console.log(str1.concat(" ", str2));

//==================================================

console.log(str.includes("lo", 2));
console.log(str.includes("He", 2));
console.log(str.indexOf("o"));

const exa = "OlortEnglotdsh";

console.log(exa.lastIndexOf("lo"));
console.log(exa.startsWith("Ol"));
console.log(exa.endsWith("ot", 11));

console.log(exa.at(4));
console.log(exa.charAt(4));

//=================================

console.log(exa.padEnd(18, "End"));
console.log(exa.padStart(17, "."));

//=======================================

const mood = "Happy! ";

console.log(mood.repeat(3));

//=================================

console.log(exa.slice(-9, -3));

console.log(exa.substring(5, 11));

//=================================

const sentence = "Hello, World!";

console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

//====================================

const sentence1 = "       Hello, World!      ";

console.log(sentence1.trim(), "1");
console.log(sentence1.trimStart(), "1");
console.log(sentence1.trimEnd(), "1");
 */

/* const a = 1;
const b = 2;
const c = 3;

let list = [a, b, c];

console.log(list);

//===============================

const testArr = Array(5);

testArr[0] = "Start";
testArr[1] = " ";
testArr[2] = "Hello, World!";
testArr[3] = " ";
testArr[testArr.length] = 456;
testArr[10] = "End";
testArr[testArr.length] = 40;
testArr["test"] = "Test123";

delete testArr[3];

console.log(testArr);
console.log(testArr.length);
console.log(testArr[testArr.length - 1]);

//============================================
console.log("=======================");

const big = [[[1], [2, 3, 4, 5], [6]], [[b]], [[c]]];

console.log(big[0][1][2]);

//============================================
console.log("=======================");

const location = [
  [110, 220],
  [100, 200],
  [205, 105],
];

// for (const point of location) {
//   console.log(point);

//   for (const coordIndex in point) {
//     console.log(coordIndex);
//   }
// }

//=========================

// for (const pointIndex in location) {
//   console.log(location[pointIndex]);

//   for (const coordIndex in location[pointIndex]) {
//     console.log(location[pointIndex][coordIndex]);
//   }
// }

//==============================

// for (let i = 0; i < location.length; i++) {
//   console.log(location[i]);

//   for (let j = 0; j < location[i].length; j++) {
//     console.log(location[i][j]);
//   }
// }

//==================================

const l1 = [];
const l2 = [];

// console.log(l1 === l2);
console.log(l1.toString() === String(l2));

//=============================================
console.log("=======================");

let a1 = [0, 1, 2];
let b1 = a1;
a1[3] = 3;

let [...c1] = a1;

let d1 = [...a1];

// console.log(a1, b1, c1);

delete b1[1];

console.log(a1, b1, c1, d1);

//=============================================
console.log("=======================");

let array = [
  [1, 80],
  [2, 70],
  [3, 60],
];

let [q, ...rest] = array;

console.log(q, rest);

const [[x1, x2], y3, u4 = "test"] = rest;

console.log(u4, x1, x2);

//==============================================
console.log("=======================");

let r1 = null;
let r2 = [2, 3, 5];
let r3 = [...(r1 || [])];

console.log(r1, r3);

[r1, r2] = [r2, r1];

console.log(r1, r2);

//==============================================
console.log("=======================");

// function printFullName(name, surname, lastname) {
//   return `${name}, ${surname}, ${lastname}`;
// }
// console.log(printFullName("Stepan", "Stepanenko", "Stepanov"));

function printFullName([name, surname, lastname, ...arg]) {
  //   console.log(arg);
  //   return arg.toString();
  return `${name}, ${surname}, ${lastname}, ${
    arg.length ? `(${arg.toString()})` : ""
  }`;
}
console.log(
  printFullName(["Stepan", "Stepanenko", "Stepanov", "Admin", " 19"])
);
*/

/* //==============================================
console.log("=======================");

function sumAllNum(...nums) {
  let sum = 0;

  for (const n of nums) {
    sum += n;
  }

  return [sum, nums.length];
}

const [sum, numLength] = sumAllNum(
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16
);

console.log(sum, numLength); 
*/

//=================================

/* const key = "name";

const a = {
  test: 100,
  ["text"]: "HelloWorld",
  [key]: "Pavlo",

  info: {
    name: "Evgen",
    surname: "Krok",
    age: 19,
  },
};

console.log(a.test, a.text, a[key], a.info.surname);
*/

//=====================================

/* let obj = {
  name: "Evgen",
  surname: "Krok",
  age: 19,
};

delete obj.surname;

console.log(obj);
*/

//==================================
/* console.log("================================");

const role = {
  value: "admin",
  status: 3,
};

const person = {
  name: "Pavlo",
  age: 25,
  occupation: "Software developer",

  //   info: role,
  ...role,

  address: {
    city: "Kyiv",
    street: "Shevchenko street",
    houseNumber: 10,
  },

  getAddress: function () {
    // return "Client's address";
    return this.address;
  },
};

console.log(person);
// console.log("surname" in person);
console.log(person.getAddress());

console.log("================================");

const person2 = { ...person };
delete person.address;

console.log(person.getAddress()); */

// const {
//   age,
//   name,
//   address: { city, street, zipcode = 41023 },
//   ...rest
// } = person;
// console.log(age, name, city, street, zipcode);

//=============

/* function getAddress({
  address: { city, street = "Not specified", houseNumber, zipcode = 104010 } = {
    city: "Kyiv",
    street: "Not specified",
    houseNumber: "Not specified",
    zipcode: "Not specified",
  },
}) {
  return `Your address: ${city}, ${street}, ${houseNumber}, ${zipcode}`;
}

// const test = getAddress(person);
const test = getAddress({ city: "Kyiv" });
console.log(test); */

/* function getAddress({ address }) {
  if (address) {
    const {
      city,
      street = "Not specified",
      houseNumber,
      zipcode = 104010,
    } = address;

    return `Your address: ${city}, ${street}, ${houseNumber}, ${zipcode}`;
  }

  return `No data`;
}

const test = getAddress({ city: "Kyiv" });
console.log(test);
*/

// for (const key in person) {
//   const item = person[key];
//   //   console.log(key);

//   if (typeof person[key] === "object") {
//     for (const key2 in item) {
//       console.log(item[key2]);
//     }
//   } else {
//     console.log(item);
//   }
// }

//======================================================================
/* Number.prototype.toOwnString = function () {
  console.log(this);

  return `Numeric ${this}`;
};

const b = 1;

const c = b.toOwnString();
console.log(c);

//====================================

function Test() {
  this.world = "World!";
  return "Hello " + this.world;
}

console.log(Test());
*/

//==========================================

/* const phoneBook = {
  0: 1,
  olga: "+380674879621",
};

//......

function addToPhoneBook(phone, id) {
  const key = Symbol(id + phoneBook[0]);
  phoneBook[key] = phone;
  phoneBook[0]++;
}

addToPhoneBook("+380992445859", "olga");

//.........

addToPhoneBook("+380504517794", "olga");

console.log(phoneBook); 
*/

/* const user = {
	name: "Olga",
	id: 43150,
}

const phoneBook = {
  0: 1,
  olga: "+380674879621",
};

//......

function addToPhoneBook(phone, id) {
  const key = Symbol(id);
  phoneBook[key] = phone;
  return key;
}

const olga1 = addToPhoneBook("+380992445859", "olgaone@gmail.com");

//.........

const olga2 = addToPhoneBook("+380504517794", "olyatwo@gmail.com");

console.log(phoneBook[olga1], olga2.description); */

/* const user = {
  name: "Olga",
  id: 43150,
  bookId: null,

  getPhone(book) {
    return book[this.bookId];
  },
};

const phoneBook = {
  me: "+380674879621",
  name: "Phone Book",
};

//......

function addToPhoneBook(phone, user) {
  const symId = Symbol.for(user.id);
  phoneBook[symId] = phone;
  user.bookId = symId;
}

addToPhoneBook("+380992445859", user);

console.log(user.getPhone(phoneBook));

console.log(phoneBook);

///===

const symId = user.bookId;
console.log(Symbol.keyFor(symId));

for (const key in phoneBook) {
  console.log(key);
}
*/

let range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    this.current = this.from;

    return this;
  },
  next() {
    return this.current <= this.to
      ? { done: false, value: this.current++ }
      : { done: true };
    // if (this.curent <= this.to) {
    //   return { done: false, value: this.current++ };
    // } else {
    //   return { done: true };
    // }
  },
};

// for (let num of range) {
//   console.log(num);
// }
const iterator = range[Symbol.iterator]();

do {
  console.log(iterator.current);
  result = iterator.next();
} while (!result.done);
