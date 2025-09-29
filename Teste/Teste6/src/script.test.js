const { mostrarResultado } = require('./script');

describe('Função mostrarResultado()', () => {

  test('Retorna mensagem correta para disciplina válida', () => {
    expect(mostrarResultado('Matemática')).toBe('Olá! Você escolheu a disciplina: Matemática.');
    expect(mostrarResultado('História')).toBe('Olá! Você escolheu a disciplina: História.');
  });

  test('Lança erro quando a entrada não é string', () => {
    expect(() => mostrarResultado(123)).toThrow('Disciplina inválida');
    expect(() => mostrarResultado(null)).toThrow('Disciplina inválida');
    expect(() => mostrarResultado(undefined)).toThrow('Disciplina inválida');
    expect(() => mostrarResultado({})).toThrow('Disciplina inválida');
  });

  test('Lança erro quando a string está vazia ou apenas com espaços', () => {
    expect(() => mostrarResultado('')).toThrow('Disciplina inválida');
    expect(() => mostrarResultado('')).toThrow('Disciplina inválida');
  });
      test('Retorna 0 para strings sem vogais', () => {
        expect(contarVogais('rhythm')).toBe(0);
        expect(contarVogais('xypzt')).toBe(0);
    });
});
