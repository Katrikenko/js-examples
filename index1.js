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
/* 
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
*/

//==================================

// console.log(Array.from("Hello World!"));
// console.log(
//   Array.from({ 0: "Hello", 1: "World", 2: "!!!", length: 3 }, (elem, index) => {
//     console.log(elem, index);

//     return elem;
//   })
// );

//=================================

/* const obj = {
  0: "Hello",
  1: "World",
  2: "!!!",
  length: 3,
  prefix: "():",
};

const arr = Array.from(
  obj,
  function (elem, index) {
    console.log(this.length);
    console.log(elem, index);
    return `${this.prefix} ${elem}`;
  },
  obj
);

console.log(Array.isArray(arr));
*/

// let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const arr2 = [-4, 4, 4.2, 4.5, 4.7, 5, 6, 5, 7];

// console.log(Array.of(arr1, arr2));
// console.log(Array.of(...arr1, ...arr2));

// console.log(arr1.at(1));

// console.log(arr2.pop());

// console.log(-(arr1.length - arr1.push(10, 20, 30)));

// console.log(arr1, arr2);

// console.log(Array.of(...arr1, ...arr2));

// console.log(arr2.shift());
// console.log(arr2);

// console.log(arr2.unshift(0, 4, 4.5));
// console.log(arr2);

// console.log(arr1.includes(2));
// console.log(arr1.indexOf(4));
// console.log(arr2.lastIndexOf(5));

// const arr3 = [...arr1, ...arr2];
// const arr3 = arr1.concat(arr2);

// console.log(arr3);

//================================

/* console.log(arr1);

arr1.copyWithin(0, 4, 7);

console.log(arr1);

//=============================

console.log(arr2);

arr2.fill("6", 5, 7);

console.log(arr2);

arr2.reverse();

console.log(arr2);

//==============================
*/

/* const filterFn = (value, index, array) => value % 2 === 0;

const filteredArr = arr1.filter(filterFn);

// console.log(filteredArr);

const sortFn = (elem1, elem2) =>
  // -(elem1 - elem2);
  {
    let result = elem1 - elem2;

    if (elem1 % 2 === 0) {
      result += 10;
    }
    // return elem1 < elem2 ? 1 : -1;

    // let result = elem1 - elem2;
    return result;
  };

const sortedArr = [20, 1, 2, 10, 3, 4, 30, 40].sort(sortFn);
console.log(sortedArr);
*/

//=====================================================================

/* const sortFn = (elem1, elem2) => {
  if (elem1 % 2 === elem2 % 2) {
    return 0;
  } else if (elem1 % 2 !== 0 && elem2 % 2 === 0) {
    return 1;
  } else {
    return -1;
  }
};

const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].sort(
  sortFn
);
console.log(sortedArr);

console.log(["Arabic", "Info", "Zero", "City", "Aar"].sort());
*/

///========================================================================

// console.log(arr2.every((elem, index, array) => elem >= 0));
// console.log(arr2.some((elem, index, array) => elem >= 0));

//==============================================================

// const userList = [
//   { id: 68, name: "Lina", age: 27, balance: 10200 },
//   { id: 1, name: "Dima", age: 19, balance: 0 },
//   { id: 45, name: "Pavlo", age: 32, balance: 300 },
// ];

// const result = userList.map((user, index, array) => {
//   user.balanceLimit = 1000 - user.balance;

//   if (user.balanceLimit < 0) {
//     user.balanceLimit = 0;
//   }

//   //   return user.name;
//   return user;
// });

// // console.log(result.join(", "));
// console.log(result);
//=======================================

// const flatArray = [
//   [
//     [100, 105],
//     [200, 215],
//   ],
//   [
//     [
//       [220, 230],
//       [430, 455],
//     ],
//   ],
// ];

// console.log(flatArray.flat(3));

//======
// const flatArray = [
//   [100, 105],
//   [200, 215],
//   [220, 230],
//   [430, 455],
// ];
// // console.log(flatArray.map((el) => [...el, el[0] - el[1]]));
// console.log(flatArray.flatMap((el) => [...el, el[0] - el[1]]));

//============

/* const flatArray = [
  [
    [100, 105],
    [200, 215],
  ],
  [
    [220, 230],
    [430, 455],
  ],
];

// const result = flatArray.map((el) => {
//   //   console.log(el);

//   return el.map((it) => {
//     // console.log(it);

//     return it[0] - it[1];
//   });
// });

// console.log(result);

//==================

// const result = flatArray.map((el) => {
//   const newArr = el.map((it) => {
//     return it[0] - it[1];
//   });
//   console.log(newArr);

//   return newArr;
// });
//==================

const result = flatArray.flatMap((el) => {
  return el.map((it) => {
    return it[0] - it[1];
  });
});
console.log(result);

result.forEach((elem, index, array) => {
  console.log(elem);
});  */

