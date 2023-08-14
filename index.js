// function* myGenerator() {
//   console.log("Start");

//   yield 1;

//   console.log("Start 2");

//   yield 2;

//   console.log("Start 3");

//   yield 3;

//   console.log("End");

//   return 4;
// }

// const generator = myGenerator();

// const result1 = generator.next();

// console.log(result1);

// const result2 = generator.next();

// console.log(result2);

// const result3 = generator.next();

// console.log(result3);

// const result4 = generator.next();

// console.log(result4);

function* processOrder(order) {
  yield validateOrder(order);
  yield processsPayment(order);
  yield sendOrderConfirmation(order);

  return order;
}

// function getOrderDetails() {
//   const order = { id: 123, product: "Product", quantity: 2 };
//   return order;
// }

function validateOrder(order) {
  const isValid = order.quantity > 0;
  return isValid;
}

function processsPayment() {
  const isPaymentSuccessful = Math.random() < 0.5;
  return isPaymentSuccessful;
}

function sendOrderConfirmation() {
  const isConfirmationSent = true;
  return isConfirmationSent;
}

const order = { id: 123, product: "Product", quantity: 2 };

const orderProcessing = processOrder(order);

// const isValidateOrder = orderProcessing.next().value;

// if (isValidateOrder === false) {
//   //........
// }

// const isProcesssPayment = orderProcessing.next();

// if (isProcesssPayment === false) {
//   //........
// }

console.log(orderProcessing.next());
console.log(orderProcessing.next());
console.log(orderProcessing.next());
console.log(orderProcessing.next());

//===========================================
console.log("============================");

function* generatorFunction() {
  yield "First value";
  yield "Second value";
}

const generator = generatorFunction();

for (let value of generator) {
  console.log(value);
}

//===========================================
console.log("============================");

function* generatorOne() {
  yield "1 1";
  yield "1 2";
}

function* generatorTwo() {
  yield* generatorOne();
  yield "2 1";
  yield "2 2";
}

const generatorNew = generatorTwo();

console.log(generatorNew.next());
console.log(generatorNew.next());
console.log(generatorNew.next());
console.log(generatorNew.next());

//===========================================
console.log("============================");

function* myGenerator1() {
  try {
    const test = yield 1;

    console.log("Test", test);

    const value = yield 2;
    yield 3;
    yield value;
  } catch (e) {
    console.log(e);
    yield 1000;
    yield 2000;
  } finally {
    yield 3000;
  }

  yield 5000;
}

const generator1 = myGenerator1();

console.log(generator1.next().value);

console.log(generator1.throw(new Error()));
console.log(generator1.next().value);
// console.log(generator1.return(10).value);
console.log(generator1.next(4).value);
console.log(generator1.next().value);

//===========================================
console.log("============================");

// const asyncFunc = () => new Promise((resolve) => setTimeout(resolve, 1000));

// async function* asyncGenerator() {
//   await asyncFunc;
//   yield "After 1 second";
//   await asyncFunc;
//   yield "After 2 second";
// }

// async function runGenerator() {
//   const generator = asyncGenerator();

//   //   let result = null;

//   //   result = await generator.next();

//   //   console.log(result);

//   //   result = await generator.next();

//   //   result.value;

//   //   console.log(result);

//   //====

//   for await (const result of generator) {
//     console.log(result);

//     await asyncFunc();
//   }
// }

// runGenerator();

//===========================================
console.log("============================");

function fetchDataFromServer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.7) {
        resolve("Data successfuly loaded");
      } else {
        reject("Data loading error");
      }
    }, 1000);
  });
}

function convertData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const convertedData = data.toUpperCase();
      resolve(convertedData);
    }, 500);
  });
}

async function* fetchData() {
  try {
    const result = await fetchDataFromServer();
    yield "pending";

    const convertedData = await convertData(result);
    yield "success";

    return convertedData;
  } catch (error) {
    yield "error";
  }
}

(async () => {
  const generator = fetchData();

  console.log(await generator.next());

  console.log(await generator.next());

  console.log(await generator.next());
})();
