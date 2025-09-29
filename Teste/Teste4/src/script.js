function calcularArea(raio) {
  const r = parseFloat(raio);

  if (isNaN(r) || r <= 0) {   // agora 0 também é inválido
    throw new Error('Raio inválido');
  }

  const area = Math.PI * Math.pow(r, 2);
  return parseFloat(area.toFixed(2));
}

module.exports = { calcularArea };

