/**
 * 默认导出的名称是可以忽略的，如这里所示，validator在./ZipCodeValidator 中并不存在。 
 */
import validator from "./ZipCodeValidator";

let myValidator = new validator();

import validate from "./StaticZipCodeValidator";

let strings = ["Hello", "98052", "101"];

// Use function validate
strings.forEach(s => {
  console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
});