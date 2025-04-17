let input = "";

function press(value) {
  input += value;
  document.getElementById("display").innerText = input;
}

function calculate() {
  try {
    const result = eval(input);
    document.getElementById("display").innerText = result;
    input = ""; // Clear after showing result
  } catch (e) {
    document.getElementById("display").innerText = "Error";
    input = "";
  }
}
