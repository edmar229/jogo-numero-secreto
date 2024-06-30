function calcularAreaPerimetroSalaRetangular(altura, largura) {
  if (altura <= 0 || largura <= 0) {
    return "Erro: Altura e largura devem ser maiores que zero.";
  }

  const area = altura * largura;
  const perimetro = 2 * (altura + largura);

  return `Área: ${area.toFixed(2)} m²\nPerímetro: ${perimetro.toFixed(2)} m`;
}

console.log(calcularAreaPerimetroSalaRetangular(23,45))
