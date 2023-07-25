// function getUserData(userID) {
//   try {
//     const a = 10;

//     a = 5;
//   } catch (err) {
//     // console.log(err);
//     const newErr = new Error(`Error: Unable to get user ${userID} data`, {
//       cause: err,
//     });

//     console.log(newErr);
//   }
//   //   finally {
//   // 	console.log("2");
//   //   }
// }

// getUserData(14843);

// function updateUserData(userID) {
//   try {
//     const data = getUserData(userID);

//     data.name = "Ivan";

//     //......
//   } catch (err) {
//     const newErr = new Error(`Error: Unable to update user ${userID} data`, {
//       cause: err,
//     });

//     console.log(newErr.message);
//   }
// }

// updateUserData(65456);

//================

// try {
//   throw new Error("The example of error");
// } catch (error) {
//   //   console.log(error.message);
//   //   console.log(error.cause);
//   //   console.log(error.stack);
//   console.log(error.toString());
// }

//==================

const ERROR_ID_LIST = {
  NOT_NUMBER: 1,
};

function sumNum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    // throw new Error("Arguments aren't numbers");
    const error = new TypeError("Arguments aren't numbers");
    error.name = ERROR_ID_LIST.NOT_NUMBER;
    throw error;
  }

  return a + b;
}

try {
  sumNum(10, "abc");
} catch (err) {
  //   console.log(err.message);
  //   console.log(err.name);

  if (err.name === ERROR_ID_LIST.NOT_NUMBER) {
    sumNum(10, 0);
  }
}