//===============

// const result = userList.reduce((num, user, userIndex, array) => {
//   console.log(num, user.age);

//   return user.age > num ? user.age : num;
// }, 1);

// console.log(result);
// //=====

// const result = userList.reduceRight((num, user, userIndex, array) => {
//   console.log(num, user.age);

//   return user.age > num ? user.age : num;
// }, 1);

// console.log(result);

// //=====

// const totalBalance = userList.reduce((num, user) => num + user.balance, 0);

// console.log(totalBalance);
//==========================

// let minAge = 20;

// const userBigAge = userList.sort((user1, user2) => {
//   return user2.age - user1.age;
// });

// const userBigAge = userList.find(({ age }) => age >= 30);
// const userBigAge = userList.findIndex(({ age }) => age >= minAge);
// const userBigAge = userList.findLast(({ age }) => age >= minAge);
// const userBigAge = userList.findLastIndex(({ age }) => age >= minAge);

// console.log(userBigAge);

//=========================================================================

// const iter = userList.keys();
// const iter = userList.values();

// console.log(iter);

// const result = iter.next();
// console.log(result);

// for (const elem of iter) {
//   console.log(elem);
// }

//================================

// const arr = [
//   "Apple",
//   "Carrot",
//   "Key",
//   "Lamp",
//   "Pensil",
//   "Watermelon",
//   "Strawberry",
// ];

// const addFoodArr = ["Lemon", "Broccoli", "Cherry"];

// console.log(arr.join(", "));

// const arrSmall = arr.slice(2, 5);

// const arrSmall = [...arr].splice(2, 3, ...addFoodArr);
// const arrSmall = arr.splice(2, 3, "Tea", "Cheese", "Bread", ...addFoodArr);

// console.log(arrSmall);
// console.log(arr);

//=======================================================================================

/* const article = {
  info: {
    id: 143659,
    title: "My title",
  },

  description: "This is info about article",
  categoryId: 1423,
  likeAmount: 443,
};

const ARTICLE_FIELD = {
  id: "Article ID",
  title: "Title of the article",
};

articlePhoto = {
  photoUrl: "...url",
  photoId: 123,
  photoType: "big",
};

articleCommentList = {
  list: [{ id: 4232, user: "Ivan", message: "Cool content" }],
};

Object.assign(article, articlePhoto, articleCommentList);

// console.log(article);
// console.log(Object.entries(article));

const formList = Object.entries(article.info);

const formListLayout = formList.map(([key, value]) => {
  return [ARTICLE_FIELD[key], value];
});

console.log(formListLayout);

//===

const objArr = [
  ["id", 356],
  ["title", "My product name"],
  ["price", 1320],
];

console.log(Object.fromEntries(objArr));

console.log(article.hasOwnProperty("description"));

console.log(article.propertyIsEnumerable("id"));

// Object.freeze(article);
// article.title = "Hello";
// console.log(article.hasOwnProperty("title"));

// console.log(Object.isFrozen(article));

//===

// Object.preventExtensions(article);
// article.test = "Hello";
// console.log(article.test);

// console.log(Object.isExtensible(article));

//===

Object.seal(article);
delete article.id;
console.log(article.id);

console.log(Object.isSealed(article));

//==

console.log(Object.keys(article));
console.log(Object.values(article));

*/

//==========================================================

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

/* const LANG_LIST = {
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
*/

//========================================================================

// const roleField = "roleName";

// const data = {
//   id: 1024,
//   login: "user459",
//   password: "12345qwerty",
//   [roleField]: "Admin",
//   go() {
//     console.log("go");
//   },
//   test1: {
//     test2: 123,
//   },
// };

// const jsonData = JSON.stringify(
//   data,
//   (key, value) => {
//     console.log(key, value);

//     if (key === roleField) {
//       return null;
//     }

//     if (typeof value === "string") {
//       return value.toUpperCase();
//     } else if (typeof value === "number") {
//       return value * 10;
//     }
//     return value;
//   },
//   2
// );

// console.log(jsonData);

// //===================================================

// const parseData = JSON.parse(
//   jsonData,
//   (key, value) => {
//     console.log(key, value);

//     if (key === roleField) {
//       return "Admin";
//     }

