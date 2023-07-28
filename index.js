// const User = {
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
