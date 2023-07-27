// const Animal = {
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
