/*
// // class RecentPurchases {
// //   static #instance = null;

// //   constructor() {
// //     this.purchases = [];
// //   }

// //   static create() {
// //     if (!this.#instance) {
// //       this.#instance = new RecentPurchases();
// //     }

// //     return this.#instance;
// //   }

// //   add(item) {
// //     this.purchases.push(item);
// //   }

// //   get() {
// //     return this.purchases;
// //   }
// // }

// // const lastPurchaseList = RecentPurchases.create();
// // //=======
// // const lastPurchaseList2 = RecentPurchases.create();

// // console.log(lastPurchaseList === lastPurchaseList2);

// // lastPurchaseList2.add("Phone");
// // lastPurchaseList2.add("Earphones");

// // console.log(lastPurchaseList.get());

// // =========================================================

// class RecentPurchases {
//   static #instance = null;

//   static #purchases = [];

//   static create() {
//     if (!this.#instance) {
//       this.#instance = new RecentPurchases();
//     }

//     return this.#instance;
//   }

//   static add(item) {
//     this.#purchases.push(item);
//   }

//   static get() {
//     return this.#purchases;
//   }
// }

// RecentPurchases.create();

// RecentPurchases.add("Phone");
// RecentPurchases.add("Earphones");
// //=======

// console.log(RecentPurchases.get());

// // =======================================================
// class Button {
//   constructor({ text, color }) {
//     this.text = text;
//     this.color = color;
//   }

//   render() {
//     return `<button class="color:${this.color};">${this.text}</button>`;
//   }
// }

// class IconButton {
//   constructor({ icon, color }) {
//     this.icon = icon;
//     this.color = color;
//   }

//   render() {
//     return `<button class="color:${this.color};"><img src="${this.icon}"></button>`;
//   }
// }

// class ButtonFactory {
//   static TYPE = {
//     BASIC: "basic",
//     ICON: "icon",
//   };

//   static createButton(type, options) {
//     if (options.icon) {
//       return new IconButton(options);
//     }
//     if (options.text) {
//       return new Button(options);
//     }

//     throw new Error(`This type of button doesn't exist: ${type}`);

//     // switch (type) {
//     //   case this.TYPE.BASIC:
//     //     return new Button(options);
//     //   case this.TYPE.ICON:
//     //     return new IconButton(options);
//     //   default:
//     //     throw new Error(`This type of button doesn't exist: ${type}`);
//     // }
//   }
// }

// const myIconButton = ButtonFactory.createButton(ButtonFactory.TYPE.ICON, {
//   color: "red",
//   icon: "/icon/my-icon.svg",
// });

// console.log(myIconButton);

// //===================================================================================

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   sendEmail(message) {
//     console.log(`Sending message: ${message} to e-mail ${this.email}`);
//   }
// }

// class Video {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Channel {
//   constructor(name) {
//     this.name = name;
//     this.subscribers = [];
//   }

//   subscribe(user) {
//     this.subscribers.push(user);
//   }

//   unsubscribe(user) {
//     this.subscribers = this.subscribers.filter((sub) => sub !== user);
//   }

//   createVideo(name) {
//     const video = new Video(name);
//     this.sendNotify(video);
//   }

//   sendNotify(video) {
//     this.subscribers.forEach((subscriber) => {
//       subscriber.sendEmail(
//         `New video "${video.name}" on Youtube chanel ${this.name}!`
//       );
//     });
//   }
// }

// const channel = new Channel("IT Brains");

// const user1 = new User("john@example.com");
// const user2 = new User("jane@example.com");
// const user3 = new User("alice@example.com");

// channel.subscribe(user1);
// channel.subscribe(user2);
// channel.subscribe(user3);

// channel.createVideo("HTML Lesson");

// console.log("=======");

// channel.unsubscribe(user1);

// channel.createVideo("CSS Lesson");

// //===================================

class Coffee {
  name = "Coffee";

  cost = 10;

  cook() {
    console.log(`Preparing ${this.name}`);
  }
}

class MilkDecorator {
  constructor(coffee, amount) {
    this.coffee = coffee;
    this.amount = amount;
  }

  get name() {
    return `${this.coffee.name} with ${this.amount} ml of milk`;
  }

  get cost() {
    const milkPrice = 0.05;
    return this.coffee.cost + milkPrice * this.amount;
  }

  cook() {
    console.log(`Preparing ${this.name}`);
  }
}

let coffee = new Coffee();
console.log(coffee.name);
console.log(coffee.cost);
coffee.cook();

let latteCoffee = new MilkDecorator(coffee, 300);
console.log(latteCoffee.name);
console.log(latteCoffee.cost);
latteCoffee.cook();

//=======================================================

console.log("//=======================================================");

class TextEditor {
  #text = "";

  set text(text) {
    this.#text = text;
    this.#save();
  }

  get text() {
    return this.#text;
  }

  #save() {
    Snapshot.create(this.text);
  }

  restore() {
    this.#text = Snapshot.restore().text;
  }
}

class Snapshot {
  constructor(text) {
    this.text = text;
  }

  static #snapshots = [];

  static create(text) {
    console.log(text);
    this.#snapshots.push(new Snapshot(text));
  }

  static restore() {
    this.#snapshots.pop();
    return this.#snapshots[this.#snapshots.length - 1];
  }
}

const editor = new TextEditor();

editor.text = "It is initial text.";
editor.text = "It is edited text.";
editor.text = "It is updated text.";

console.log("=========");

console.log(editor.text);

console.log("=========");

editor.restore();

console.log(editor.text);

editor.restore();

console.log(editor.text);

//=======================================================

console.log("//=======================================================");

class AuthHandler {
  setNextHandler(handler) {
    this.nextHandler = handler;
    return handler;
  }

  login(user, password) {
    if (this.nextHandler) {
      return this.nextHandler.login(user, password);
    } else {
      return false;
    }
  }
}

class TwoFactorAuthHandler extends AuthHandler {
  login(user, password) {
    if (
      user === "john" &&
      password === "password" &&
      this.isValidTwoFactorCode()
    ) {
      console.log("Login is allowed with two-factor authentication");
      return true;
    } else {
      return super.login(user, password);
    }
  }

  isValidTwoFactorCode() {
    return true;
  }
}

//==========

class RoleHander extends AuthHandler {
  login(user, password) {
    if (user === "guest") {
      console.log("Login is allowed with the guest role");
      return true;
    } else {
      return super.login(user, password);
    }
  }
}

class CretentialsHandler extends AuthHandler {
  login(user, password) {
    if (user === "admin" && password === "admin123") {
      console.log("Login is permitted by login and password");
      return true;
    } else {
      return super.login(user, password);
    }
  }
}

//==================================================================

class HandlerBuilder {
  constructor() {
    this.firstHandler = null;
    this.lastHandler = null;
  }

  add(handler) {
    if (!this.firstHandler) {
      this.firstHandler = handler;
      this.lastHandler = handler;
    } else {
      this.lastHandler.setNextHandler(handler);
      this.lastHandler = handler;
    }
    return this;
  }

  create() {
    return this.firstHandler;
  }
}

//=========

// const handler = new TwoFactorAuthHandler();

// handler.setNextHandler({
//   login: (login, password) => {
//     const result =
//       login === "login" && password === "password"
//         ? "The user is logged into the account"
//         : "The user does not logged into the account";

//     console.log(result);
//     return result;
//   },
// });
// handler.setNextHandler(new CretentialsHandler());

// // handler.login("login", "password");
// handler.login("admin", "admin123");

// const handler2 = new CretentialsHandler();

// handler2.setNextHandler(new RoleHander());

// handler.setNextHandler(handler2);

// handler.login("guest", "admin123");

const handlerBuilder = new HandlerBuilder();

const handler = handlerBuilder
  .add(new CretentialsHandler())
  .add(new TwoFactorAuthHandler())
  .add(new RoleHander())
  .create();

handler.login("admin", "admin123");
handler.login("john", "password");
handler.login("guest", "guest123");
handler.login("user", "password");
*/

//============================================================

class User {
  constructor(name, messenger) {
    this.name = name;
    this.messenger = messenger;
  }

  sendMessage(message) {
    const formattedMessage = this.formatMessage(message);
    // return formattedMessage;
    this.messenger.sendMessage(formattedMessage);
  }

  formatMessage(message) {
    return `[${this.name}]: ${message}`;
  }
}

class SMSMessenger {
  static sendMessage(message) {
    console.log(`SMS sent: ${message}`);
  }
}

class EmailMessenger {
  static sendMessage(message) {
    console.log(`Email sent: ${message}`);
  }
}

const john = new User("John", SMSMessenger);
const jane = new User("Jane", EmailMessenger);

john.sendMessage("Hi!");
jane.sendMessage("Hello!");
