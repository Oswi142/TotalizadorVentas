import { devolverImpuesto, devolverPrecio } from "./devolverTotal";
import { devolverCantidad } from "./devolverTotal";
import { devolverTotal } from "./devolverTotal";
import { devolverEstado } from "./devolverTotal";

describe("Devolver total", () => {
  it("deberia devolver el total", () => {
    expect(devolverPrecio(3)).toEqual(3);
  });
  it("deberia devolver la cantidad", () => {
    expect(devolverCantidad(3)).toEqual(3);
  });
  it("deberia devolver el estado", () => {
    expect(devolverEstado("CA")).toEqual("CA");
  });
  it("deberia devolver el impuesto del estado", () => {
    expect(devolverImpuesto("UT")).toEqual(6.65);
  });
  it("deberia devolver el impuesto del estado", () => {
    expect(devolverImpuesto("NV")).toEqual(8.00);
  });
  it("deberia devolver el impuesto del estado", () => {
    expect(devolverImpuesto("TX")).toEqual(6.25);
  });
  it("deberia devolver el impuesto del estado", () => {
    expect(devolverImpuesto("AL")).toEqual(4.00);
  });
  it("deberia devolver el impuesto del estado", () => {
    expect(devolverImpuesto("CA")).toEqual(8.25);
  });
  it("deberia devolver el precio total con impuesto de AC", () => {
    expect(devolverTotal(300,3,"CA")).toEqual(1642.5);
  });
  it("deberia devolver el precio total con impuesto de TX", () => {
    expect(devolverTotal(300,3,"TX")).toEqual(1462.5);
  });
  it("deberia devolver el precio total con impuesto de AL", () => {
    expect(devolverTotal(300,3,"AL")).toEqual(1260);
  });
  it("deberia devolver el precio total con impuesto de NV", () => {
    expect(devolverTotal(300,3,"NV")).toEqual(1620);
  });
  it("deberia devolver el precio total con impuesto de UT", () => {
    expect(devolverTotal(300,3,"UT")).toEqual(1498.5);
  });
});

