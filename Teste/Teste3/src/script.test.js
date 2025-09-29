const { converterTemperaturaValor } = require("./script");

describe("Função converterTemperaturaValor()", () => {
  test("Converte corretamente 0°C", () => {
    const resultado = converterTemperaturaValor(0);
    expect(resultado.celsius).toBe(0);
    expect(resultado.fahrenheit).toBe(32);
    expect(resultado.kelvin).toBeCloseTo(273.15);
  });

  test("Converte corretamente valores positivos", () => {
    const resultado = converterTemperaturaValor(100);
    expect(resultado.celsius).toBe(100);
    expect(resultado.fahrenheit).toBe(212);
    expect(resultado.kelvin).toBeCloseTo(373.15);
  });

  test("Converte corretamente valores negativos", () => {
    const resultado = converterTemperaturaValor(-40);
    expect(resultado.celsius).toBe(-40);
    expect(resultado.fahrenheit).toBe(-40);
    expect(resultado.kelvin).toBeCloseTo(233.15);
  });

  test("Lança erro quando valor inválido", () => {
    expect(() => converterTemperaturaValor("abc")).toThrow("Valor inválido");
    expect(() => converterTemperaturaValor("")).toThrow("Valor inválido");
    expect(() => converterTemperaturaValor(null)).toThrow("Valor inválido");
  });

  test("Converte corretamente valor decimal (36.6°C - Temperatura corporal)", () => {
    const celsius = 36.6;
    const resultado = converterTemperaturaValor(celsius);
    expect(resultado.celsius).toBe(celsius);
    expect(resultado.fahrenheit).toBeCloseTo(97.88);
    expect(resultado.kelvin).toBeCloseTo(309.75);
  });

  test("Testa o limite físico do Zero Absoluto (-273.15°C)", () => {
    const zeroAbsolutoC = -273.15;
    const resultado = converterTemperaturaValor(zeroAbsolutoC);
    expect(resultado.celsius).toBe(zeroAbsolutoC);
    expect(resultado.fahrenheit).toBeCloseTo(-459.67);
    expect(resultado.kelvin).toBeCloseTo(0, 5);
  });
});



