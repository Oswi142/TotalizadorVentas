import { devolverPrecio } from "./devolverTotal";
import { devolverCantidad } from "./devolverTotal";

describe("Devolver total", () => {
  it("deberia devolver el total", () => {
    expect(devolverPrecio(3)).toEqual(3);
  });
  it("deberia devolver el la cantidad", () => {
    expect(devolverCantidad(3)).toEqual(3);
  });
});

