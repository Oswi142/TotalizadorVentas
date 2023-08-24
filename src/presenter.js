import devolverTotal from "./devolverTotal";

const price = document.querySelector("#precio-item");
const form = document.querySelector("#total-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstPrice = Number.parseInt(price.value);

  div.innerHTML = "<p>" + "Precio total: " + devolverTotal(firstPrice) + "</p>";
});
