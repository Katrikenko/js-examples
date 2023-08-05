class Composite {
  comments = [];

  addComment(comment) {
    this.comments.push(comment);
  }

  revomeComment(comment) {
    const index = this.comments.indexOf(comment);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }
}

class Comment extends Composite {
  //   constructor(text) {
  //     this.text = text;
  //   }

  //   display() {
  //     console.log(`— Comment: ${this.text}`);
  //   }

  //===============================================

  constructor(text) {
    super();
    this.text = text;
  }

  display() {
    console.log(`— Comment: ${this.text}`);

    for (const comment of this.comments) {
      comment.display();
    }
  }
}

class Video extends Composite {
  //   comment = null;

  //   constructor(title) {
  //     this.title = title;
  //   }

  //   display() {
  //     console.log(`Video: ${this.title}`);

  //     if (this.comment) this.comment.display();
  //   }

  //=============================================

  constructor(title) {
    super();
    this.title = title;
  }

  display() {
    console.log(`Video: ${this.title}`);

    for (const comment of this.comments) {
      comment.display();
    }
  }
}

// const video = new Video("Educational video");

// video.comment = new Comment("Very useful video");

// video.display();

//====================================================

const video = new Video("Educational video");

video.addComment(new Comment("Very useful video"));
video.addComment(new Comment("Very helpful video"));

video.comments[0].addComment(new Comment("Answer: Agreed!"));

video.display();

console.log(video.comments);

console.log("================================================");

//====================================================================

class Category {
  static #categories = {};

  constructor(name) {
    this.name = name;
  }

  static create(name) {
    if (!this.#categories[name]) {
      this.#categories[name] = new Category(name);
    }
    return this.#categories[name];
  }
}

class Product {
  constructor(name, category) {
    this.name = name;
    this.category = category;
  }

  display() {
    console.log(`Product: ${this.name}, Category: ${this.category.name}`);
  }
}

const electronics = Category.create("Electronics");
const books = Category.create("Books");
const electronics2 = Category.create("Electronics");

console.log(electronics, books, electronics2);
console.log(electronics === electronics2);

const product1 = new Product("Laptop", electronics);
const product2 = new Product("Headphones", electronics);
const product3 = new Product("Book Title", books);
const product4 = new Product("Smartphone", new Category("Electronics"));

product1.display();
product2.display();
product3.display();
product4.display();

console.log(product1.category === product4.category);

const list = [product1, product2, product3, product4].filter(
  (product) => product.category === Category.create("Electronics")
);

console.log(list);

console.log("================================================");

//====================================================================

class CoffeeMachine {
  prepareCoffee() {
    this.boilWater();
    this.grindCofeeBeans();
    this.brewCoffee();
    this.pourIntoCup();
    this.addIngredients();
    this.serveCoffee();
  }

  boilWater() {
    console.log("Boiling water...");
  }

  grindCofeeBeans() {
    console.log("Grinding coffee beans...");
  }

  brewCoffee() {
    console.log("Brewing coffee...");
  }

  pourIntoCup() {
    console.log("Pouring coffee into cup...");
  }

  addIngredients() {
    //===========;
  }

  serveCoffee() {
    console.log("Coffee served...");
  }
}

class LatteMachine extends CoffeeMachine {
  addIngredients() {
    console.log("Adding milk to make a latte...");
  }
}

class CappuccinoMachine extends CoffeeMachine {
  addIngredients() {
    console.log(
      "Adding frothed milk and sprinkle of cocoa to make a cappuccino..."
    );
  }
}

const latteMachine = new LatteMachine();
latteMachine.prepareCoffee();

const cappuccinoMachine = new CappuccinoMachine();
cappuccinoMachine.prepareCoffee();

console.log("================================================");

//====================================================================

class TextFile {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }
}

class ImageFile {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}

class VideoFile {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }
}

class TextEditor {
  files = [];

  addFile(file) {
    this.files.push(file);
  }

  readTextFile(file) {
    console.log(
      `Text file: ${file.name}, Size: ${file.content.length} characters`
    );
  }

  readImageFile(file) {
    console.log(`Image file: ${file.name}, Size: ${file.size} KB`);
  }

  readVideoFile(file) {
    console.log(`Video file: ${file.name}, Duration: ${file.duration} minutes`);
  }

  readFiles() {
    for (const file of this.files) {
      if (file instanceof TextFile) {
        this.readTextFile(file);
      } else if (file instanceof ImageFile) {
        this.readImageFile(file);
      } else if (file instanceof VideoFile) {
        this.readVideoFile(file);
      }
    }
  }
}

const textEditor = new TextEditor();

const textFile = new TextFile("document.txt", "Lorem ipsum dolor sit amet.");
const imageFile = new ImageFile("image.jpg", 1024);
const videoFile = new VideoFile("video.mp4", 60);

textEditor.addFile(textFile);
textEditor.addFile(imageFile);
textEditor.addFile(videoFile);

console.log(textEditor.files);

textEditor.readFiles();

