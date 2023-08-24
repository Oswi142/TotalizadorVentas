import { devolverPrecio } from "./devolverTotal";
import { devolverCantidad } from "./devolverTotal";
import { devolverTotal } from "./devolverTotal";
import { devolverEstado } from "./devolverTotal";
import { devolverImpuesto } from "./devolverTotal";

const price = document.querySelector("#precio-item");
const cantidad = document.querySelector("#cantidad-item");
const estado = document.querySelector("#estados");
const form = document.querySelector("#total-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstPrice = Number.parseInt(price.value);
  const firstCantidad = Number.parseInt(cantidad.value);
  const firstEstado = estado.value;

  div.innerHTML = "<p>" + "Precio por ítem: " + devolverPrecio(firstPrice) + "</p>";
  div.innerHTML += "<p>" + "Cantidad de ítems: " + devolverCantidad(firstCantidad) + "</p>";
  div.innerHTML += "<p>" + "Código de estado: " + devolverEstado(firstEstado) + "</p>";
  div.innerHTML += "<p>" + "Impuesto para: " + devolverEstado(firstEstado) +": " + devolverImpuesto(firstEstado) +"%"+"</p>";
  div.innerHTML += "<p>" + "Precio neto: (" + devolverPrecio(firstPrice)+"x $"+ devolverCantidad(firstCantidad) + ") : $" + devolverTotal(firstPrice,firstCantidad) +"</p>";
  
});
