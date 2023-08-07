setImmediate(() => {
  console.log("Zero");
});

console.log("First");

const intervalID = setInterval(() => {
  console.log("Middle");
}, 1000);

setTimeout(() => {
  console.log("Second");
}, 1000 * 2);

setTimeout(() => {
  console.log("Third");
}, 0);

console.log("Forth");

setTimeout(() => {
  clearInterval(intervalID);
}, 1000 * 5);