//     if (typeof value === "string") {
//       return value.toLowerCase();
//     } else if (typeof value === "number") {
//       return value / 10;
//     }
//     return value;
//   },
//   2
// );

// console.log(parseData);

//==============================================

// const url = new URL("/path", "admin:12345@https://www.example.com");
// const url = new URL("https://admin:12345@www.example.com:4000/path");

/* const url = new URL(
  "https://www.google.com/search?q=hello&q=helloWorld&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQLhhDGLEDGIoFMgkIAhAjGCcYigUyCggDEAAYsQMYgAQyEAgEEC4YxwEYsQMY0QMYgAQyDAgFEC4YQxixAxiKBTIMCAYQLhhDGLEDGIoFMgoIBxAuGLEDGIAEMg0ICBAAGIMBGLEDGIAEMg0ICRAAGIMBGLEDGIAE0gEOMzIzMDA4NDcwajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8"
).searchParams;

// console.log(url.href);
// console.log(url.password);

console.log(url.has("q"));
console.log(url.append("name", "google"));
// console.log(url);

console.log(url.getAll("q"));

url.sort();
console.log(url);

//========================================================

const url1 = new URL("https://www.google.com/search");

url1.searchParams.append("q", "cat photo");

console.log(url1.href); */

//===============================================================

/* const date = new Date();

console.log(date.toISOString()); //greenwich mean time

//===

const dateString = date.toISOString();
// console.log(dateString);
//=================

console.log("year", date.getFullYear());

date.setFullYear(2020);

console.log("year", date.getFullYear());

//=====

console.log("month", date.getMonth());

date.setMonth(1);

console.log("month", date.getMonth());

//=====

console.log("date", date.getDate());

date.setDate(31);

console.log("date", date.getDate());

//========================

console.log("day", date.getDay());

//===============

console.log("minutes", date.getMinutes());

date.setMinutes(27);

console.log("minutes", date.getMinutes());

//=====

console.log("seconds", date.getSeconds());

date.setSeconds(55);

console.log("seconds", date.getSeconds());

//=====

console.log("milliseconds", date.getMilliseconds());

date.setMilliseconds(345);

console.log("milliseconds", date.getMilliseconds());

//=====

console.log(date);
console.log(date.toString());

//=====

// console.log(new Date(dateString));

// const date2 = Date.parse(dateString) + 1000 * 60 * 5;

// console.log(date2);

// console.log(date.toString()); // understandable date, current time zone
// console.log(date.toUTCString()); // understandable date in UTC (Greenwich) format, better use this
// console.log(date.toISOString()); // date in Greenwich (0) zone

// console.log(date.toDateString()); // just date
// console.log(date.toTimeString()); // just current time

// const zone = date.getTimezoneOffset(); // difference beetween current TZ and Greenwich time zone
// // const zone = date.getTimezoneOffset() / -60; // to get difference in?= hours
// console.log(zone);

//========================================

//==========
// const user = -3;

// function getUserTimeZone(timezone) {
//   //===================
//   //   let date = Date.now();

//   //========
//   let date = new Date(Date.UTC(2025, 5, 26, 12, 30, 0, 0));
//========

//   console.log(date.toString());
//   console.log(date.toUTCString());

//=============
//   console.log(date.getTime());

//   console.log(date.getHours());
//   console.log(date.getUTCHours());

//   date.setHours(date.getUTCHours() + timezone);
//==============

//   const myTimeZone = date.getTimezoneOffset() / -60;
//   console.log(myTimeZone);

//   date -= 1000 * 60 * 60 * -myTimeZone;
//   date -= 1000 * 60 * 60 * myTimeZone;

//   date += 1000 * 60 * 60 * timezone;

//==================
// date.setTime(date.getTime() - 1000 * 60 * 60 * myTimeZone);
// date.setTime(date.getTime() + 1000 * 60 * 60 * myTimeZone);

// return date;
// }

// const userDate = getUserTimeZone(user);
// console.log(userDate.toString());
// console.log(userDate.toUTCString());
//=================

// console.log(getUserTimeZone(user));

// console.log(new Date(getUserTimeZone(user)).toString());

// console.log(new Date().toUTCString());

// console.log(new Date(1750941000000).toUTCString());

// console.log(userDate.getHours());
// console.log(userDate.getUTCHours());

// console.log(userDate.toTimeString()); // user time
*/
//=========================================================================

