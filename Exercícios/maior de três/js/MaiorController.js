class MaiorController {
  constructor() {
    this.numero1
    this.numero2
    this.numero3
  }

  lerDados() {
    this.numero1 = document.getElementById('numero1').value
    this.numero2 = document.getElementById('numero2').value
    this.numero3 = document.getElementById('numero3').value
  }

  eValido() {
    if (this.numero1 == '' || this.numero2 == '' || this.numero2 == '') {
      alert('Preencha todos os campos!')
      return false
    }
    return true
  }

  converterParaNumerico() {
    this.numero1 = parseFloat(this.numero1)
    this.numero2 = parseFloat(this.numero2)
    this.numero3 = parseFloat(this.numero3)
  }

  executar() {
    this.lerDados()
    if (this.eValido()) {
      this.converterParaNumerico()
      var resultado = this.calcularMaior()
      this.exibirMensagem(resultado)
    }
  }

  exibirMensagem(msg) {
    alert('O maior número é o ' + msg)
  }

  calcularMaior() {
    //TODO: FINALIZAR
    //Verificação do maior
    if (this.numero1 >= this.numero2) {
      if (this.numero1 > this.numero3) {
        //Numero1 é o maior
      } else {
        //1 é maior que o 2 mas menor que o 3
        //3 é o maior
      }
    }
  }
}

var controller = new MaiorController()
