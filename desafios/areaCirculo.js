function calcularAreaPerimetroSalaCircular(raio) {
  if (raio <= 0) {
    return "Erro: O raio deve ser maior que zero.";
  }

  const pi = 3.14;
  const area = pi * raio * raio;
  const perimetro = 2 * pi * raio;

  return `Área: ${area.toFixed(2)} m²\nPerímetro: ${perimetro.toFixed(2)} m`;
}

console.log(calcularAreaPerimetroSalaCircular(2.37))
