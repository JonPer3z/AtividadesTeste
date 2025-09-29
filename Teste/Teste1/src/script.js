function antecessorSucessor(numero) {
  const n = parseFloat(numero); // usar parseFloat para manter decimais
  return {
    antecessor: n - 1,
    sucessor: n + 1
  };
}

module.exports = { antecessorSucessor };
