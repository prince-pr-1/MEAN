//  const numbers = require('./modules/largest');
//  const coreModules = require('./modules/coreModules');
const protection = require("./modules/encryption");

// Local module output :
//  let r1 = numbers.method1(1, 2, 3);
//  let r2 = numbers.method2(1, 2, 3, 4, 5, 6, 7);
//  console.log(r1);
//  console.log(r2);

// Core Modules output :
// coreModules();

let encryptedText = protection.encry("Prince P R");
let decryptedText = protection.decry(encryptedText);

console.log("========Start========");
console.log("Cipher Text :", encryptedText);
console.log("=====================");
console.log("Decrypted :", decryptedText);
console.log("========End========");
