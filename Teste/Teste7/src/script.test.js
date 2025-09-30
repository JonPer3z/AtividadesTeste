const { calcularDesconto } = require('./script');

describe('Função calcularDesconto()', () => {

  test('Calcula corretamente desconto de 10% em R$200', () => {
    const resultado = calcularDesconto(200, 10);
    expect(resultado.precoOriginal).toBe(200);
    expect(resultado.descontoPercentual).toBe(10);
    expect(resultado.precoFinal).toBe(180);
  });

  test('Calcula corretamente desconto de 25% em R$200', () => {
    const resultado = calcularDesconto(300, 25);
    expect(resultado.precoOriginal).toBe(300);
    expect(resultado.descontoPercentual).toBe(25);
    expect(resultado.precoFinal).toBe(225);
  });


  test('Calcula corretamente desconto com valores decimais', () => {
    const resultado = calcularDesconto(123.45, 12.5);
    expect(resultado.precoOriginal).toBe(123.45);
    expect(resultado.descontoPercentual).toBe(12.5);
    expect(resultado.precoFinal).toBe(108.02); 
  });

  test('Lança erro para preço negativo ou inválido', () => {
    expect(() => calcularDesconto(-50, -10)).toThrow('Preço inválido');
    expect(() => calcularDesconto('abc', 10)).toThrow('Preço inválido');
  });

test('Lança erro para desconto inválido', () => {
  expect(() => calcularDesconto(100, 150)).toThrow('Desconto inválido');
  expect(() => calcularDesconto(100, 'abc')).toThrow('Desconto inválido');
  expect(() => calcularDesconto(100, -10)).toThrow('Desconto inválido');
});

  test('Calcula corretamente desconto de 0%', () => {
    const resultado = calcularDesconto(50, 0);
    expect(resultado.precoOriginal).toBe(50);
    expect(resultado.descontoPercentual).toBe(0);
    expect(resultado.precoFinal).toBe(50);
  });

  test('Calcula corretamente desconto de 100%', () => {
    const resultado = calcularDesconto(75, 100);
    expect(resultado.precoOriginal).toBe(75);
    expect(resultado.descontoPercentual).toBe(100);
    expect(resultado.precoFinal).toBe(0);
  });

  test('Calcula corretamente preço com número em string', () => {
    const resultado = calcularDesconto('200', '10');
    expect(resultado.precoOriginal).toBe(200);
    expect(resultado.descontoPercentual).toBe(10);
    expect(resultado.precoFinal).toBe(180);
  });

});
