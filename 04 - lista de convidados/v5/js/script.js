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

    for (let i = 0; i < this.convidados.length; i++) {
      console.log(this.convidados[i] + ' ')
    }

    this.cancelar()
  }

  cancelar() {
    document.getElementById('nomeConvidado').value = ''
  }
}

let convidadoController = new ListaConvidadoController()
