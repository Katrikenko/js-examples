const regexp = /(?<group1>.e)(?<group2>st)/gims;

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
