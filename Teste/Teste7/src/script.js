function calcularDesconto(precoProduto, descontoPercentual) {
  const preco = parseFloat(precoProduto);
  const desconto = parseFloat(descontoPercentual);

  if (isNaN(preco) || preco < 0) {
    throw new Error('Preço inválido');
  }

  if (isNaN(desconto) || desconto < 0 || desconto > 100) {
    throw new Error('Desconto inválido');
  }

  const precoComDesconto = preco - (preco * (desconto / 100));

  return {
    precoOriginal: Number(preco.toFixed(2)),
    descontoPercentual: Number(desconto.toFixed(2)),
    precoFinal: Number(precoComDesconto.toFixed(2)) // arredonda corretamente para 2 casas
  };
}

module.exports = { calcularDesconto };

