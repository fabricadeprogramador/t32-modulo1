var numero1
var numero2

class CalculadoraController {
  lerCampos() {
    numero1 = parseFloat(document.getElementById('n1').value)
    numero2 = parseFloat(document.getElementById('n2').value)
  }

  resolver(operador) {
    this.lerCampos()

    var resultado = eval(numero1 + operador + numero2)

    this.limpar()
    this.mensageiro(resultado)
  }

  mensageiro(msg) {
    document.getElementById('mensagem').textContent = 'O resultado é: ' + msg

    this.exibirMensagem()
  }

  exibirMensagem() {
    document
      .getElementById('card-mensagem')
      .classList.remove('ocultar-elemento')
  }

  fecharMensagem() {
    document.getElementById('card-mensagem').classList.add('ocultar-elemento')
  }

  limpar() {
    document.getElementById('n1').value = ''
    document.getElementById('n2').value = ''
  }
}

var calcController = new CalculadoraController()
