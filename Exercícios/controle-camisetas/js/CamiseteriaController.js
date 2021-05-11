class CamiseteriaController {
  constructor() {
    this.pedidos = []
    this.geradorId = 1
    this.pedidoDeEdicao = null
  }

  criarPedido() {
    let pedido = {}

    pedido.qtdP = document.getElementById('qtdP').value
    pedido.qtdM = document.getElementById('qtdM').value
    pedido.qtdG = document.getElementById('qtdG').value

    return pedido
  }

  validar(pedido) {
    if (pedido.qtdP != '' && pedido.qtdM != '' && pedido.qtdG != '') {
      pedido.qtdP = parseInt(pedido.qtdP)
      pedido.qtdM = parseInt(pedido.qtdM)
      pedido.qtdG = parseInt(pedido.qtdG)

      if (pedido.qtdP >= 0 && pedido.qtdM >= 0 && pedido.qtdG >= 0) {
        return true
      } else {
        alert('Quantidades precisam ser positivas!')
        return false
      }
    }

    alert('Preencha todos os campos!')
    return false
  }

  calcularTotal(pedido) {
    return pedido.qtdP * 10 + pedido.qtdM * 12 + pedido.qtdG * 15
  }

  salvar() {
    let pedidoNovo = this.criarPedido()

    if (this.validar(pedidoNovo)) {
      if (this.pedidoDeEdicao == null) {
        pedidoNovo.id = this.geradorId
        pedidoNovo.total = this.calcularTotal(pedidoNovo)

        this.pedidos.push(pedidoNovo)
        this.geradorId++
      } else {
        for (let i = 0; i < this.pedidos.length; i++) {
          if (this.pedidos[i].id == this.pedidoDeEdicao) {
            this.pedidos[i].qtdP = pedidoNovo.qtdP
            this.pedidos[i].qtdM = pedidoNovo.qtdM
            this.pedidos[i].qtdG = pedidoNovo.qtdG
            this.pedidos[i].total = this.calcularTotal(pedidoNovo)
          }
        }
      }
    }

    this.gerarTabela()
    this.limpar()
  }

  gerarTabela() {
    document.getElementById('tabelaCorpo').innerHTML = ''

    for (let i = 0; i < this.pedidos.length; i++) {
      this.inserirLinha(this.pedidos[i])
    }
  }

  inserirLinha(pedido) {
    let corpoTabela = document.getElementById('tabelaCorpo')

    let linha = corpoTabela.insertRow()

    let colunaP = linha.insertCell()
    let colunaM = linha.insertCell()
    let colunaG = linha.insertCell()
    let colunaTotal = linha.insertCell()
    let colunaRemover = linha.insertCell()
    let colunaEditar = linha.insertCell()

    colunaP.innerText = pedido.qtdP
    colunaM.innerText = pedido.qtdM
    colunaG.innerText = pedido.qtdG
    colunaTotal.innerText = 'R$ ' + pedido.total.toFixed(2)

    let imagemRemover = document.createElement('img')
    let imagemEditar = document.createElement('img')

    imagemRemover.src = 'img/delete.svg'
    imagemEditar.src = 'img/edit.svg'

    imagemRemover.setAttribute(
      'onclick',
      'camiseteriaController.remover(' + pedido.id + ')'
    )

    imagemEditar.setAttribute(
      'onclick',
      `camiseteriaController.editar(${JSON.stringify(pedido)})`
    )

    // `camiseteriaController.editar(${pedido.id}, ${pedido.qtdP}, ${pedido.qtdM}, ${pedido.qtdG})`
    colunaRemover.appendChild(imagemRemover)
    colunaEditar.appendChild(imagemEditar)
  }

  limpar() {
    document.getElementById('qtdP').value = ''
    document.getElementById('qtdM').value = ''
    document.getElementById('qtdG').value = ''

    this.pedidoDeEdicao = null
  }

  remover(idPedido) {
    if (confirm('Tem certeza que deseja remover este pedido?')) {
      for (let i = 0; i < this.pedidos.length; i++) {
        if (idPedido == this.pedidos[i].id) {
          this.pedidos.splice(i, 1)
          break
        }
      }

      this.gerarTabela()
    }
  }

  editar(pedido) {
    this.pedidoDeEdicao = pedido.id
    document.getElementById('qtdP').value = pedido.qtdP
    document.getElementById('qtdM').value = pedido.qtdM
    document.getElementById('qtdG').value = pedido.qtdG
  }
}

let camiseteriaController = new CamiseteriaController()
