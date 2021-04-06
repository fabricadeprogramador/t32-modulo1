class ListaConvidadoController {
  constructor() {}

  adicionar() {
    let nomeConvidado = document.getElementById('nomeConvidado').value

    if (this.validar(nomeConvidado)) {
      let lista = document.getElementById('lista')
      let itemDaLista = document.createElement('li')
      itemDaLista.innerText = nomeConvidado

      lista.appendChild(itemDaLista)

      this.cancelar()
    } else {
      alert('Digite o nome do convidado!')
    }
  }

  validar(nome) {
    if (nome == '') {
      return false
    }
    return true
  }

  cancelar() {
    document.getElementById('nomeConvidado').value = ''
  }
}

let convidadoController = new ListaConvidadoController()