/* console.log(Math.PI);

//=====================

const a = 5;
const b = 10;
const c = -1;
const d = 0;
const e = 16;

const arr = [20, 30, 40];

// console.log(Math.max(a, b, c, ...arr));
// console.log(Math.min(a, b, c, ...arr));

console.log(Math.sign(a));

console.log(Math.pow(a, 4)); // exponentiation (5^4)

console.log(Math.sqrt(e)); // square root √

console.log(Math.floor(1.156), Math.floor(1.556), Math.floor(1.956));
console.log(Math.ceil(1.156), Math.ceil(1.556), Math.ceil(1.956));
console.log(Math.round(1.156), Math.round(1.556), Math.round(1.956));
console.log(Math.trunc(1.156), Math.trunc(1.556), Math.trunc(1.956));

//==============
const randon = Math.trunc(Math.random() * 10) + 1; // add + 1 = 1-10, without = 0-10

console.log(randon);

//===================

console.log(Math.fround(0.1 + 0.2) === Math.fround(0.3));
*/

//====================================================

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

/* const a = 5;
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

*/

//=================================================================

/* const regexp = /(?<group1>.e)(?<group2>st)/gims;

// const regexp1 = RegExp("еest", "g");

// console.log(regexp.flags);
// console.log(regexp.global);
// console.log(regexp.multiline);
// console.log(regexp.dotAll);
// console.log(regexp.ignoreCase);

// const result = regexp.exec("This is test and est");

// // console.log(result[2]);
// // console.log(result);
// console.log(result.groups);

// console.log(regexp.exec("This is test and est"));
// console.log(regexp.exec("This is test and est"));

// console.log(regexp.test("This is test and est"));

// console.log(regexp.source);

// //======

// regexp.lastIndex = 9;

// console.log(regexp.exec("This is test and est"));
// console.log(regexp.exec("This is test and est"));

//=====

const test = "This is test and est";

console.log(test.replace(regexp, "###"));

console.log(test.search(regexp));
// console.log(test.match(regexp));

const result1 = test.matchAll(regexp);

console.log(result1.next());
console.log(result1.next());
*/

//========================================================================

/* // function getUserData(userID) {
//   try {
//     const a = 10;

//     a = 5;
//   } catch (err) {
//     // console.log(err);
//     const newErr = new Error(`Error: Unable to get user ${userID} data`, {
//       cause: err,
//     });

//     console.log(newErr);
//   }
//   //   finally {
//   // 	console.log("2");
//   //   }
// }

// getUserData(14843);

// function updateUserData(userID) {
//   try {
//     const data = getUserData(userID);

//     data.name = "Ivan";

//     //......
//   } catch (err) {
//     const newErr = new Error(`Error: Unable to update user ${userID} data`, {
//       cause: err,
//     });

//     console.log(newErr.message);
//   }
// }

// updateUserData(65456);

//================

// try {
//   throw new Error("The example of error");
// } catch (error) {
//   //   console.log(error.message);
//   //   console.log(error.cause);
//   //   console.log(error.stack);
//   console.log(error.toString());
// }

//==================

const ERROR_ID_LIST = {
  NOT_NUMBER: 1,
};

function sumNum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    // throw new Error("Arguments aren't numbers");
    const error = new TypeError("Arguments aren't numbers");
    error.name = ERROR_ID_LIST.NOT_NUMBER;
    throw error;
  }

  return a + b;
}

try {
  sumNum(10, "abc");
} catch (err) {
  //   console.log(err.message);
  //   console.log(err.name);

  if (err.name === ERROR_ID_LIST.NOT_NUMBER) {
    sumNum(10, 0);
  }
}

*/

//===========================================================================

