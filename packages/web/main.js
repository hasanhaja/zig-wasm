const addButton = document.getElementById("add");
const addOutput = document.getElementById("add-output");

const multiplyButton = document.getElementById("multiply");
const multiplyOutput = document.getElementById("multiply-output");

const fibButton = document.getElementById("fib");
const fibOutput = document.getElementById("fib-output");

const resetButton = document.getElementById("reset");

const result = await WebAssembly.instantiateStreaming(fetch("assets/main.wasm"), {
  env: {
    debug: (i) => console.log(i),
  },
});

const add = result.instance.exports.add;
const multiply = result.instance.exports.multiply;
const fib = result.instance.exports.fibonacci;

console.log(fib);

addButton.addEventListener("click", () => {
  const result = add(7, 3);
  addOutput.textContent = result;
});

multiplyButton.addEventListener("click", () => {
  const result = multiply(7, 3);
  multiplyOutput.textContent = result;
});

fibButton.addEventListener("click", () => {
  const result = fib(15);
  fibOutput.textContent = result;
});

resetButton.addEventListener("click", () => {
  fibOutput.textContent = 0;
  multiplyOutput.textContent = 0;
  addOutput.textContent = 0;
});
