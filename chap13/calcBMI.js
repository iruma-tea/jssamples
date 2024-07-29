"use strict";

window.addEventListener("DOMContentLoaded", function () {
  let heightInput = document.getElementById("heightInput");
  heightInput.addEventListener("input", checkInput);
  heightInput.addEventListener("blur", checkInput);

  let weightInput = document.getElementById("weightInput");
  weightInput.addEventListener("input", checkInput);
  weightInput.addEventListener("blur", checkInput);

  function checkInput() {
    let buttonEnabled = true;

    let heightStr = heightInput.value;
    let height = Number(heightStr);
    let heightInputMsg = document.getElementById("heightInputMsg");
    if (heightStr.length === 0) {
      buttonEnabled = false;
      heightInputMsg.textContent = "身長を入力してください。";
    } else if (!isFinite(height)) {
      buttonEnabled = false;
      heightInputMsg.textContent = "身長には数値を入力してください。";
    } else if (height < 0) {
      buttonEnabled = false;
      heightInputMsg.textContent = "身長には請求を入力してください。";
    } else {
      heightInputMsg.textContent = "";
    }

    let weightStr = weightInput.value;
    let weight = Number(weightStr);
    let weightInputMsg = document.getElementById("weightInputMsg");
    if (weightStr.length === 0) {
      buttonEnabled = false;
      weightInputMsg.textContent = "体重を入力してください。";
    } else if (!isFinite(weight)) {
      buttonEnabled = false;
      weightInputMsg.textContent = "体重には数値を入力してください。";
    } else if (weight < 0) {
      buttonEnabled = false;
      weightInputMsg.textContent = "体重には正数を入力してください。";
    } else {
      weightInputMsg = "";
    }

    let calcBMIButton = document.getElementById("calcBMIButton");
    if (buttonEnabled) {
      calcBMIButton.removeAttribute("disabled");
    } else {
      calcBMIButton.setAttribute("disabled", "disabled");
    }
  }
});

function onCalcBMIButtonClick() {
  let heightInput = document.getElementById("heightInput");
  let height = heightInput.value;
  let weightInput = document.getElementById("weightInput");
  let weight = weightInput.value;

  let bmiObj = new BMI(height, weight);
  let bmi = bmiObj.getBMI();

  let bmiResult = document.getElementById("bmiResult");
  bmiResult.textContent = bmi;

  let advice = bmiObj.getAdvice();
  let adviceMessage = document.getElementById("adviceMessage");
  adviceMessage.textContent = advice;

  let resultMessage = document.getElementById("resultMessage");
  resultMessage.classList.remove("displayNone");
}
