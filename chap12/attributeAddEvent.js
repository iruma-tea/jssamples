"use strict";

function onCheckallChanged() {
  let checkall = document.getElementById("checkall");
  if (checkall.checked) {
    checkall.nextSibling.textContent = "すべて外す";
  } else {
    checkall.nextSibling.textContent = "すべてチェック";
  }

  let checkboxes = document.getElementsByName("skill");
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = checkall.checked;
  }
}
