const { mostrarResultado, contarVogais } = require('./script');

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

  test('Lança erro para string vazia ou com apenas espaços', () => {
    expect(() => mostrarResultado('')).toThrow('Disciplina inválida');
    expect(() => mostrarResultado(' ')).toThrow('Disciplina inválida');
    expect(() => mostrarResultado('   ')).toThrow('Disciplina inválida');
  });
});

describe('Função contarVogais()', () => {
  test('Deve contar vogais corretamente em strings com maiúsculas e minúsculas', () => {
    expect(contarVogais('Ola Mundo')).toBe(4);
  });

  test('Deve retornar 0 para uma string vazia', () => {
    expect(contarVogais('')).toBe(0);
  });

  test('Deve lançar um erro se a entrada não for do tipo string', () => {
    expect(() => contarVogais(123)).toThrow('A entrada deve ser uma string.');
    expect(() => contarVogais(null)).toThrow('A entrada deve ser uma string.');
    expect(() => contarVogais(undefined)).toThrow('A entrada deve ser uma string.');
    expect(() => contarVogais({})).toThrow('A entrada deve ser uma string.');
    expect(() => contarVogais([])).toThrow('A entrada deve ser uma string.');
  });
});