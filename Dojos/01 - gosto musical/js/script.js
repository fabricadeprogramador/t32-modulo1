class JukeboxController {
  constructor() {
    this.nome
    this.estilos
    this.qtdMpb = 0
    this.qtdRock = 0
    this.qtdPagode = 0
    this.qtdFunk = 0
    this.qtdForro = 0
    this.qtdClassica = 0
    this.mensagem = ''
  }

  adicionar() {
    this.nome = document.getElementById('nome').value
    this.mensagem = this.nome
    var lista = document.getElementById('lista')
    var itemLista = document.createElement('li')
    this.somaQtd()
    itemLista.innerText = this.mensagem
    lista.appendChild(itemLista)
  }

  relatorio() {
    document.getElementById('mpb-qtd').innerText = this.qtdMpb
    document.getElementById('rock-qtd').innerText = this.qtdRock
    document.getElementById('pagode-qtd').innerText = this.qtdPagode
    document.getElementById('funk-qtd').innerText = this.qtdFunk
    document.getElementById('forro-qtd').innerText = this.qtdForro
    document.getElementById('classica-qtd').innerText = this.qtdClassica
  }

  somaQtd() {
    if (document.getElementById('mpb').checked) {
      this.qtdMpb++
      this.mensagem = this.mensagem + ' MPB'
    }

    if (document.getElementById('rock').checked) {
      this.qtdRock++
      this.mensagem = this.mensagem + ' Rock'
    }

    if (document.getElementById('pagode').checked) {
      this.qtdPagode++
      this.mensagem = this.mensagem + ' Pagode'
    }

    if (document.getElementById('funk').checked) {
      this.qtdFunk++
      this.mensagem = this.mensagem + ' Funk'
    }

    if (document.getElementById('forro').checked) {
      this.qtdForro++
      this.mensagem = this.mensagem + ' Forró'
    }

    if (document.getElementById('classica').checked) {
      this.qtdClassica++
      this.mensagem = this.mensagem + ' Clássica'
    }
  }
}

var jukebox = new JukeboxController()
