class ListaConvidadoController {
  constructor() {
    this.buffer = ''
    this.convidados = []
  }

  adicionar() {
    let nomeAtual = document.getElementById('nomeConvidado').value

    this.convidados.push(nomeAtual)

    document.getElementById('quantidade').innerText =
      'Quantidade de Convidados: ' + this.convidados.length
    document.getElementById('lista').innerText = this.convidados.join('\n')

    this.cancelar()
  }

  cancelar() {
    document.getElementById('nomeConvidado').value = ''
  }
}

let convidadoController = new ListaConvidadoController()
