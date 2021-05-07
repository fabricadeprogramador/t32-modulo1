class CamiseteriaController {
  constructor() {
    this.pedidos = []
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

  salvar() {
    let pedidoNovo = this.criarPedido()

    if (this.validar(pedidoNovo)) {
      pedidoNovo.total =
        pedidoNovo.qtdP * 10 + pedidoNovo.qtdM * 12 + pedidoNovo.qtdG * 15

      this.pedidos.push(pedidoNovo)
      this.gerarTabela()
      this.limpar()
    }
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

    //TODO: SETAR OS ONCLICKS

    colunaRemover.appendChild(imagemRemover)
    colunaEditar.appendChild(imagemEditar)
  }

  limpar() {
    document.getElementById('qtdP').value = ''
    document.getElementById('qtdM').value = ''
    document.getElementById('qtdG').value = ''
  }
}

let camiseteriaController = new CamiseteriaController()
