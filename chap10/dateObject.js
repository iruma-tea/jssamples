"use strict";

let jobs = new Date(2011, 9, 5);
console.log("ジョブスの命日: " + jobs.toDateString());
console.log("ジョブスの命日: " + jobs.toLocaleDateString());

let month = jobs.getMonth();
jobs.setMonth(month + 1);
console.log("1ヵ月後: " + jobs.toLocaleDateString());

let date = jobs.getDate();
jobs.setDate(date - 6);
console.log("6日前: " + jobs.toLocaleDateString());
