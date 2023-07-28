class Person {
  constructor(name) {
    this.name = name;
  }

  test = () => {
    console.log("Hello, World!", this.name);
  };
}

class User extends Person {
  constructor(login, password) {
    super(login);

    this.login = login;
    this.password = password;
  }

  login = null;
  password = null;
  #role = null;
  //   static age = null;
  age = null;

  id = null;
  #id = 1000;

  isAdmin = () => {
    console.log(this.#id);
    return this.role === "Admin";
  };

  createAdminUser = (login) => {
    const password = this.generateRandomPassword();
    return new User();
  };

  static generateRandomPassword = () => {
    return true;
  };

  get admin() {
    return this.#role === "Admin";
  }

  set admin(value) {
    this.#role = "Admin";
  }
}

const user = new User("Gennady", "27cMx5q38");

// console.log(User.prototype === user.__proto__);
// console.log(user);

// console.log(user.isAdmin());

function verifyAdmin(fn) {
  const result = fn();

  if (!result) {
    throw new Error("Not an Admin");
  }

  return true;
}

// verifyAdmin(user.isAdmin);

// console.log(user);
// console.log(User.generateRandomPassword());
// console.log(User);

//=======

// console.log(user.admin);

// user.admin = true;

// console.log(user.admin);

//======

// console.log(user.test());

console.log(user instanceof User);
