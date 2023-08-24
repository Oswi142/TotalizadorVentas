import { devolverPrecio } from "./devolverTotal";
import { devolverCantidad } from "./devolverTotal";

const price = document.querySelector("#precio-item");
const cantidad = document.querySelector("#cantidad-item");
const form = document.querySelector("#total-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstPrice = Number.parseInt(price.value);
  const firstCantidad = Number.parseInt(cantidad.value);

  div.innerHTML = "<p>" + "Precio por ítem: " + devolverPrecio(firstPrice) + "</p>";
  div.innerHTML += "<p>" + "Cantidad de ítems: " + devolverCantidad(firstCantidad) + "</p>";

});
