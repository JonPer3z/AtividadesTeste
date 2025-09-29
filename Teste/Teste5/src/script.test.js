const { manipularFrase } = require('./script');

describe('Função manipularFrase()', () => {

  test('Conta corretamente o número de caracteres', () => {
    const resultado = manipularFrase('Olá Mundoo');
    expect(resultado.numCaracteres).toBe(10);
  });

  test('Converte para maiúsculas corretamente', () => {
    const resultado = manipularFrase('Olá Mundo');
    expect(resultado.fraseMaiuscula).toBe('OLÁ MUNDO');
  });

  test('Converte para minúsculas corretamente', () => {
    const resultado = manipularFrase('Olá MundO');
    expect(resultado.fraseMinuscula).toBe('olá mundo');
  });

  test('Função retorna objeto com todas as propriedades', () => {
    const resultado = manipularFrase('Teste');
    expect(resultado).toEqual({
      numCaracteres: 5,
      fraseMaiuscula: 'TESTE',
      fraseMinuscula: 'teste'
    });
  });

  test('Lança erro quando a entrada não é uma string', () => {
    expect(() => manipularFrase(123)).toThrow('Entrada inválida');
    expect(() => manipularFrase(null)).toThrow('Entrada inválida');
    expect(() => manipularFrase(undefined)).toThrow('Entrada inválida');
    expect(() => manipularFrase({})).toThrow('Entrada inválida');
  });

  test('Funciona corretamente com string vazia', () => {
    const resultado = manipularFrase('');
    expect(resultado.numCaracteres).toBe(0);
    expect(resultado.fraseMaiuscula).toBe('');
    expect(resultado.fraseMinuscula).toBe('');
  });
  function resumirString(str) {
    if (typeof str !== 'string') {
      throw new Error("Entrada inválida: O valor fornecido deve ser uma string.");
    }

    const length = str.length;

    const wordsArray = str.trim().split(/\s+/).filter(Boolean);
    const palavras = wordsArray.length;

    const primeiraLetra = length > 0 ? str[0] : null;
    const ultimaLetra = length > 0 ? str[length - 1] : null;

    return {
      original: str,
      length: length,
      palavras: palavras,
      primeiraLetra: primeiraLetra,
      ultimaLetra: ultimaLetra
    };
  }

});

