var numero1
var numero2

function lerCampos() {
  numero1 = parseFloat(document.getElementById('n1').value)
  numero2 = parseFloat(document.getElementById('n2').value)
}

function resolver(operador) {
  lerCampos()

  var resultado = eval(numero1 + operador + numero2)

  limpar()
  mensageiro(resultado)
}

function mensageiro(msg) {
  document.getElementById('mensagem').textContent = 'O resultado é: ' + msg

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

// function somar(n1, n2) {
//   var resultado = n1 + n2
// }

// function subtrair() {
//   var numero1 = parseFloat(document.getElementById('n1').value)
//   var numero2 = parseFloat(document.getElementById('n2').value)

//   var resultado = numero1 - numero2

//   limpar()

//   document.getElementById('mensagem').textContent =
//     'O resultado da subtração é: ' + resultado

//   exibirMensagem()
// }

// function multiplicar() {
//   var numero1 = parseFloat(document.getElementById('n1').value)
//   var numero2 = parseFloat(document.getElementById('n2').value)

//   var resultado = numero1 * numero2

//   limpar()

//   document.getElementById('mensagem').textContent =
//     'O resultado da multiplicação é: ' + resultado

//   exibirMensagem()
// }

// function dividir() {
//   var numero1 = parseFloat(document.getElementById('n1').value)
//   var numero2 = parseFloat(document.getElementById('n2').value)

//   var resultado = numero1 / numero2

//   limpar()

//   document.getElementById('mensagem').textContent =
//     'O resultado da divisão é: ' + resultado

//   exibirMensagem()
// }