/* // const Animal = {
//   name: "Animal",
//   voice: "Sound",
//   say() {
//     console.log(`${this.name} says ${this.voice}`);
//   },
// };

// // const dog = { ...Animal };
// const dog = Object.create(Animal);

// dog.name = "Milo";
// dog.voice = "Bow wow";

// dog.say();

// console.log(dog);

// //========================

// Object.defineProperty(dog, "_age", {
//   value: 5,
//   writable: true,
// });

// // dog.age = 10;

// Object.defineProperty(dog, "age", {
//   set(value) {
//     this._age = value * 2;
//   },

//   get() {
//     return `${this._age || 0} years old`;
//   },

//   //   writable: true,
//   //   configurable: true,
//   //   enumerable: true,
// });

// console.log(dog.age);

// dog.age = 15;

// console.log(dog.age);

// delete dog._age;

// console.log(Object.keys(dog));

// //========================

// Object.defineProperty(dog, "location", {
//   value: "Ukraine",
//   writable: true,
//   configurable: true,
//   enumerable: true,
// });

// console.log(dog.location);

// console.log(Object.keys(dog));

// dog.location = "Italy";

// console.log(dog.location);

// //========================

// Object.defineProperty(dog, "_space", {
//   value: 0,
//   writable: true,
// });

// // dog.age = 10;

// Object.defineProperty(dog, "space", {
//   set(value) {
//     this._space = value * 4;
//   },

//   get() {
//     return `${this._space}px`;
//   },
// });

// console.log(dog.space);

// dog.space = 4;

// console.log(Object.getOwnPropertyDescriptor(dog, "_space"));
// console.log(dog.hasOwnProperty("voice"));

// //=========================

// Animal.go = function () {
//   console.log(`${this.name} run`);
// };

// dog.go();

// console.log(Object.getPrototypeOf(dog));

// console.log(Animal.isPrototypeOf(dog));

// Object.setPrototypeOf(dog, { animal: "big" });

// console.log(Object.getPrototypeOf(dog));

//=========================================================

const Tag = {
  render(value) {
    return `<${this.className}>${value}<>`;
  },
  className: null,
};

// ===

const Button = Object.create(Tag);

Button.render = function (value = "") {
  return `<button name="${this.className}" style="${this.style}">${value}</button>`;
};

// ===

const mainButtom = Object.create(Button, {
  style: {
    value: "background-color: blue;",
    writable: true,
  },
  className: {
    value: "my-button",
  },
});

console.log(mainButtom.render("Click"));
console.log(mainButtom.className);

// ===

const Input = Object.create(Tag);

Input.render = function () {
  return `<input placeholder="${this.placeholder}" style="${this.style}">`;
};

const loginInput = Object.create(Input, {
  style: {
    value: "border: 1px, solid, green;",
    writable: true,
  },
  placeholder: {
    value: "Login...",
  },
});

console.log(loginInput.render());
console.log(loginInput.className);

// ===

const serverRequest = {
  data: null,
  getData: {
    //......
  },
  render() {
    this.data = this.getData();

    return `...`;
  },
};

// ===

const Page = {
  components: [],
  path: "/.../.../",
  render() {
    //......
  },
};

// ===
*/

//====================================================================

/* // const User = {
//   login: null,
//   password: null,
//   role: null,
//   age: null,
// };

//======
function User(data) {
  //   console.log("new", new.target);

  if (new.target) {
    const { login = null, password = null, isAdmin = null, age = 0 } = data;

    const role = isAdmin ? "Admin" : "User";

    const object = Object.assign(this, {
      login,
      password,
      role,
      age,
    });

    if (role === "Admin") {
      object.verify = function (password) {
        console.debug(password, this);
        return this.password === password;
      };
    }
    if (age >= 30) {
      object.login = String(object.login).toUpperCase();
    }

    object.toString = function () {
      return `User ${this.login}`;
    };

    // this.login = login;
    // this.password = password;
    // const role = isAdmin ? "Admin" : "User";
    // this.age = age;
    // const verify = function (password) {
    //   return this.password === password;
    // };

    return object;
  } else {
    return new User(data); // if some constructor don't have 'new'
  }
}

// function UserAdmin({ login = null, password = null, isAdmin = null, age = 0 }) {
//   this.login = login;
//   this.password = password;
//   this.role = isAdmin ? "Admin" : "User";
//   this.age = age;

//   this.verify = function (password) {
//     return this.password === password;
//   };
// }
//=====

const registerData = {
  login: "Ivan",
  password: "51jk69d",
  isAdmin: true,
  age: 25,
};

const user = User(registerData);

console.log(user.verify("tsgf"));

//================

const adminData = {
  login: "Hanna",
  password: "345kjnFA7",
  isAdmin: true,
};

const admin = User(adminData);
console.log(admin.password);

//=====

User.prototype.test = "Hello, World!";

console.log(user.test);
//======

const testData = {
  login: "Hanna",
  password: "345kjnFA7",
  age: 37,
};

const testUser = new User(testData);

console.log(testUser.login);

//=========

console.log(Object.getPrototypeOf(testUser) === User.prototype);

console.log(user.toString());

console.log(User.length);

const test = User;

console.log(test.name);

//===========

console.log("======================");

console.log(user.verify("51jk69d"));

// const verifyUser = user.verify;
// console.log(verifyUser.apply(user, ["51jk69d"]));

const verifyUser = user.verify.bind(user, "51jk69d");
console.log(verifyUser());

//============

function Animal(name) {
  this.name = name;
}

const Person = function (name, age) {
  Animal.call(this, name);
  this.age = age;
};

const user2 = new Person("Roman", 32);
console.log(user2.name, user2.age);
*/

//============================================================================