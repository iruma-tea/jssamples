"use strict";

function onH1ButtonClick() {
  let headTitle = document.getElementById("headTitle");

  console.log(headTitle);
}

function onH1TextButtonClick() {
  let headTitle = document.getElementById("headTitle");
  let headTitleText = headTitle.textContent;
  console.log(headTitleText);
}

function onH1TextAltButtonClick() {
  let headTitle = document.getElementById("headTitle");
  headTitle.textContent = "idによる取得サンプル";
}
