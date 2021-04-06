class ListaConvidadoController {
  constructor() {
    this.contador = 1
    this.buffer = ''
  }

  adicionar() {
    let nomeAtual = document.getElementById('nomeConvidado').value
    this.buffer += this.contador + '. ' + nomeAtual + '\n'

    this.contador++

    document.getElementById('lista').innerText = this.buffer

    this.cancelar()
  }

  cancelar() {
    document.getElementById('nomeConvidado').value = ''
  }
}

let convidadoController = new ListaConvidadoController()
