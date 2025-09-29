function converterTemperaturaValor(celsius) {
  const c = parseFloat(celsius);
  if (isNaN(c)) throw new Error("Valor inválido");

  const fahrenheit = (c * 9 / 5) + 32;
  const kelvin = c + 273.15;

  return { celsius: c, fahrenheit, kelvin };
}

module.exports = { converterTemperaturaValor };
