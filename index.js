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

const url = new URL(
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

console.log(url1.href);
