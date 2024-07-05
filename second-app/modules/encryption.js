// Core Module
const crypto = require("crypto");

function encrypt(text) {
  let myKey = crypto.createCipher("aes-128-cbc", "mypassword");
  let str = myKey.update(text, "utf8", "hex");
  str += myKey.final("hex");
  return str;
}

function decrypt(text) {
  let myKey = crypto.createDecipher("aes-128-cbc", "mypassword");
  let str = myKey.update(text, "hex", "utf8");
  str += myKey.final("utf8");
  return str;
}

module.exports = {
  encry: encrypt,
  decry: decrypt,
};
