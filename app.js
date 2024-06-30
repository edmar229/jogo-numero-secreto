let listaNumerosSorteados = []
let numeroLimite = 3
let numeroSecreto
let tentativas = 0

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1)
  verificarListaSorteados(numeroEscolhido)
}

function verificarListaSorteados(numeroEscolhido) {
  if(listaNumerosSorteados.length == numeroLimite) {
    listaNumerosSorteados = []
  }
  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    gerarNumeroAleatorio()
  } else {
    listaNumerosSorteados.push(numeroEscolhido)
    console.log(listaNumerosSorteados)
    numeroSecreto = numeroEscolhido
  }
}

gerarNumeroAleatorio()

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag)
  campo.innerHTML = texto
}

function exibirMensagemInicial() {
  exibirTextoNaTela('h1', 'Jogo do número secreto')
  exibirTextoNaTela('p', 'Escolha um numero de 1 a 10')
}
exibirMensagemInicial()

function verificarChute() {
  contarTentativas()
  let chute = document.querySelector('input').value
  if (chute == numeroSecreto) {
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    exibirTextoNaTela('h1', 'Você certou!')
    exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`)
    habilitarNovoJogo()
  } else {
    compararChute(chute, numeroSecreto)
    limparCampo()
  }
}

function compararChute(chute, numeroSecreto) {
  if (chute > numeroSecreto) {
    exibirTextoNaTela('p', 'O número é menor.')
  } else {
    exibirTextoNaTela('p', 'o número é maior.')
  }
}

function contarTentativas() {
  tentativas++
}

function limparCampo() {
  document.querySelector('input').value = ''
}

function habilitarNovoJogo() {
  let botao = document.getElementById('reiniciar')
  botao.removeAttribute('disabled')
}

function desabilitarNovoJogo() {
  let botao = document.getElementById('reiniciar')
  botao.setAttribute('disabled', true)
}

function reiniciarJogo() {
  limparCampo()
  gerarNumeroAleatorio()
  tentativas = 0
  exibirMensagemInicial()
  desabilitarNovoJogo()
}
