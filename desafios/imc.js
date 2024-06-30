function calcularIMC(altura, peso) {
  if (altura <= 0 || peso <= 0) {
    return "Erro: Altura e peso devem ser maiores que zero.";
  }

  const imc = peso / (altura * altura);
  return `O IMC da pessoa é: ${imc.toFixed(2)}`;
}

console.log(calcularIMC(1.80, 120))
