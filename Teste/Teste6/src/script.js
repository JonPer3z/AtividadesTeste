function mostrarResultado(disciplina) {
  if (typeof disciplina !== 'string' || disciplina.trim() === '') {
    throw new Error('Disciplina inválida');
  }
  return `Olá! Você escolheu a disciplina: ${disciplina}.`;
}

function contarVogais(str) {
  if (typeof str !== 'string') {
    throw new Error('A entrada deve ser uma string.');
  }

  if (str.length === 0) {
    return 0;
  }

  const vogais = 'aeiou';
  let contador = 0;

  for (let char of str.toLowerCase()) {
    if (vogais.includes(char)) {
      contador++;
    }
  }

  return contador;
}

module.exports = { mostrarResultado, contarVogais};
