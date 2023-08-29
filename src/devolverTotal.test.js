import { devolverCantidad } from "./devolverTotal";
import { devolverTotal } from "./devolverTotal";
import { devolverEstado } from "./devolverTotal";
import { devolverPrecio } from "./devolverTotal";
import { devolverImpuesto } from "./devolverTotal";
import { devolverTotalDef } from "./devolverTotal";

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
  it('devuelve el impuesto correcto para cada estado', () => {
    expect(devolverImpuesto("UT")).toEqual(6.65);
    expect(devolverImpuesto("NV")).toEqual(8.00);
    expect(devolverImpuesto("TX")).toEqual(6.25);
    expect(devolverImpuesto("AL")).toEqual(4.00);
    expect(devolverImpuesto("CA")).toEqual(8.25);
    expect(devolverImpuesto("")).toEqual(0);
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
  it("deberia devolver el precio total con impuesto y descuento de 1000", () => {
    expect(devolverTotalDef(500,3,"CA")).toEqual(2655.375);
  });
  it("deberia devolver el precio total con impuesto y descuento de 3000", () => {
    expect(devolverTotalDef(500,7,"CA")).toEqual(6068.125);
  });
  it("deberia devolver el precio total con impuesto y descuento de 7000", () => {
    expect(devolverTotalDef(800,7,"CA")).toEqual(9198);
  });
  it("deberia devolver el precio total con impuesto y descuento de 10000", () => {
    expect(devolverTotalDef(2500,5,"CA")).toEqual(20531.25);
  });
  it("deberia devolver el precio total con impuesto y descuento de 30000", () => {
    expect(devolverTotalDef(3000,10,"CA")).toEqual(46537.5);
  });
});

