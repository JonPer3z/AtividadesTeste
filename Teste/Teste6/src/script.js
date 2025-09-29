function mostrarResultado(disciplina) {
  if (typeof disciplina !== 'string' || disciplina.trim() === '') {
    throw new Error('Disciplina inválida');
  }
  return `Olá! Você escolheu a disciplina: ${disciplina}.`;
}

function contarVogais(str) {
  if (typeof str !== 'string') {
    throw new Error("Entrada inválida: Esperada uma string.");
  }

  if (str.length === 0) {
    return 0;
  }

  const vogais = 'aeiouáéíóúãõâêîôû';
  let contador = 0;

  const lowerStr = str.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    if (vogais.includes(lowerStr[i])) {
      contador++;
    }
  }

  return contador;
}

module.exports = { mostrarResultado, contarVogais };
