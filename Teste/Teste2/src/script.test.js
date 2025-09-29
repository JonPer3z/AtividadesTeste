const { calcularAreaTrap } = require("./script");

describe("Função calcularAreaTrap()", () => {
  test("Deve calcular corretamente a área (B=10, b=6, h=4)", () => {
    expect(calcularAreaTrap(10, 6, 4)).toBe(32);
  });

  test("Deve calcular corretamente com valores decimais", () => {
    expect(calcularAreaTrap(5.5, 2.5, 3)).toBeCloseTo(12, 0);
  });

  test("Deve lançar erro se algum valor for NaN", () => {
    expect(() => calcularAreaTrap("a", 5, 4)).toThrow("Valores inválidos");
    expect(() => calcularAreaTrap(10, undefined, 3)).toThrow("Valores inválidos");
  });

  test("Deve calcular corretamente se altura for zero", () => {
    expect(calcularAreaTrap(10, 6, 0)).toBe(0);
  });

  test("Deve calcular corretamente com valores negativos", () => {
    expect(calcularAreaTrap(-10, 6, 4)).toBe((-10 + 6) * 4 / 2); // -8
  });
});


