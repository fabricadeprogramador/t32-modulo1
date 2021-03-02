function somar() {
  //Capturando os valores dos inputs
  var numero1 = parseFloat(document.getElementById('n1').value)

  var numeroEmString = document.getElementById('n2').value

  var numero2 = parseFloat(numeroEmString)

  var resultado = numero1 + numero2

  limpar()

  document.getElementById('mensagem').textContent =
    'O resultado da soma é: ' + resultado
}

function subtrair() {
  var numero1 = parseFloat(document.getElementById('n1').value)
  var numero2 = parseFloat(document.getElementById('n2').value)

  alert(numero1 - numero2)
}

function multiplicar() {
  var numero1 = parseFloat(document.getElementById('n1').value)
  var numero2 = parseFloat(document.getElementById('n2').value)

  alert(numero1 * numero2)
}

function dividir() {
  var numero1 = parseFloat(document.getElementById('n1').value)
  var numero2 = parseFloat(document.getElementById('n2').value)

  alert(numero1 / numero2)
}

function limpar() {
  document.getElementById('n1').value = ''
  document.getElementById('n2').value = ''
}
