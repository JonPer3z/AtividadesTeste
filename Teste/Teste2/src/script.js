function calcularAreaTrap(baseMaior, baseMenor, altura) {
  if (isNaN(baseMaior) || isNaN(baseMenor) || isNaN(altura)) {
    throw new Error("Valores inválidos");
  }
  return ((baseMaior + baseMenor) * altura) / 2;
}

module.exports = { calcularAreaTrap};
