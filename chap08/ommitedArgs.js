"use strict";

function concatenate(lastName, firstName, sapce) {
  return lastName + sapce + firstName;
}

let lName = "中田";
let fName = "雄二";
let name1 = concatenate(lName, fName, " ");
console.log("半角スペースで統合: " + name1);
let name2 = concatenate(lName, fName);
console.log("第三引数の渡し忘れ: " + name2);
let name3 = concatenate(lName);
console.log("第二、第三引数の渡し忘れ: " + name3);
let name4 = concatenate();
console.log("全ての引数の渡し忘れ: " + name4);
