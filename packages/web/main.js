const addButton = document.getElementById("add");
const addOutput = document.getElementById("add-output");

const multiplyButton = document.getElementById("multiply");
const multiplyOutput = document.getElementById("multiply-output");

const result = await WebAssembly.instantiateStreaming(fetch("assets/main.wasm"));
const add = result.instance.exports.add;
const multiply = result.instance.exports.multiply;

addButton.addEventListener("click", () => {
  const result = add(7, 3);
  addOutput.textContent = result;
});

multiplyButton.addEventListener("click", () => {
  const result = multiply(7, 3);
  multiplyOutput.textContent = result;
});
