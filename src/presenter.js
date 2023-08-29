import { devolverDescuento, devolverPrecio, devolverTotal } from "./devolverTotal";
import { devolverCantidad } from "./devolverTotal";
import { devolverEstado } from "./devolverTotal";
import { devolverImpuesto } from "./devolverTotal";
import { devolverPrecioNeto } from "./devolverTotal";
import { devolverTotalDef } from "./devolverTotal";

const price = document.querySelector("#precio-item");
const cantidad = document.querySelector("#cantidad-item");
const estado = document.querySelector("#estados");
const form = document.querySelector("#total-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "";
  const firstPrice = Number.parseInt(price.value);
  const firstCantidad = Number.parseInt(cantidad.value);
  const firstEstado = estado.value;
  let desc=devolverTotal(firstPrice,firstCantidad,firstEstado)-devolverTotalDef(firstPrice,firstCantidad,firstEstado);
  
  div.innerHTML += "<p>" + "Precio neto: (" + devolverPrecio(firstPrice)+" x $"+ devolverCantidad(firstCantidad) + ") : $" + devolverPrecioNeto(firstPrice,firstCantidad) +"</p>";
  div.innerHTML += "<p>" + "Impuesto para " + devolverEstado(firstEstado) +": " + devolverImpuesto(firstEstado) +"%"+"</p>";
  div.innerHTML += "<p>" + "Descuento(" + devolverDescuento(firstPrice,firstCantidad,firstEstado)+ "%) : " + desc +"</p>";
  div.innerHTML += "<p>" + "Precio Total(descuento e impuesto): $" + devolverTotalDef(firstPrice,firstCantidad,firstEstado) +"</p>";
});
