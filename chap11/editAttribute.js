"use strict";

function onP2RedButtonClick() {
  let showText = document.getElementById("showText");
  showText.setAttribute("class", "redText");
}

function onP2DefaultButtonClick() {
  let showText = document.getElementById("showText");
  showText.removeAttribute("class");
}
