

var elForm = document.querySelector(".js-form");

var elFormInput = elForm.querySelector(".js-input");
var elFormEndInput = elForm.querySelector(".js-end-input");

var elResult = document.querySelector(".js-result");
var elTextArea = document.querySelector("#jsTextArea");

// console.log(elForm, elFormInput, elResult);

elForm.addEventListener("submit", function (evt) {

  evt.preventDefault();

  var inputValue = elFormInput.value.trim();
  var endInputValue = elFormEndInput.value.trim();
  var textAreaValue = elTextArea.value.trim();

  // console.log(inputValue, textAreaValue);
  var firstInput = textAreaValue.indexOf(inputValue);
  var secondInput = textAreaValue.indexOf(endInputValue);
  var resultIndex = textAreaValue.substring(firstInput + inputValue.length, secondInput);

  elResult.textContent = resultIndex;

});