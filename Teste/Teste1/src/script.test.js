const { antecessorSucessor } = require('./script');

describe('Função antecessorSucessor()', () => {

  test('Deve calcular antecessor e sucessor de 10', () => {
    expect(antecessorSucessor(10)).toEqual({ antecessor: 9, sucessor: 11 });
  });

  test('Deve calcular antecessor e sucessor de 0', () => {
    expect(antecessorSucessor(0)).toEqual({ antecessor: -1, sucessor: 1 });
  });

  test('Deve calcular antecessor e sucessor de número negativo', () => {
    expect(antecessorSucessor(-5)).toEqual({ antecessor: -6, sucessor: -4 });
  });

  test('Deve lidar com entrada vazia e gerar NaN', () => {
    expect(antecessorSucessor('')).toEqual({ antecessor: NaN, sucessor: NaN });
  });
  test('Deve retornar NaN para string', () => {
      const resultado = antecessorSucessor('abc');
      expect(resultado.antecessor).toBeNaN();
      expect(resultado.sucessor).toBeNaN();
    });
    test('Deve calcular antecessor e sucessor de 3.7', () => {
        const resultado = antecessorSucessor(3.7);
        expect(resultado.antecessor).toBeCloseTo(2.7, 2);
        expect(resultado.sucessor).toBeCloseTo(4.7, 2);
      });

      test('Deve calcular antecessor e sucessor de -2.25', () => {
        const resultado = antecessorSucessor(-2.25);
        expect(resultado.antecessor).toBeCloseTo(-3.25, 5);
        expect(resultado.sucessor).toBeCloseTo(-1.25, 5);
      });

});


