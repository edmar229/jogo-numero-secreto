function calcularFatorial(numero) {
  if (numero < 0) {
    return "Erro: O número não pode ser negativo.";
  }

  let fatorial = 1;
  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  return `O fatorial de ${numero} é: ${fatorial}`;
}

console.log(calcularFatorial(15))
