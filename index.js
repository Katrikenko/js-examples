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

const code = "(5 + 5) % 5 === 0";

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
