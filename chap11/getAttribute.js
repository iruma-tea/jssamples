"use strict";

function onFreewordButtonClick() {
  let freewordInput = document.getElementById("freewordInput");
  let freewordInputValue = freewordInput.value;
  let freewordInputName = freewordInput.getAttribute("name");
  let showInput = document.getElementById("showInput");
  showInput.textContent =
    "name属性が" + freewordInputName + "の入力された値: " + freewordInputValue;
}
