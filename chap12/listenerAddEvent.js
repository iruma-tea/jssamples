"use strict";

window.addEventListener("DOMContentLoaded", function () {
  let messageArea = document.getElementById("messageArea");
  messageArea.addEventListener("input", function () {
    let message = messageArea.value;
    let msgLength = message.length;
    let showMessageLength = document.getElementById("showMessageLength");
    showMessageLength.textContent = msgLength + "/70";
    if (msgLength > 70) {
      messageArea.classList.add("alertBg");
    } else {
      messageArea.classList.remove("alertBg");
    }
  });
});
