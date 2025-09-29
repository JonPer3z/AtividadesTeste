function manipularFrase(frase) {
  if (typeof frase !== 'string') {
    throw new Error('Entrada inválida');
  }

  return {
    numCaracteres: frase.length,
    fraseMaiuscula: frase.toUpperCase(),
    fraseMinuscula: frase.toLowerCase()
  };
}

module.exports = { manipularFrase };
