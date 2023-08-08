// function loadFile(filename, callback) {
//   try {
//     console.log(`Download file ${filename}...`);
//     setTimeout(() => callback(null, `File content ${filename}`), 2000);
//   } catch (e) {
//     callback(e);
//   }
// }

// //===============

// function convertFile(content, callback) {
//   setTimeout(function () {
//     // Converting of file...
//     callback(null, `Converted content: ${content.toUpperCase()}`);
//   }, 1000);
// }

// function saveFile(convertedContent, callback) {
//   setTimeout(function () {
//     // Saving file...
//     callback();
//   }, 1500);
// }

// function sendFileToClient(callback) {
//   setTimeout(function () {
//     // Sending data to interface...
//     callback();
//   }, 500);
// }

// //=====

// loadFile("example.txt", function (error, content) {
//   if (error) {
//     console.log("File upload error:", error);
//   } else {
//     console.log("File was successfully download!:");
//     console.log("File content:", content);

//     convertFile(content, (error, convertedContent) => {
//       if (error) {
//         console.error("File conversion error:", error);
//       } else {
//         console.log("File was successfully converted!");
//         console.log("Converted content:", convertedContent);

//         saveFile(convertedContent, (error) => {
//           if (error) {
//             console.error("Error saving file:", error);
//           } else {
//             console.log("File was successfully saved!");

//             sendFileToClient((error) => {
//               if (error) {
//                 console.error("Error sending file to client:", error);
//               } else {
//                 console.log(
//                   "The file has been successfully sent to the client!"
//                 );
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });

//========================================================================

// const loadFile = (filename) =>
//   new Promise((resolve, reject) => {
//     console.log(`Download file ${filename}...`);

//     // reject("Error");
//     setTimeout(() => resolve(`File content ${filename}`), 2000);
//   });

//   //===========

// // const result = loadFile("image.png");

// // console.log(result);

// // setTimeout(() => console.log(result), 3000);

// // result.then(
// //   (data) => {
// //     console.log(data);
// //   },
// //   (error) => {
// //     console.log(error);
// //   }
// // );

// //======

// loadFile("image.png")
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   })
//   .finally(() => {
//     console.log("End");
//   });

// const result = loadFile("photo.jpg");

// result.then((data) => {
//   console.log(data, 1);
//   return null;
// });

// result.then((data) => {
//   console.log(data, 2);
//   return null;
// });

// result.then((data) => {
//   console.log(data, 3);
//   return null;
// });

//=============================

function loadFile(filename) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("2222")
      resolve(`File content ${filename}`);
    }, 2000);
  });
}

//=============================

function convertFile(content) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Converted content: ${content.toUpperCase()}`);
    }, 1000);
  });
}

function saveFile(convertedContent) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve();
      console.log("saveFile");
      reject("Error test");
    }, 1500);
  });
}

function sendFileToClient() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sendFileToClient");
      reject("Error test 2");
      //   resolve();
    }, 500);
  });
}

function getInfoFromFile(file) {
  console.log(file, 1111);

  //   if() {
  // 	Promise.reject(...)
  //   }

  return Promise.resolve(file + 100);
}

const test = // Promise.all([
  // Promise.allSettled([
  //   Promise.any([
  Promise.race([
    loadFile("example.txt"),
    // getInfoFromFile("content.txt"),
    saveFile(),
    sendFileToClient(),
    convertFile("file"),
  ])
    .then((data) => {
      console.log("Data", data);
    })
    .catch((error) => {
      console.log("Error", error);
    });

console.log(test);

// loadFile("example.txt")
//   .then((content) => {
//     console.log("File was successfully download!:");
//     console.log("File content:", content);
//     return convertFile(content);
//   })

//   .then((data) => {
//     return getInfoFromFile(data);
//   })
//   .then((convertedContent) => {
//     console.log("File was successfully converted!");
//     console.log("Converted content:", convertedContent);
//     return saveFile(convertedContent);
//   })
//   .then(() => {
//     console.log("File was successfully saved!");
//     return sendFileToClient();
//   })

//   .catch((error) => {
//     console.log("An error occurred:", error);
//   })

//   .finally(() => {
//     console.log("The file has been successfully sent to the client!");
//   });
