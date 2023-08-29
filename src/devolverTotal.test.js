import { devolverCantidad, devolverDescuento, devolverPrecioNeto } from "./devolverTotal";
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
  it("deberia devolver el precio neto", () => {
    expect(devolverPrecioNeto(10,10)).toEqual(100);
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
  it("deberia devolver el precio total con impuesto de CA", () => {
    expect(devolverTotal(300,3,"CA")).toEqual(974.25);
  });
  it("deberia devolver el precio total con impuesto de TX", () => {
    expect(devolverTotal(300,3,"TX")).toEqual(956.25);
  });
  it("deberia devolver el precio total con impuesto de AL", () => {
    expect(devolverTotal(300,3,"AL")).toEqual(936);
  });
  it("deberia devolver el precio total con impuesto de NV", () => {
    expect(devolverTotal(300,3,"NV")).toEqual(972.0000000000001);
  });
  it("deberia devolver el precio total con impuesto de UT", () => {
    expect(devolverTotal(300,3,"UT")).toEqual(959.85);
  });
  it("deberia devolver el precio total con impuesto y descuento de 1000", () => {
    expect(devolverTotalDef(500,3,"CA")).toEqual(1575.0375);
  });
  it("deberia devolver el precio total con impuesto y descuento de 3000", () => {
    expect(devolverTotalDef(500,7,"CA")).toEqual(3599.3125);
  });
  it("deberia devolver el precio total con impuesto y descuento de 7000", () => {
    expect(devolverTotalDef(1000,7,"CA")).toEqual(7047.075000000001 );
  });
  it("deberia devolver el precio total con impuesto y descuento de 10000", () => {
    expect(devolverTotalDef(2500,5,"CA")).toEqual(12178.125);
  });
  it("deberia devolver el precio total con impuesto y descuento de 30000", () => {
    expect(devolverTotalDef(3000,10,"CA")).toEqual(27603.75);
  });
  it("deberia devolver el precio total con impuesto y descuento default", () => {
    expect(devolverTotalDef(10,10,"CA")).toEqual(108.25);
  });
  it("deberia devolver el desc en porcentaje 3", () => {
    expect(devolverDescuento(500,3,"CA")).toEqual(3);
  });
  it("deberia devolver el desc en porcentaje 5", () => {
    expect(devolverDescuento(500,7,"CA")).toEqual(5);
  });
  it("deberia devolver el desc en porcentaje 7", () => {
    expect(devolverDescuento(1000,7,"CA")).toEqual(7);
  });
  it("deberia devolver el desc en porcentaje 10", () => {
    expect(devolverDescuento(2500,5,"CA")).toEqual(10);
  });
  it("deberia devolver el desc en porcentaje 15", () => {
    expect(devolverDescuento(3000,10,"CA")).toEqual(15);
  });
  it("deberia devolver el desc en porcentaje", () => {
    expect(devolverDescuento(10,10,"CA")).toEqual(0);
  });
});

