function converterDolarParaReal(valorEmDolar) {
  if (valorEmDolar <= 0) {
    return "Erro: O valor em dólar deve ser maior que zero.";
  }

  const cotacaoDolar = 4.80;
  const valorEmReal = valorEmDolar * cotacaoDolar;

  return `O valor em real equivalente é: R$${valorEmReal.toFixed(2)}`;
}

console.log(converterDolarParaReal(1.75))
