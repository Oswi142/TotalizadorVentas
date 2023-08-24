import devolverTotal from "./devolverTotal";

describe("Devolver total", () => {
  it("deberia devolver el total", () => {
    expect(devolverTotal(3)).toEqual(3);
  });
});
