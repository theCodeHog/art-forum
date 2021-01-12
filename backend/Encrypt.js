const crypto = require("crypto");
//const { performance } = require("perf_hooks");

module.exports = class Encrypt {
  //Sha256 encryption with the built in node module crypto
  static encrypt(password) {
    return crypto
      .createHmac("sha256", require("./salt.json"))
      .update(password)
      .digest("hex");
  }

  //Multi-encryption makes it more cpu-extensive to run a whole wordlist
  //against a stolen db of passwords
  static multiEncrypt(password, encryptTimes = 999) {
    while (encryptTimes--) {
      password = this.encrypt(password);
    }
    return password;
  }

  /*
  startTime = performance.now();
  console.log(multiEncrypt("1234"));
  endTime = performance.now();
  console.log(endTime - startTime);
  */
};
