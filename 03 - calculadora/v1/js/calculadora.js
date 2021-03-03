function somar() {
  //Capturando os valores dos inputs
  var numero1 = parseFloat(document.getElementById('n1').value)

  var numeroEmString = document.getElementById('n2').value

  var numero2 = parseFloat(numeroEmString)

  var resultado = numero1 + numero2

  limpar()

  document.getElementById('mensagem').textContent =
    'O resultado da soma é: ' + resultado

  exibirMensagem()
}

function subtrair() {
  var numero1 = parseFloat(document.getElementById('n1').value)
  var numero2 = parseFloat(document.getElementById('n2').value)

  var resultado = numero1 - numero2

  limpar()

  document.getElementById('mensagem').textContent =
    'O resultado da subtração é: ' + resultado

  exibirMensagem()
}

function multiplicar() {
  var numero1 = parseFloat(document.getElementById('n1').value)
  var numero2 = parseFloat(document.getElementById('n2').value)

  var resultado = numero1 * numero2

  limpar()

  document.getElementById('mensagem').textContent =
    'O resultado da multiplicação é: ' + resultado

  exibirMensagem()
}

function dividir() {
  var numero1 = parseFloat(document.getElementById('n1').value)
  var numero2 = parseFloat(document.getElementById('n2').value)

  var resultado = numero1 / numero2

  limpar()

  document.getElementById('mensagem').textContent =
    'O resultado da divisão é: ' + resultado

  exibirMensagem()
}

function exibirMensagem() {
  document.getElementById('card-mensagem').classList.remove('ocultar-elemento')
}

function fecharMensagem() {
  document.getElementById('card-mensagem').classList.add('ocultar-elemento')
}

function limpar() {
  document.getElementById('n1').value = ''
  document.getElementById('n2').value = ''
}
