

let expression = "";
const display = document.getElementById("display");
const errorDiv = document.getElementById("error");

function append(value) {
  expression += value;
  display.textContent = expression;
  errorDiv.textContent = "";
}

function clearDisplay() {
  expression = "";
  display.textContent = "0";
  errorDiv.textContent = "";
}

function backspace() {
  expression = expression.slice(0, -1);
  display.textContent = expression || "0";
}

function calculate() {
  try {
    const result = eval(expression);
    display.textContent = result;
    expression = result.toString();
  } catch (error) {
    errorDiv.textContent = "Invalid Operation";
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  document.body.style.background = document.body.classList.contains("dark-theme") ? "#222" : "#e0e0e0";
}
