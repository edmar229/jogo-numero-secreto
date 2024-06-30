function mostrarTabuada(numero) {
  if (numero <= 0) {
    return "Erro: O número deve ser maior que zero.";
  }

  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

console.log(mostrarTabuada(1089))
