class ListaConvidadoController {
  constructor() {
    this.contador = 1
  }

  adicionar() {
    let nomeConvidado = document.getElementById('nomeConvidado').value

    if (this.validar(nomeConvidado)) {
      let lista = document.getElementById('lista')

      let itemNovo = document.createElement('div')
      itemNovo.id = 'item-' + this.contador

      let divNumero = document.createElement('div')
      let divNome = document.createElement('div')
      let divRemover = document.createElement('div')

      divNumero.innerText = this.contador
      divNome.innerText = nomeConvidado

      let imagemRemover = document.createElement('img')

      imagemRemover.src = 'img/delete.svg'
      imagemRemover.setAttribute(
        'onclick',
        'convidadoController.remover(' + this.contador + ')'
      )

      divRemover.appendChild(imagemRemover)
      itemNovo.appendChild(divNumero)
      itemNovo.appendChild(divNome)
      itemNovo.appendChild(divRemover)
      lista.appendChild(itemNovo)

      this.contador++

      this.cancelar()
    } else {
      alert('Digite o nome do convidado!')
    }
  }

  remover(itemId) {
    if (
      confirm(
        'Tem certeza que deseja remover o elemento numero ' + itemId + '?'
      )
    ) {
      document.getElementById('item-' + itemId).remove()
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
