"use strict";

const inputs = document.querySelectorAll(".box input");
const c = document.querySelector("#celsius");
const f = document.querySelector("#fahrenheit");
const k = document.querySelector("#kelvin");
const buttons = document.querySelector(".btn");
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const unit = e.target.id;
    const v = parseFloat(e.target.value);

    if (unit === "celsius") {
      f.value = parseFloat(v * 1.8 + 32).toFixed(4) * 1;
      k.value = parseFloat(v + 273.15).toFixed(4) * 1;
    } else if (unit === "fahrenheit") {
      c.value = parseFloat(((v - 32) * 5) / 9).toFixed(4) * 1;
      k.value = parseFloat(((v - 32) * 5) / 9 + 273.15).toFixed(4) * 1;
    } else if (unit === "kelvin") {
      c.value = parseFloat(v - 273.15).toFixed(4) * 1;
      f.value = parseFloat(((v - 273.15) * 9) / 5 + 32).toFixed(4) * 1;
    }
  });
});

buttons.addEventListener("click", function () {
  c.value = 0;
  f.value = 32;
  k.value = 273.15;
  console.log(k.value);
  console.log(c.value);
  console.log(f.value);
});
