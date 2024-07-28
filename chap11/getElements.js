"use strict";

function onTagButtonClick() {
  let buttonTags = document.getElementsByTagName("button");
  let result = "";
  for (let i = 0; i < buttonTags.length; i++) {
    result += buttonTags[i].textContent + ":";
  }
  let resultP = document.getElementById("result");
  resultP.textContent = result;
}

function onClassButtonClick() {
  let redElements = document.getElementsByClassName("redText");
  let result = "";
  for (let i = 0; i < redElements.length; i++) {
    result += redElements[i].textContent + ":";
  }
  let resultP = document.getElementById("result");
  resultP.textContent = result;
}

function onNameButtonClick() {
  let checkboxes = document.getElementsByName("skill");
  let result = "チェックされたもの:";
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result += checkboxes[i].value + ",";
    }
  }
  let resultP = document.getElementById("result");
  resultP.textContent = result;
}
