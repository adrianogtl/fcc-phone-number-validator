const userInput = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const resultsDiv = document.querySelector("#results-div");

const regex = /^(1? ?)(\(\d{3}\)|\d{3})( |-|)\d{3}( |-|)\d{4}$/;

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPhone();
  }
});
checkBtn.addEventListener("click", () => checkPhone());
clearBtn.addEventListener("click", () => clear());

function checkPhone() {
  const input = userInput.value;
  if (!input) {
    return alert("Please provide a phone number");
  }
  const isValid = regex.test(input);
  if (isValid) {
    resultsDiv.textContent = `Valid US number: ${userInput.value}`;
    resultsDiv.style.color = "#0f0";
    resultsDiv.style.fontWeight = "normal";
  } else {
    resultsDiv.textContent = `Invalid US number: ${userInput.value}`;
    resultsDiv.style.color = "#f00";
    resultsDiv.style.fontWeight = "bold";
  }
}

function clear() {
  resultsDiv.textContent = "";
  userInput.value = "";
}