console.log("================================================");

//====================================================================

class ElectronicPaymentSystem {
  makePayment(amount) {
    const convertedAmount = this.convertAmount(amount);
    console.log(`Making electronic payment: $${convertedAmount}`);
  }

  convertAmount(amount) {
    return amount * 1.2;
  }
}

class OtherPaymentSystem {
  submit(amount) {
    console.log(`Submitting payment request: $${amount}`);
  }
}

const electronicPaymentSystem = new ElectronicPaymentSystem();
electronicPaymentSystem.makePayment(100);

class PaymentAdapter {
  constructor(paymentSystem) {
    this.paymentSystem = paymentSystem;
  }

  makePayment(amount) {
    const convertedAmount = this.convertAmount(amount);
    this.paymentSystem.submit(convertedAmount);
  }

  convertAmount(amount) {
    return amount * 1.2;
  }
}

class Order {
  constructor(amount) {
    this.amount = amount;

    if (amount < 100) {
      this.paymentSystem = new PaymentAdapter(new OtherPaymentSystem());
    } else {
      this.paymentSystem = new ElectronicPaymentSystem();
    }
  }

  makePayment() {
    //     if (this.paymentSystem.makePayment) {
    //       return this.paymentSystem.makePayment(this.amount);
    //     }

    //     if (this.paymentSystem.submit) {
    //       return this.paymentSystem.submit(this.amount);
    //     }

    return this.paymentSystem.makePayment(this.amount);
  }
}

const order1 = new Order(1000);
order1.makePayment();

const order2 = new Order(10);
order2.makePayment();

console.log("================================================");

//====================================================================

class ShoppingCart {
  constructor(discountStrategy) {
    this.discountStrategy = discountStrategy;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  //   discountStrategy(price) {
  //     return price > 100 ? price * 0.9 : price;
  //   }

  calculateTotalPrice() {
    // let totalPrice = 0;
    // for (const item of this.items) {
    //   totalPrice += item.price;
    // }

    const price = this.items.reduce((acc, item) => acc + item.price, 0);

    return price - this.discountStrategy.calculateDiscount(price);

    // const finalPrice = totalPrice;
    // return finalPrice;
  }
}

class DiscountStrategy {
  calculateDiscount(price) {
    return price;
  }
}

class RegularDiscountStrategy extends DiscountStrategy {
  calculateDiscount(price) {
    return price * 0.1;
  }
}

class PremiumDiscountStrategy extends DiscountStrategy {
  calculateDiscount(price) {
    return price * 0.2;
  }
}

class NewCustomerDiscountStrategy extends DiscountStrategy {
  calculateDiscount(price) {
    return price * 0.05;
  }
}

const shoppingCart1 = new ShoppingCart(new NewCustomerDiscountStrategy());

shoppingCart1.addItem({ name: "Product 1", price: 100 });
shoppingCart1.addItem({ name: "Product 2", price: 50 });

console.log(shoppingCart1.calculateTotalPrice());

console.log("================================================");

//====================================================================

// class User {
//   constructor(name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
// }

// class UserGroup {
//   users = [];

//   addUser(user) {
//     this.users.push(user);
//   }
// }

// class UserIterator {
//   #users = null;
//   #currentIndex = 0;

//   constructor(userGroup) {
//     // this.#names = userGroup.map((user) => user.name);
//     this.#users = userGroup.users;
//   }

//   #hasNext() {
//     return this.#currentIndex < this.#users.length;
//   }

//   next() {
//     if (this.#hasNext()) {
//       const name = this.#users[this.#currentIndex].name;
//       this.#currentIndex++;
//       return name;
//     }
//     return null;
//   }

//   list() {
//     return this.#users.map((user) => user.name).join(", ");
//   }
// }

// const group = new UserGroup();

// group.addUser(new User("John Doe", "john@example.com", "password1"));

// group.addUser(new User("Jane Smith", "jane@example.com", "password2"));

// console.log(group.users.map((user) => user.password).join(", "));

// //===

// const iterator = new UserIterator(group);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// console.log(iterator.list());

console.log("================================================");

//====================================================================

class User {
  constructor(name, chat) {
    this.name = name;
    this.chat = chat;
  }

  sendMessage(message) {
    console.log(`${this.name} send message: ${message}`);
    return this.chat.sendMessage(this, message);
  }

  receiveMessage(user, message) {
    console.log(`${this.name} receive message from ${user.name}: ${message}`);
  }
}

class Chat {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  sendMessage(sender, message) {
    for (const user of this.users) {
      if (user !== sender) {
        user.receiveMessage(sender, message);
      }
    }
  }
}

const chatMediator = new Chat();

const user1 = new User("John", chatMediator);
const user2 = new User("Jane", chatMediator);
const user3 = new User("Mike", chatMediator);

chatMediator.addUser(user1);
chatMediator.addUser(user2);
chatMediator.addUser(user3);

user1.sendMessage("Good morning, everybody!");
// user2.sendMessage("Hi, John!");
