"use strict";

function onAddListItemButtonClick() {
  let addListItemInput = document.getElementById("addListItemInput");
  let addListItemInputText = addListItemInput.value;
  let listItem = document.createElement("li");
  listItem.textContent = addListItemInputText;
  listItem.classList.add("blueText");
  let skillList = document.getElementById("skillList");

  skillList.appendChild(listItem);
}

function onRemoveListItemButtonClick() {
  let skillList = document.getElementById("skillList");
  skillList.removeChild(skillList.lastElementChild);
}

function onAddLinkButtonClick() {
  let addLinkUrlText = document.getElementById("addLinkUrl").value;
  let addLinkNameText = document.getElementById("addLinkName").value;
  let addHtml = '<a href="' + addLinkUrlText + '">' + addLinkNameText + "</a>";
  let addLink = document.getElementById("addLink");
  addLink.innerHTML = addHtml;
}
