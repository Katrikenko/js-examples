const date = new Date();

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
