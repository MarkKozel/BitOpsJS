var BitOps = require("./src/BitOperations.js");

bitOps = new BitOps();
let results = bitOps.addBitStrings("000001", "10");
console.log("Results:");
console.log("  sum: " + results.sum);
console.log("  Cot: " + results.carryOut);

results = bitOps.addBitStrings("11", "10");
console.log("Results:");
console.log("  sum: " + results.sum);
console.log("  Cot: " + results.carryOut);