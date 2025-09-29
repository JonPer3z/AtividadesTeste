const { calcularArea } = require('./script');

describe('Função calcularArea()', () => {

  test('Calcula corretamente a área de raio 5', () => {
    expect(calcularArea(5)).toBeCloseTo(78.50, 1);
  });

  test('Calcula corretamente a área de raio decimal 2.5', () => {
    expect(calcularArea(2.5)).toBeCloseTo(19.63, 2);
  });

  test('Calcula corretamente a área de raio decimal 3.5', () => {
    expect(calcularArea(3.5)).toBeCloseTo(38.48, 2);
  });

  test('Lança erro para valor negativo', () => {
    expect(() => calcularArea(-3)).toThrow('Raio inválido');
  });

  test('Lança erro para valor 0', () => {
    expect(() => calcularArea(0)).toThrow('Raio inválido');
  });

  test('Lança erro para valor não numérico', () => {
    expect(() => calcularArea('abc')).toThrow('Raio inválido');
  });

  test('Lança erro para valor nulo', () => {
    expect(() => calcularArea("")).toThrow('Raio inválido');
  });

  test('Lança erro para valor undefined', () => {
    expect(() => calcularArea()).toThrow('Raio inválido');
  });

  test('Calcula corretamente área com número em string "3.2"', () => {
    expect(calcularArea("3.2")).toBe(32.17);
  });

});
